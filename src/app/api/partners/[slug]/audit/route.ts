import _ from 'lodash'
import { schedule } from '@/config/schedule'
import { NextResponse } from 'next/server'
import { MintType } from '@/components/MintDialog/types'
import { getArweaveById } from '@/utils/getArweaveById'
import { createPublicClient, http } from 'viem'
import { mainnet, base } from 'viem/chains'

const bearer_token = process.env.TWITTER_BEARER_TOKEN

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  if (request.headers.get('x-api-key') !== process.env.OCS_API_KEY)
    return NextResponse.json({}, { status: 401 })
  try {
    const mainnetClient = createPublicClient({
      chain: mainnet,
      transport: http(),
    })
    const baseClient = createPublicClient({
      chain: base,
      transport: http(),
    })
    const info: string[] = []
    const warn: string[] = []
    const error: string[] = []
    const slug = params.slug

    if (!slug) {
      throw new Error('No slug provided')
    }

    const date = Object.keys(schedule).find(
      (date) => schedule[date].slug === slug
    )

    if (!date) {
      throw new Error('No data found')
    }

    const partner = schedule[date]

    // Check for empty values
    const emptyPartnerInfoLogs = _(partner)
      .pickBy(_.isEmpty)
      .keys()
      .map((key) => `ERROR: Empty value for key: ${key}`)
      .value()
    const emptyDropLogs = _(partner.drops)
      .map((drop, index) =>
        _(drop)
          .pickBy(_.isEmpty)
          .pickBy(_.isString)
          .pickBy((val, key) => !_.includes(['description'], key))
          .keys()
          .map((key) => {
            if (
              drop.mintType === MintType.External &&
              key === 'crossMintClientId'
            ) {
              return `INFO: Empty value for key: drops[${index}].${key} for external mintType this is OK`
            }

            return `ERROR: Empty value for key: drops[${index}].${key}`
          })
          .value()
      )
      .flatten()
      .value()

    // Check for valid date ranges in drops
    const dateRangeLogs = _(partner.drops)
      .map((drop, index) => {
        if (drop.startDate > drop.endDate) {
          return `ERROR: Start date is after end date for drop[${index}]`
        }

        return `INFO: Start date is before end date for drop[${index}]`
      })
      .value()

    // Check for duplication
    const duplicateLogs = _(partner)
      .pickBy((val) => !_.isEmpty(val))
      .keys()
      .map((key) => {
        return _(schedule)
          .map((otherPartner) => {
            return otherPartner.slug === slug ? '' : _.get(otherPartner, key)
          })
          .includes(_.get(partner, key))
          ? `ERROR: Duplicate value for key: ${key}`
          : `INFO: No duplicate value for key: ${key}`
      })
      .value()

    const duplicateDropLogs = _(partner.drops)
      .map((drop, index) =>
        _(drop)
          .pickBy((val, key) =>
            _.includes(
              ['creator', 'address', 'image', 'name', 'crossMintId'],
              key
            )
          )
          .keys()
          .map((key) => {
            const flat = _(schedule)
              .map((otherPartner) => {
                return otherPartner.slug === slug
                  ? _(partner.drops)
                      .filter((v, k) => k !== index)
                      .pickBy((val, key) =>
                        _.includes(['creator', 'address'], key)
                      )
                      .map((v) => _.get(v, key))
                      .value()
                  : _(otherPartner.drops)
                      .map((v) => _.get(v, key))
                      .value()
              })
              .flatten()
              .value()
            return flat.includes(_.get(drop, key))
              ? `ERROR: duplicate value for key: drops[${index}].${key}`
              : `INFO: No duplicate value for key: drops[${index}].${key}`
          })
          .value()
      )
      .flatten()
      .value()

    // Check Arweave digest
    try {
      if (partner.aarweaveDigest) {
        const arweaveArticle = await getArweaveById(partner.aarweaveDigest)
        if (arweaveArticle?.content?.title) {
          info.push(`Arweave article title: ${arweaveArticle?.content?.title}`)
        } else {
          error.push(`Arweave article not found`)
        }
      }
    } catch (ex) {
      error.push(`Arweave article not invalid`)
    }

    // Check Twitter handle
    try {
      if (partner.twitter) {
        const username = partner.twitter.replace('@', '')
        const twitterUsernameResponse = await fetch(
          `https://api.twitter.com/2/users/by/username/${username}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
              Authorization: `Bearer ${bearer_token}`,
            },
            next: { revalidate: 15 * 60 },
          }
        )
        const response = await twitterUsernameResponse.json()
        if (response?.data?.username.toLowerCase() === username.toLowerCase()) {
          info.push(`Twitter username found: ${username}`)
        } else {
          error.push(`Twitter username not found: ${username}`)
        }
      }
    } catch (ex) {
      error.push(`Twitter username not invalid`)
    }

    // Check creators ENS
    const creators = _(partner.drops)
      .map((drop) => drop.creator)
      .uniq()
      .pickBy((v) => !_.isEmpty(v))
      .value()

    const ensLogs = await Promise.all(
      _.map(creators, async (creator) => {
        try {
          const name = await mainnetClient.getEnsName({
            address: creator as any,
          })
          return `INFO: ENS fetched successfully ${creator} => ${name}`
        } catch (ex) {
          console.log(ex)
          return `ERROR: ENS fetch failed ${creator}`
        }
      })
    )

    // Contract deployed
    const contracts = _(partner.drops)
      .map((drop) => drop.address)
      .uniq()
      .pickBy((v) => !_.isEmpty(v) && v.length > 3)
      .value()
    const contractLogs = await Promise.all(
      _.map(contracts, async (address) => {
        try {
          const response = await baseClient.readContract({
            address: address as any,
            abi: [
              {
                stateMutability: 'view',
                type: 'function',
                inputs: [],
                name: 'name',
                outputs: [{ name: '', internalType: 'string', type: 'string' }],
              },
            ],
            functionName: 'name',
          })
          return `INFO: Contract is deployed successfully at ${address} with name ${response}`
        } catch (ex) {
          return `ERROR: Contract is not deploy at ${address}`
        }
      })
    )

    // Misc checks
    const miscLogs = [
      // https schema recommendation check
      partner.url.startsWith('https://')
        ? 'INFO: URL starts with https://'
        : 'WARN: URL does not start with https://',
    ]

    for (const log of [
      ...emptyPartnerInfoLogs,
      ...emptyDropLogs,
      ...dateRangeLogs,
      ...miscLogs,
      ...duplicateLogs,
      ...duplicateDropLogs,
      ...ensLogs,
      ...contractLogs,
    ]) {
      if (log.startsWith('ERROR:')) {
        error.push(log.replace('ERROR: ', ''))
      } else if (log.startsWith('INFO:')) {
        info.push(log.replace('INFO: ', ''))
      } else {
        warn.push(log)
      }
    }
    return NextResponse.json({ info, warn, error })
  } catch (error) {
    return NextResponse.json(
      { message: (error as any)?.message, stack: (error as any)?.stack },
      { status: 400 }
    )
  }
}

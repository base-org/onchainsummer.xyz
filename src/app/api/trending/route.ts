import axios from 'axios'
import { NextResponse } from 'next/server'
import { Collection } from '@/utils/mintDotFunTypes'

const API_URL = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_URL
const API_KEY = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_KEY
const CHAIN = process.env.NEXT_PUBLIC_MINT_DOT_FUN_CHAIN_ID

interface MediaObject {
  ethPrice: string
  imageURI: string
  mimeType: string
  mintTime: string
  title: string
  tokenID: string
  value: string
}

interface Media {
  contract: string
  media: MediaObject[]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const connectedWallet = searchParams.get('connectedWallet')

  const url = `${API_URL}/collections?connectedWallet=${connectedWallet}&chain=${CHAIN}`
  1
  try {
    let media: Media[] = []

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    if (response.data.collections && Array.isArray(response.data.collections)) {
      for (let collection of response.data.collections) {
        const mediaResponse = await axios.get(
          `${API_URL}/collections/${collection.contractAddress}/media`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        )

        media.push({
          contract: collection.contract,
          media: [...mediaResponse?.data.media],
        })
      }
    }

    const newData = response?.data?.collections.map(
      (collection: Collection) => {
        const mints = media.find(
          (media) => media.contract === collection.contract
        )

        return {
          name: collection.name,
          contract: collection.contract,
          mintsLastHour: collection.mintsLastHour,
          mintStatus: collection.mintStatus,
          externalURL: collection.externalURL,
          imageURL: collection.imageURL,
          deployer: collection.deployer,
          images: mints,
        }
      }
    )

    return NextResponse.json({ collections: newData })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

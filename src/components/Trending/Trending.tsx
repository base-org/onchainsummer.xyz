'use client'

import clsx from 'clsx'
import { useQuery } from 'react-query'
import { FC } from 'react'
import React from 'react'
import { formatEther } from 'viem'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { MintButton } from '@/components/MintButton'
import { CollectionPlaceholder } from '@/components/CollectionPlaceholder'
import { UpArrow } from '@/components/icons/UpArrow'
import { MintDotFun } from '@/components/icons/MintDotFun'
import { RightArrow } from '@/components/icons/RightArrow'

import { Collection } from '@/utils/mintDotFunTypes'
import { shortenAddress } from '@/utils/address'
import { useAccount } from 'wagmi'
import { l2 } from '@/config/chain'
import { getTrendingData } from '@/utils/getTrendingData'
import { MintType } from '@/components/MintDialog/types'

export interface TrendingComponentProps {}

interface QueryResult {
  collections: Collection[]
}

export const Trending: FC<TrendingComponentProps> = () => {
  const { address: connectedWallet } = useAccount()
  const chainId = l2.id

  const { data, error, isLoading } = useQuery<QueryResult>({
    queryKey: [connectedWallet, chainId],
    queryFn: ({ queryKey }) => {
      const [connectedWallet, chainId] = queryKey

      return getTrendingData(connectedWallet as string, chainId as number)
    },
  })

  const collections = data?.collections?.slice(0, 3) || []
  return (
    <section className="p-4 bg-gray-white rounded-3xl shadow-large">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col [@media(min-width:724px)]:flex-row gap-4 items-start sm:items-center">
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-[#FCD22D]">
              <UpArrow height={32} width={32} />
            </div>
            <div className="">
              <h2 className="text-[32px] text-display">Trending</h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex items-center">
              <p className="text-[#010101] opacity-50 mr-3 font-mono uppercase my-2">
                Powered by{' '}
              </p>
              <MintDotFun />
              <span className="sr-only">mint.fun</span>
            </div>
          </div>
        </div>
        <Link
          href="/trending"
          className="hidden [@media(min-width:724px)]:inline-block"
        >
          <div className="flex h-full items-start sm:items-center gap-6 uppercase text-mono pr-6">
            <span>View All</span>
            <div>
              <RightArrow fill="black" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        {isLoading
          ? Array.from({ length: 3 }, (_, index) => (
              <div className="p-6" key={index}>
                <CollectionPlaceholder
                  height={88}
                  foregroundColor="#f5f5f5"
                  backgroundColor="#e5e5e5"
                />
              </div>
            ))
          : collections.map(
              (
                {
                  name,
                  images,
                  contract,
                  mintsLastHour,
                  mintStatus,
                  externalURL,
                  imageURL,
                },
                idx
              ) => (
                <div
                  key={externalURL}
                  className="w-full mb-6 sm:mb-0 last:mb-0 bg-white rounded-2xl sm:p-6"
                >
                  <div className="flex flex-wrap justify-between">
                    <div className="flex flex-row flex-wrap order-1 w-full lg:w-1/2">
                      <div className="flex flex-wrap lg:flex-nowrap basis-full md:mb-3 overflow-hidden">
                        <div className="flex items-start w-full md:w-auto">
                          <p className="text-neutral-400 mr-3 md:mr-[29px] text-mono md:text-lg mb-4 md:mb-0">
                            #{idx + 1}
                          </p>
                        </div>
                        <div className="flex gap-6">
                          <Image
                            src={images.media[0].imageURI}
                            alt=""
                            width={64}
                            height={64}
                            priority
                            className="rounded-lg"
                          />
                          <div>
                            <h3 className="text-black text-[20px] md:text-2xl whitespace-normal overflow-hidden break-all">
                              {name}
                            </h3>
                            <h4 className="text-sm font-medium font-mono text-[#858585]">
                              {shortenAddress(contract)}
                            </h4>
                            <p className="text-[#858585] font-mono text-sm md:text-base">
                              {mintsLastHour} mints last hour •{' '}
                              {formatEther(BigInt(mintStatus.price))} ETH
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="basis-full whitespace-normal overflow-hidden break-all"></div>
                    </div>
                    <div
                      className={clsx(
                        'flex gap-4 [@media(max-width:374px)]:flex-wrap lg:justify-end order-3 lg:order-2 w-full sm:w-1/2 lg:w-1/3 lg:max-h-[50px] mt-4 md:mt-0',
                        !connectedWallet && 'flex-wrap sm:flex-nowrap'
                      )}
                    >
                      <MintButton
                        price={formatEther(BigInt(mintStatus.tx.value))}
                        address={mintStatus.tx.to}
                        partnerIcon={''}
                        partnerName={name}
                        dropImage={imageURL || images.media[0].imageURI || ''}
                        dropName={name}
                        creatorAddress={mintStatus.tx.to}
                        mintDotFunStatus={mintStatus}
                        trendingPageNativeMint={true}
                        mintButtonStyles="w-1/3 sm:!max-w-fit"
                        mintType={MintType.MintDotFun}
                      />

                      <Button
                        size="SMALL"
                        className="grow lg:grow-0 uppercase border border-1 border-black !bg-white w-2/3 sm:max-w-fit"
                        variant="LIGHT"
                        href={externalURL}
                      >
                        View More
                      </Button>
                    </div>
                  </div>
                </div>
              )
            )}
        <Button
          className="flex justify-between [@media(min-width:724px)]:!hidden grow lg:grow-0 uppercase text-white !bg-black"
          variant="DARK"
          href="/trending"
        >
          View All
          <RightArrow fill="white" />
        </Button>
      </div>
    </section>
  )
}

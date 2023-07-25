'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { CollectionPlaceholder } from '@/components/CollectionPlaceholder'
import { useQuery } from 'react-query'
import { useAddress } from '@thirdweb-dev/react'
import { formatEther } from 'viem'
import { ThirdWeb } from '@/components/icons/ThirdWeb'
import { Zora } from '@/components/icons/Zora'
import { Manifold } from '@/components/icons/Manifold'
import { MintDotFun } from '@/components/icons/MintDotFun'
import { UpArrow } from '@/components/icons/UpArrow'
import { MintButton } from '@/components/MintButton'
import { Collection } from '@/utils/mintDotFunTypes'
import { PageContainer } from '@/components/PageContainer'
import clsx from 'clsx'

interface QueryResult {
  collections: Collection[]
}

async function fetchData(connectedWallet: string) {
  const res = await fetch(`/api/trending?connectedWallet=${connectedWallet}`)

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return data
}

const VISIBLE_NFTS = {
  mobile: 2,
}

export default function Trending() {
  const connectedWallet = useAddress()

  const { data, error, isLoading } = useQuery<QueryResult>({
    queryKey: [connectedWallet],
    queryFn: ({ queryKey }) => {
      const [connectedWallet] = queryKey
      return fetchData(connectedWallet as string)
    },
  })

  const collections = data?.collections

  console.log(collections, 'collections')
  return (
    <PageContainer>
      <div className="mx-6 mt-32">
        <section className="max-w-screen-xl mx-auto">
          <div className="flex items-start md:justify-between flex-col md:flex-row md:items-center w-full">
            <div className="w-full sm:w-[55%]">
              <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-[#FCD22D]">
                <UpArrow />
              </div>
              <h1 className="text-[46px] md:text-[40px] md:leading-[50px] my-6">
                Trending
              </h1>
              <p className="text-xl md:text-2xl my-2 font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div className="flex items-center">
                <p className="text-xl text-[#010101] opacity-50 mr-3 font-mono uppercase my-2">
                  Powered by{' '}
                </p>
                <MintDotFun />
                <span className="sr-only">mint.fun</span>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-6 mt-8 mb-32 bg-gray-200/80 rounded-[30px]">
            {isLoading
              ? Array.from({ length: 5 }, (_, index) => (
                  <CollectionPlaceholder key={index} height={214} />
                ))
              : collections?.map(
                  (
                    {
                      name,
                      images,
                      mintsLastHour,
                      mintStatus,
                      externalURL,
                      imageURL,
                    },
                    idx
                  ) => (
                    <div
                      key={externalURL}
                      className="w-full mb-6 last:mb-0 bg-white rounded-2xl p-6"
                    >
                      <div className="flex flex-wrap justify-between">
                        <div className="flex flex-row flex-wrap order-1 w-full lg:w-1/2">
                          <div className="flex flex-wrap md:flex-nowrap basis-full md:mb-3 overflow-hidden">
                            <div className="flex items-center w-full md:w-auto">
                              <p className="text-neutral-400 mr-3 md:mr-[29px] text-mono md:text-lg">
                                #{idx + 1}
                              </p>
                            </div>
                            <h3 className="text-black text-[20px] md:text-2xl whitespace-normal overflow-hidden break-all">
                              {name}
                            </h3>
                          </div>
                          <div className="basis-full whitespace-normal overflow-hidden break-all">
                            <p className="text-[#858585] font-mono text-sm md:text-base lg:ml-[54px]">
                              {mintsLastHour} mints last hour •{' '}
                              {formatEther(BigInt(mintStatus.price))} ETH
                            </p>
                          </div>
                        </div>
                        <div
                          className={clsx(
                            'flex gap-4 [@media(max-width:374px)]:flex-wrap lg:justify-end order-3 lg:order-2 w-full sm:w-1/2 lg:w-1/3 lg:max-h-[50px]',
                            !connectedWallet && 'flex-wrap sm:flex-nowrap'
                          )}
                        >
                          <MintButton
                            price={formatEther(BigInt(mintStatus.tx.value))}
                            address={mintStatus.tx.to}
                            partnerIcon={''}
                            partnerName={name}
                            dropImage={
                              imageURL || images.media[0].imageURI || ''
                            }
                            dropName={name}
                            creatorAddress={mintStatus.tx.to}
                            mintDotFunStatus={mintStatus}
                            trendingPageNativeMint={true}
                            mintButtonStyles="w-1/2 sm:!max-w-fit !py-[8px]"
                          />

                          <Button
                            size="SMALL"
                            className="grow lg:grow-0 uppercase border border-1 border-black !bg-white w-1/2 sm:max-w-fit"
                            variant="LIGHT"
                            href={externalURL}
                          >
                            View More
                          </Button>
                        </div>
                        <div className="grid grid-cols-4 [@media(min-width:600px)]:grid-cols-10 gap-4 items-center order-2 lg:order-3 mt-5 mb-4 md:mt-8 lg:mb-0  lg:ml-12">
                          {images.media.map(({ imageURI, title }, idx) => (
                            <div
                              key={imageURI}
                              className={`${
                                idx > VISIBLE_NFTS.mobile ? 'hidden' : 'block'
                              } [@media(min-width:600px)]:block `}
                            >
                              <Image
                                src={imageURI}
                                alt=""
                                width={64}
                                height={64}
                                priority
                                className="rounded-lg"
                              />
                            </div>
                          ))}
                          {images.media.length > 4 && (
                            <div className="flex [@media(min-width:600px)]:hidden justify-center items-center h-full w-full bg-transparent border-dashed border-2 border-[#BFBFBF] rounded-lg">
                              <span className="[@media(min-width:600px)]:hidden">
                                +{images.media.length - VISIBLE_NFTS.mobile - 1}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

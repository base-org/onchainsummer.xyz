'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { CollectionPlaceholder } from '@/components/CollectionPlaceholder'
import { Separator } from '@/components/Separator'
import { useQuery } from 'react-query'
import { MintDotFunMinter } from '@/components/MintDotFunMinter/MintDotFunMinter'
import { useAddress } from '@thirdweb-dev/react'
import { formatEther } from 'viem'

interface Mint {
  imageURI: string
}

interface Collection {
  name: string
  contract: string
  mintsLastHour: number
  recentMints: Mint[]
  externalURL: string
  deployer: string
  mintStatus: {
    price: string
    isMintable: boolean
    tx: {
      data: string
      quantity: string
      to: `0x${string}`
      tokenId: string
      value: string
    }
  }
}

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
  sm: 7,
  md: 10,
}

export default function Trending() {
  const connectedWallet = useAddress()

  const { data, error, isLoading } = useQuery<QueryResult>({
    queryKey: ['trending', connectedWallet],
    queryFn: ({ queryKey }) => fetchData(queryKey[1] as string),
  })

  const collections = data?.collections

  return (
    <main className="mx-6 mt-6">
      <section className="max-w-screen-xl mx-auto">
        <div className="flex items-start md:justify-between flex-col md:flex-row md:items-center w-full">
          <div>
            <h1 className="font-medium text-[32px] md:text-[40px] md:leading-[50px]">
              <span className="text-transparent bg-clip-text bg-blue-gradient">
                Onchain{' '}
              </span>
              trending
            </h1>
            <p className="text-sm md:text-xl text-[#010101] opacity-50 my-2 font-medium font-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod <br />
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <div className="flex items-center">
              <p className="text-xl text-[#010101] opacity-50 mr-3 font-medium font-text my-2">
                Powered by{' '}
              </p>
              <Image
                src="/trending/mint-fun.png"
                alt="Image Alt"
                width={128}
                height={20}
                priority
                className=""
              />
            </div>
          </div>
          <div>
            <div>
              <p className="text-neutral-500 text-sm md:text-lg mb-4 font-text font-medium">
                Join the party. Create on Base.
              </p>
              <div className="flex gap-1 sm:gap-2 lg:gap-7">
                <Image
                  src="/trending/crypto-icon-1.png"
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="hidden md:inline-block"
                />
                <Image
                  src="/trending/crypto-icon-1-mobile.png "
                  alt="Image Alt"
                  width={32}
                  height={32}
                  priority
                  className="md:hidden mr-3"
                />
                <Image
                  src="/trending/crypto-icon-2.png "
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="hidden md:inline-block"
                />
                <Image
                  src="/trending/crypto-icon-2-mobile.png "
                  alt="Image Alt"
                  width={32}
                  height={32}
                  priority
                  className="md:hidden mr-3"
                />
                <Image
                  src="/trending/crypto-icon-1.png "
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="hidden md:inline-block"
                />
                <Image
                  src="/trending/crypto-icon-1-mobile.png "
                  alt="Image Alt"
                  width={32}
                  height={32}
                  priority
                  className="md:hidden mr-3"
                />
                <Image
                  src="/trending/crypto-icon-2.png "
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="hidden md:inline-block"
                />
                <Image
                  src="/trending/crypto-icon-2-mobile.png "
                  alt="Image Alt"
                  width={32}
                  height={32}
                  priority
                  className="md:hidden mr-3"
                />
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-6 md:mt-8" />
        <div className="px-5 py-6 md:pl-8 lg:pr-[60px] md:py-10 border border-neutral-900 z-50 shadow-trending-card mt-8 mb-20">
          {isLoading
            ? Array.from({ length: 10 }, (_, index) => (
                <CollectionPlaceholder key={index} />
              ))
            : collections?.map(
                (
                  {
                    name,
                    deployer,
                    contract,
                    mintsLastHour,
                    recentMints,
                    mintStatus,
                    externalURL,
                  },
                  idx
                ) => (
                  <div key={idx} className="w-full mb-[72px] last:mb-0">
                    <div className="flex flex-wrap">
                      <div className="flex flex-row flex-wrap lg:basis-[55%] order-1 w-full">
                        <div className="flex basis-full mb-3 overflow-hidden">
                          <div className="flex items-center">
                            <p className="text-neutral-400 mr-3 md:mr-[29px] font-medium text-base md:text-lg">
                              #{idx + 1}
                            </p>
                          </div>
                          <h3 className="text-black font-sans font-medium text-[20px] md:text-2xl whitespace-normal overflow-hidden break-all">
                            {name}
                          </h3>
                        </div>
                        <div className="basis-full whitespace-normal overflow-hidden break-all">
                          <p className="text-neutral-600 font-text text-sm md:text-base font-medium lg:ml-[54px]">
                            {deployer} • {mintsLastHour} mints last hour •{' '}
                            {formatEther(BigInt(mintStatus.price))} ETH
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 lg:justify-end lg:basis-[45%] order-3 lg:order-2 w-full max-h-[50px]">
                        <MintDotFunMinter mintStatus={mintStatus} />
                        <Button
                          size="SMALL"
                          variant="SECONDARY"
                          className="grow lg:grow-0 text-2xl"
                          href={externalURL}
                        >
                          View More
                        </Button>
                      </div>
                      <div className="flex gap-4 items-center order-2 lg:order-3 mt-5 mb-4 md:mt-8 lg:mb-0  lg:ml-12">
                        {recentMints.map(({ imageURI }, idx) => (
                          <div
                            key={idx}
                            className={`${
                              idx > VISIBLE_NFTS.mobile ? 'hidden' : 'block'
                            } sm:${
                              idx > VISIBLE_NFTS.sm ? 'hidden' : 'block'
                            } md:${
                              idx > VISIBLE_NFTS.md ? 'hidden' : 'block'
                            } lg:block`}
                          >
                            <Image
                              src={imageURI}
                              alt="Image Alt"
                              width={65}
                              height={65}
                              priority
                            />
                          </div>
                        ))}
                        {recentMints.length > 4 && (
                          <div className="flex items-center justify-center lg:hidden p-[2px] bg-trending-linear-gradient">
                            <div className="flex justify-center items-center h-[65px] w-[65px] bg-[#F5F5F5]">
                              <span className="sm:hidden">
                                +{recentMints.length - VISIBLE_NFTS.mobile - 1}
                              </span>
                              <span className="hidden sm:block md:hidden">
                                +{recentMints.length - VISIBLE_NFTS.sm - 1}
                              </span>
                              <span className="hidden md:block">
                                +{recentMints.length - VISIBLE_NFTS.md - 1}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
        </div>
      </section>
    </main>
  )
}

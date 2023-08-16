'use client'

import Image from 'next/image'
import { CollectionPlaceholder } from '@/components/CollectionPlaceholder'
import { useQuery } from 'react-query'
import { formatEther } from 'viem'
import { MintDotFun } from '@/components/icons/MintDotFun'
import { UpArrow } from '@/components/icons/UpArrow'
import { MintButton } from '@/components/MintButton'
import { Collection } from '@/utils/mintDotFunTypes'
import { PageContainer } from '@/components/PageContainer'
import clsx from 'clsx'
import { useAccount } from 'wagmi'
import { l2 } from '@/config/chain'
import { getTrendingData } from '@/utils/getTrendingData'
import { MintType, siteDataSuffix } from '@/components/MintDialog/types'
import { shortenAddress } from '@/utils/address'
import { externalCbnftUrl } from '@/utils/externalCbnftUrl'
interface QueryResult {
  collections: Collection[]
}

const VISIBLE_NFTS = {
  mobile: 2,
}

export default function Trending() {
  const { address: connectedWallet } = useAccount()
  const chainId = l2.id
  const { data, error, isLoading } = useQuery<QueryResult>({
    queryKey: [connectedWallet, chainId],
    queryFn: ({ queryKey }) => {
      const [connectedWallet, chainId] = queryKey

      return getTrendingData(connectedWallet as string, chainId as number)
    },
  })

  const collections = data?.collections

  return (
    <PageContainer>
      <div className="">
        <section className="max-w-screen-xl mx-auto">
          <div className="flex items-start md:justify-between flex-col md:flex-row md:items-center w-full">
            <div className="w-full sm:w-[55%] flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-6">
                <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-[#FCD22D]">
                  <UpArrow />
                </div>
                <h1 className="desktop-h2 md:desktop-h1">Trending</h1>
              </div>
              <p className="desktop-h4 md:desktop-h3">
                Discover and mint trending NFTs from across Base
              </p>
              <div className="flex items-center gap-2.5">
                <p className="desktop-mono !text-[#858585] uppercase">
                  Powered by{' '}
                </p>
                <a href="https://mint.fun" target="_blank">
                  <MintDotFun />
                </a>
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
                      contract,
                    },
                    idx
                  ) => (
                    <div
                      key={externalURL}
                      className="w-full mb-6 last:mb-0 bg-white rounded-2xl p-6"
                    >
                      <div className="flex flex-wrap justify-between">
                        <div className="flex flex-row flex-wrap order-1 w-full lg:w-1/2">
                          <div className="flex flex-wrap md:flex-nowrap basis-full md:mb-1 overflow-hidden">
                            <div className="flex items-center w-full md:w-auto">
                              <p className="text-neutral-400 mr-3 md:mr-[29px] desktop-mono">
                                #{idx + 1}
                              </p>
                            </div>
                            <h3 className="text-black desktop-h3 whitespace-normal overflow-hidden break-all">
                              {name}
                            </h3>
                          </div>

                          <div className="basis-full whitespace-normal overflow-hidden break-all lg:ml-[50px]">
                            <h4 className="desktop-label-1 text-[#858585]">
                              {shortenAddress(contract)}
                            </h4>
                            <p className="text-[#858585] desktop-label-2 ">
                              {mintsLastHour} mints last hour •{' '}
                              {formatEther(BigInt(mintStatus.price))} ETH
                            </p>
                          </div>
                        </div>
                        <div
                          className={clsx(
                            'flex gap-4 [@media(max-width:374px)]:flex-wrap lg:justify-end order-3 lg:order-2 w-full sm:w-1/2 lg:w-1/3 lg:max-h-[50px] [&>div]:w-full sm:[&>div]:w-fit h-max',
                            !connectedWallet && 'flex-wrap sm:flex-nowrap'
                          )}
                        >
                          <MintButton
                            size="X-SMALL"
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
                            mintButtonStyles="w-full sm:!max-w-fit"
                            mintType={MintType.MintDotFun}
                            dataSuffix={siteDataSuffix}
                          />
                        </div>
                        <div className="grid grid-cols-4 [@media(min-width:600px)]:grid-cols-10 gap-4 items-center order-2 lg:order-3 mt-5 mb-4 md:mt-8 lg:mb-0  lg:ml-12">
                          {images.media.map(({ imageURI }, idx) => (
                            <div
                              key={imageURI}
                              className={`${
                                idx > VISIBLE_NFTS.mobile ? 'hidden' : 'block'
                              } [@media(min-width:600px)]:block `}
                            >
                              <a
                                href={
                                  externalCbnftUrl({ address: contract })
                                    ? externalCbnftUrl({ address: contract })
                                    : externalURL
                                }
                                target="_blank"
                              >
                                <Image
                                  src={imageURI}
                                  alt=""
                                  width={64}
                                  height={64}
                                  priority
                                  className="rounded-lg"
                                />
                              </a>
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

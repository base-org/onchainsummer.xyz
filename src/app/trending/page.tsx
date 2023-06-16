'use client'
import { trending } from '@/config/trending'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Separator } from '@/components/Separator'

const VISIBLE_NFTS = {
  mobile: 2,
  sm: 7,
  md: 10,
}

export default function Trending() {
  return (
    <main className="mx-6 mt-6">
      <section className="max-w-screen-xl mx-auto">
        <div className="flex items-start md:justify-between flex-col md:flex-row md:items-center w-full">
          <div>
            <h1 className="font-medium text-[32px] md:text-[40px] md:leading-[50px]">
              Trending on Base{' '}
              <span className="text-transparent bg-clip-text bg-trending-linear-gradient">
                this summer
              </span>
            </h1>
            <p className="text-xl text-neutral-500 my-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod <br />
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <p className="text-xl text-neutral-500">
              Powered by <span>mint.fun</span>
            </p>
          </div>
          <div>
            <div>
              <p className="text-neutral-500 text-sm md:text-lg mb-4 ">
                Join the party. Create on Base.
              </p>
              <div className="flex gap-1 sm:gap-2 lg:gap-6">
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
        <Separator className="mt-6" />
        {/* <div className="hidden md:block bg-trending-linear-gradient-image bg-cover bg-no-repeat h-20"></div> */}
        <div className="px-5 py-6 md:pl-8 lg:pr-[60px] md:py-10 border border-neutral-900 z-50 shadow-trending-card mt-8 mb-20">
          {trending.map(({ id, title, subTitle, images, numMints, price }) => (
            <div key={id} className="w-full mb-[72px] last:mb-0">
              <div className="flex flex-wrap">
                <div className="flex flex-row flex-wrap md:basis-1/2 order-1">
                  <div className="flex basis-full">
                    <p className="text-neutral-400 mr-[29px]">#{id}</p>
                    <h3>{title}</h3>
                  </div>
                  <div className="basis-full">
                    <p className="text-neutral-600">
                      {subTitle} • {numMints} mints last hour • {price} ETH
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 md:justify-end md:basis-1/2 order-3 md:order-2 w-full">
                  <Button
                    size="SMALL"
                    variant="PRIMARY"
                    className="mx-0 md:ml-2 md:mx-2 grow lg:grow-0"
                  >
                    Mint
                  </Button>
                  <Button
                    size="SMALL"
                    variant="SECONDARY"
                    className="grow lg:grow-0 text-2xl"
                  >
                    View More
                  </Button>
                </div>
                <div className="flex gap-4 items-center order-2 md:order-3 mt-5 mb-4 md:mt-8 md:mb-0">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`${
                        index > VISIBLE_NFTS.mobile ? 'hidden' : 'block'
                      } sm:${index > VISIBLE_NFTS.sm ? 'hidden' : 'block'} md:${
                        index > VISIBLE_NFTS.md ? 'hidden' : 'block'
                      } lg:block`}
                    >
                      <Image
                        src={image}
                        alt="Image Alt"
                        width={65}
                        height={65}
                        priority
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-center lg:hidden p-[2px] bg-trending-linear-gradient">
                    <div className="flex justify-center items-center h-[65px] w-[65px] bg-[#F5F5F5]">
                      <span className="sm:hidden">
                        +{images.length - VISIBLE_NFTS.mobile - 1}
                      </span>
                      <span className="hidden sm:block md:hidden">
                        +{images.length - VISIBLE_NFTS.sm - 1}
                      </span>
                      <span className="hidden md:block">
                        +{images.length - VISIBLE_NFTS.md - 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

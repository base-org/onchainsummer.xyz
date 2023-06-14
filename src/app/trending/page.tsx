import { trending } from '@/config/trending'
import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Trending() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto mb-16">
        <div className="flex justify-between items-center w-full relative top-4">
          <div>
            <h1 className="font-medium text-[40px] leading-[50px]">
              Trending on Base{' '}
              <span className="text-transparent bg-clip-text bg-trending-linear-gradient">
                this summer
              </span>
            </h1>
          </div>
          <div>
            <div>
              <p className="text-neutral-500 text-lg mb-4">
                Join the party. Create on Base.
              </p>
              <div className="flex">
                <Image
                  src="/trending/crypto-icon-1.png "
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="mr-6"
                />
                <Image
                  src="/trending/crypto-icon-2.png "
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="mr-6"
                />
                <Image
                  src="/trending/crypto-icon-1.png "
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                  className="mr-6"
                />
                <Image
                  src="/trending/crypto-icon-2.png"
                  alt="Image Alt"
                  width={48}
                  height={48}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-11 border-t border-neutral-300 w-full"></div>
        <div className="bg-trending-linear-gradient-image bg-cover bg-no-repeat h-20"></div>
        <div className="pl-8 pr-[60px] py-10 border border-neutral-300 z-50 rounded-2xl shadow-trending-card">
          {trending.map(({ id, title, subTitle, images }) => (
            <div key={id} className="flex w-full mb-[72px] last:mb-0">
              <div className="mr-[29px]">
                <p className="text-neutral-400">#{id}</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between mb-8">
                  <div>
                    <h3>{title}</h3>
                    <p className="text-neutral-600">{subTitle}</p>
                  </div>
                  <div>
                    <Button variant="SECONDARY">View More</Button>
                  </div>
                </div>
                <div className="flex">
                  {images.map((image, index) => (
                    <div key={index} className="mx-2 first:ml-0 last:mr-0">
                      <Image
                        src={image}
                        alt="Image Alt"
                        width={65}
                        height={65}
                        priority
                        className="rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

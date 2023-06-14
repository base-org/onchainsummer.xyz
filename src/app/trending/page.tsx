import { mock } from 'node:test'
import Image from 'next/image'
const mockTrendingData = [
  {
    id: 1,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
  {
    id: 2,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
  {
    id: 3,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
  {
    id: 4,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
  {
    id: 5,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
  {
    id: 6,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
  {
    id: 7,
    title: 'Bear Market Builders',
    subTitle: 'Bearbuilder.eth - 500 mints last hour - 0.0004 ETH',
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/200',
    ],
  },
]

export default function Trending() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center bg-red-400 w-full">
          <div>
            <h1>Trending on Base this summer</h1>
          </div>
          <div>
            <div>
              <p className="text-neutral-500 text-lg">
                Join the party. Create on Base
              </p>
              <div className="flex">
                <div className="w-12 h-12 ml-1 mx-3 bg-black rounded-full"></div>
                <div className="w-12 h-12 mx-3 bg-black rounded-full"></div>
                <div className="w-12 h-12 mx-3 bg-black rounded-full"></div>
                <div className="w-12 h-12 mr-1 mx-3 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-300 w-full my-10"></div>
        <div className="px-8 py-10 border border-neutral-300 rounded-2xl">
          {mockTrendingData.map(({ id, title, subTitle, images }) => (
            <div key={id} className="flex w-full my-10 first:mt-0 last:mb-0">
              <div>
                <p>#{id}</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div>
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                  </div>
                  <div>
                    <button>View More</button>
                  </div>
                </div>
                <div className="flex">
                  {images.map((image, index) => (
                    <div key={index} className="mx-2">
                      <Image
                        src={image}
                        alt="Image Alt"
                        width={100}
                        height={100}
                        priority
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

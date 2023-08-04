import Image from 'next/image'
import { FC } from 'react'
import Carousel from 'nuka-carousel'

const PARTNERS = [
  'anotherblock',
  'atari',
  'iskra',
  'blackbird',
  'rainbow-wallet',
  'coke',
  'fini',
  'fwb',
  'parallel',
  'stand-with-crypto',
  'zora',
  'pixelmon',
  'showtime',
  'mirror-wellness',
  'open-sea',
  'fwb-bonfire',
  'manifold',
  'highlight',
  'onboard',
  'indelible',
  'optimism',
  'oak',
  'lazer',
  'thirdweb',
]

const PARTNER_IMAGE_PATHS = PARTNERS.map(
  (partner) => `/partners/${partner}/carousel-icon.png`
)

export const PartnerCarousel: FC = () => {
  return (
    <div className="h-full items-center justify-center">
      <div className="sm:hidden">
        <Carousel
          withoutControls
          autoplay
          cellAlign="center"
          pauseOnHover={false}
          slidesToShow={4}
          slidesToScroll={1}
          easing={(n) => n}
          wrapAround
          autoplayInterval={3000}
          speed={3000}
        >
          {PARTNER_IMAGE_PATHS.map((partnerImagePath) => (
            <>
              <div
                key={partnerImagePath}
                className="w-24 h-16 flex-shrink-0 relative"
              >
                <Image
                  key={partnerImagePath}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  src={partnerImagePath}
                  alt={partnerImagePath}
                />
              </div>
            </>
          ))}
        </Carousel>
      </div>
      <div className="hidden sm:block">
        <Carousel
          withoutControls
          autoplay
          cellAlign="center"
          pauseOnHover={false}
          slidesToShow={8}
          slidesToScroll={1}
          easing={(n) => n}
          wrapAround
          autoplayInterval={3000}
          speed={3000}
        >
          {PARTNER_IMAGE_PATHS.map((partnerImagePath) => (
            <div
              key={partnerImagePath}
              className="w-40 h-36 flex-shrink-0 relative"
            >
              <Image
                key={partnerImagePath}
                fill
                style={{
                  objectFit: 'contain',
                }}
                src={partnerImagePath}
                alt={partnerImagePath}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

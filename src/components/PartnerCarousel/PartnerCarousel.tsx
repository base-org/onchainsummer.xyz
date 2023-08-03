import Image from 'next/image'
import { FC } from 'react'
import Carousel from 'nuka-carousel'

const PARTNERS = [
  'anotherblock',
  'atari',
  'blackbird',
  'coke',
  'fini',
  'fwb',
  'parallel',
  'stand-with-crypto',
  'zora',
  'pixelmon',
  'showtime',
  'mirror-wellness',
  'indelible',
  'manifold',
  'highlight',
  'onboard',
  'optimism',
  'rainbow-wallet',
  'iskra',
  'oak',
  'open-sea',
  'fwb-bonfire',
]

const PARTNER_IMAGE_PATHS = PARTNERS.map(
  (partner) => `/partners/${partner}/carousel-icon.svg`
)

export const PartnerCarousel: FC = () => {
  return (
    <div className="w-screen h-full items-center justify-center">
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
          <div
            key={partnerImagePath}
            className="w-12 h-12 md:w-36 md:h-36 flex-shrink-0 relative"
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
  )
}

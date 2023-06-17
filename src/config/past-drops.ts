import { StaticImageData } from 'next/image'

import OpenSeaBlue from '../../public/home/temp-opensea-blue.png'
import OpenSeaPurple from '../../public/home/temp-opensea-purple.png'
import OpenSeaRed from '../../public/home/temp-opensea-red.png'

interface PastDrops {
  id: number
  title: string
  releaseDate: string
  image: StaticImageData
  description: string
}

export const pastDrops: PastDrops[] = [
  {
    id: 1,
    title: 'Liquid Abstract Painting',
    releaseDate: 'August 10 - 12, 20203',
    image: OpenSeaRed,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
  },
  {
    id: 2,
    title: 'Liquid Abstract Painting',
    releaseDate: 'August 10 - 12, 20203',
    image: OpenSeaBlue,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
  },
  {
    id: 3,
    title: 'Liquid Abstract Painting',
    releaseDate: 'August 10 - 12, 20203',
    image: OpenSeaPurple,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
  },
  {
    id: 4,
    title: 'Liquid Abstract Painting',
    releaseDate: 'August 10 - 12, 20203',
    image: OpenSeaBlue,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
  },
]

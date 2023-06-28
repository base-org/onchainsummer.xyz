export const DAY = 1000 * 60 * 60 * 24

export interface NFTDrop {
  image: string
  address: `0x${string}`
  crossMintClientId: string
  name: string
  createdBy: string
  description: string
  startDate: number
  endDate: number
  price: string
  writeup: {
    sections: {
      heading: string
      contents: string[]
      image: string
    }[]
  }
}

export interface Partner {
  slug: string
  name: string
  url: string
  description: string
  brandColor: string
  icon: string
  iconInverse: string
  drop: NFTDrop
  externalDrops: {
    image: string
    href: string
    title: string
    endDate: number
    price: string
  }[]
}

export const DAY = 1000 * 60 * 60 * 24

export type DropType = 'erc-721' | 'zora-erc-721' | 'external'

export interface Drop {
  image: string
  name: string
  startDate: number
  endDate: number
  price: string
  address: `0x${string}`
  crossMintClientId: string
  type: DropType
  externalLink?: string
}

export interface HeadlineDrop extends Drop {
  createdBy: string
  description: string
  aarweaveDigest: string
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
  drop: HeadlineDrop
  otherDrops: Drop[]
}

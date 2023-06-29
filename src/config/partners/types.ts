export const DAY = 1000 * 60 * 60 * 24

export interface Drop {
  image: string
  name: string
  startDate: number
  endDate: number
  price: string
  address: `0x${string}`
  crossMintClientId: string
  type: 'erc-721' | 'zora-erc-1155' | 'external'
  externalLink?: string
}

export interface HeadlineDrop extends Drop {
  createdBy: string
  description: string
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

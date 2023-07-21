export const DAY = 1000 * 60 * 60 * 24

export type DropType = 'erc-721' | 'zora-erc-1155' | 'external'

export interface Drop {
  image: string
  name: string
  startDate: string
  endDate: string
  price: string
  address: `0x${string}`
  crossMintClientId: string
  type: DropType
  externalLink?: string
  creator: string
}

export interface Partner {
  slug: string
  name: string
  url: string
  description: string
  brandColor: string
  icon: string
  iconInverse: string
  drops: Drop[]
  aarweaveDigest: string
}

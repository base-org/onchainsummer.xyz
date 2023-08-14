import { MintType } from '@/components/MintDialog/types'
import { Hex } from 'viem'

export const DAY = 1000 * 60 * 60 * 24

export type DropType = 'erc-721' | 'zora-erc-1155' | 'external'

export interface DropDataSuffix {
  value: Hex
  label: string
}

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
  creator: string
  // TODO, consider requiring mint type
  mintType?: MintType
  description?: string

  // TODO: Temp fix
  openSeaLink?: string
  interactWithNFTLink?: string
  dataSuffix?: DropDataSuffix
  buttonText?: string
}

export interface Partner {
  slug: string
  name: string
  url: string
  description: string
  brandColor: string
  icon: string
  banner: string
  drops: Drop[]
  aarweaveDigest: string
  twitter: string
}

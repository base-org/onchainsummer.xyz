import { MintStatus } from '@/utils/mintDotFunTypes'
import { Dispatch, SetStateAction, createContext } from 'react'
import { Address } from 'wagmi'
import { MintType } from '../types'
import { Hex } from 'viem'
import { DropDataSuffix } from '@/config/partners/types'

export interface MintDialogInfo {
  address: Address
  crossMintClientId?: string
  price: string
  partnerIcon: string
  partnerName: string
  dropImage: string
  dropThumbnail?: string
  dropName: string
  endDate?: number
  creatorAddress: string
  mintType: MintType
  mintDotFunStatus?: MintStatus
  trendingPageNativeMint?: boolean
  mintButtonStyles?: string
  maxClaimablePerWallet?: string
  openSeaLink?: string
  interactWithNFTLink?: string
  dataSuffix: Hex
  dropDataSuffix?: DropDataSuffix
}

type MintDialogContextType = {
  info: MintDialogInfo
  setInfo: Dispatch<SetStateAction<MintDialogInfo>>
}

export const MintDialogContext = createContext<
  MintDialogContextType | undefined
>(undefined)

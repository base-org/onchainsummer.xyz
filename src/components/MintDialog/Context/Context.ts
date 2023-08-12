import { MintStatus } from '@/utils/mintDotFunTypes'
import { createContext } from 'react'
import { Address } from 'wagmi'
import { MintType } from '../types'

export interface MintDialogContextType {
  address: Address
  crossMintClientId?: string
  price: string
  partnerIcon: string
  partnerName: string
  dropImage: string
  dropName: string
  endDate?: number
  creatorAddress: string
  mintType: MintType
  mintDotFunStatus?: MintStatus
  trendingPageNativeMint?: boolean
  mintButtonStyles?: string
  maxClaimablePerWallet?: string
  openSeaLink?: string
  cbNftButtonText?: string
}

export const MintDialogContext = createContext<MintDialogContextType>({
  address: '0x0',
  price: '',
  partnerIcon: '',
  partnerName: '',
  dropImage: '',
  dropName: '',
  creatorAddress: '',
  mintType: MintType.ThirdWeb,
})

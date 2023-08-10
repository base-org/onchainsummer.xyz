import { MintStatus } from '@/utils/mintDotFunTypes'
import { createContext } from 'react'
import { Address } from 'wagmi'
import { MintType } from '../types'

export interface MintDialogContextType {
  address: Address
  crossMintClientId?: string
  price: string
  platformFees?: string
  salePrice?: string
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
}

export const MintDialogContext = createContext<MintDialogContextType>({
  address: '0x0',
  price: '',
  platformFees: '',
  salePrice: '',
  partnerIcon: '',
  partnerName: '',
  dropImage: '',
  dropName: '',
  creatorAddress: '',
  mintType: MintType.ThirdWeb,
})

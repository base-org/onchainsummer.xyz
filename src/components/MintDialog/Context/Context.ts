import { MintStatus } from '@/utils/mintDotFunTypes'
import { createContext } from 'react'
import { Address } from 'wagmi'

export interface MintDialogContextType {
  address: Address
  crossMintClientId?: string
  price: string
  partnerIcon: string
  partnerName: string
  dropImage: string
  dropName: string
  creatorAddress: string
  mintDotFunStatus?: MintStatus
  trendingPageNativeMint?: boolean
  mintButtonStyles?: string
  maxClaimablePerWallet?: string
}

export const MintDialogContext = createContext<MintDialogContextType>({
  address: '0x0',
  price: '',
  partnerIcon: '',
  partnerName: '',
  dropImage: '',
  dropName: '',
  creatorAddress: '',
})

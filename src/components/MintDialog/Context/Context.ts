import { MintStatus } from '@/utils/mintDotFunTypes'
import { Address } from '@thirdweb-dev/sdk'
import { createContext } from 'react'

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
}

export const MintDialogContext = createContext<MintDialogContextType>({
  address: '',
  price: '',
  partnerIcon: '',
  partnerName: '',
  dropImage: '',
  dropName: '',
  creatorAddress: '',
})

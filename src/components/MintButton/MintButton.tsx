'use client'

import { FC } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog } from '../MintDialog'
import { DropType } from '@/config/partners/types'

type MintButtonProps = {
  price: string
  address: string
  crossMintClientId: string
  type: DropType
}

export const MintButton: FC<MintButtonProps> = ({ ...mintProps }) => {
  const walletAddress = useAddress()

  if (!walletAddress) {
    return <ConnectDialog />
  }

  return <MintDialog {...mintProps} />
}

'use client'

import { FC } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog } from '../MintDialog'
import { MintDialogContextType } from '../MintDialog/Context/Context'

interface MintButtonProps extends MintDialogContextType {}

export const MintButton: FC<MintButtonProps> = ({ ...mintProps }) => {
  const walletAddress = useAddress()

  if (!walletAddress) {
    return <ConnectDialog />
  }

  return <MintDialog {...mintProps} />
}

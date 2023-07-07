'use client'

import { FC } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog, MintDialogProps } from '../MintDialog'

interface MintButtonProps extends MintDialogProps {}

export const MintButton: FC<MintButtonProps> = ({ ...mintProps }) => {
  const walletAddress = useAddress()

  if (!walletAddress) {
    return <ConnectDialog />
  }

  return <MintDialog {...mintProps} />
}

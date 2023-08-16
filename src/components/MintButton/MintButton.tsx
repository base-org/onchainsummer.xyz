'use client'

import { FC } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog } from '../MintDialog'
import { MintDialogInfo } from '../MintDialog/Context/Context'
import { useValidate } from './useValidate'
import { Button, ButtonProps } from '../Button'
import { Loading } from '../icons/Loading'

import { useAccount } from 'wagmi'
import { getNow } from '@/utils/getNow'
import { CollectButton } from '../CollectButton/CollectButton'

interface MintButtonProps extends MintDialogInfo {
  size?: ButtonProps['size']
}

export const MintButton: FC<MintButtonProps> = ({ size, ...mintProps }) => {
  const { address: account } = useAccount()
  const now = getNow()
  const { valid, message, isValidating, price, maxClaimablePerWallet } =
    useValidate(
      mintProps.address,
      mintProps.mintType,
      mintProps.price,
      mintProps.mintDotFunStatus
    )

  if (mintProps.endDate && now >= mintProps.endDate) {
    return (
      <CollectButton
        size={size}
        address={mintProps.address}
        openSeaLink={mintProps.openSeaLink}
      />
    )
  }

  if (!account) {
    return <ConnectDialog size={size} />
  }

  if (isValidating) {
    return (
      <Button disabled size={size}>
        <span className="sr-only">Loading</span>
        <Loading
          className="animate-spin"
          color="white"
          height={24}
          width={24}
        />
      </Button>
    )
  }

  if (!valid) {
    return (
      <Button disabled size={size}>
        {message}
      </Button>
    )
  }

  const props: MintDialogInfo = { ...mintProps, price: price.toString() }

  return (
    <MintDialog
      {...props}
      maxClaimablePerWallet={maxClaimablePerWallet}
      size={size}
    />
  )
}

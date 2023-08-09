'use client'

import { FC } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog } from '../MintDialog'
import { MintDialogContextType } from '../MintDialog/Context/Context'
import { useValidate } from './useValidate'
import { Button, ButtonProps } from '../Button'
import { Loading } from '../icons/Loading'
import clsx from 'clsx'
import { useAccount } from 'wagmi'
import { getNow } from '@/utils/getNow'
import { RightArrow } from '../icons/RightArrow'

interface MintButtonProps extends MintDialogContextType {
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
      <Button
        size={size}
        href={`https://nft.coinbase.com/collection/base/${mintProps.address}`}
        external
      >
        Collect <RightArrow fill="white" />
      </Button>
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

  const props: MintDialogContextType = { ...mintProps, price: price.toString() }

  return (
    <MintDialog
      {...props}
      maxClaimablePerWallet={maxClaimablePerWallet}
      size={size}
    />
  )
}

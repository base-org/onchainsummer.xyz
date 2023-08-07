'use client'

import { FC } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog } from '../MintDialog'
import { MintDialogContextType } from '../MintDialog/Context/Context'
import { useValidate } from './useValidate'
import { Button } from '../Button'
import { Loading } from '../icons/Loading'
import clsx from 'clsx'
import { useAccount } from 'wagmi'
import { getNow } from '@/utils/getNow'
import { RightArrow } from '../icons/RightArrow'

interface MintButtonProps extends MintDialogContextType {}

export const MintButton: FC<MintButtonProps> = ({ ...mintProps }) => {
  const { address: account } = useAccount()
  const now = getNow()
  const { valid, message, isValidating, maxClaimablePerWallet } = useValidate(
    mintProps.address,
    mintProps.mintDotFunStatus
  )

  if (mintProps.endDate && now >= mintProps.endDate) {
    return (
      <Button
        href={`https://nft.coinbase.com/collection/base/${mintProps.address}`}
        external
      >
        Collect <RightArrow fill="white" />
      </Button>
    )
  }

  if (!account) {
    return <ConnectDialog />
  }

  if (isValidating) {
    return (
      <Button disabled>
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
      <Button disabled className={clsx('text-[14px] md:text-base rounded-lg mt-auto')}>
        {message}
      </Button>
    )
  }

  return (
    <MintDialog {...mintProps} maxClaimablePerWallet={maxClaimablePerWallet} />
  )
}

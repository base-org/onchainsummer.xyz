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

interface MintButtonProps extends MintDialogContextType {}

export const MintButton: FC<MintButtonProps> = ({ ...mintProps }) => {
  const {address: account} = useAccount()
  const { valid, message, isValidating, maxClaimablePerWallet } = useValidate(
    mintProps.address,
    mintProps.mintDotFunStatus
  )

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
      <Button disabled className={clsx('text-[14px] md:text-base')}>
        {message}
      </Button>
    )
  }

  return (
    <MintDialog {...mintProps} maxClaimablePerWallet={maxClaimablePerWallet} />
  )
}

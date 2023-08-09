import { FC } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { WalletDialog } from '../WalletDialog'
import { useAccount } from 'wagmi'

type WalletProps = {}

export const Wallet: FC<WalletProps> = ({}) => {
  const { address } = useAccount()

  if (!address) {
    return <ConnectDialog inNavbar title="Connect" />
  }

  return <WalletDialog />
}

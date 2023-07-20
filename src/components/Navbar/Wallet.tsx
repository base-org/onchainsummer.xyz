import { useAddress } from '@thirdweb-dev/react'
import { FC } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { WalletDialog } from '../WalletDialog'

type WalletProps = {}

export const Wallet: FC<WalletProps> = ({}) => {
  const address = useAddress()

  if (!address) {
    return <ConnectDialog inNavbar title="Connect wallet" />
  }

  return <WalletDialog />
}

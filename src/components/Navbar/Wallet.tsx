import { useAddress } from '@thirdweb-dev/react'
import { FC } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { ConnectWalletButton } from '../client'

type WalletProps = {}

export const Wallet: FC<WalletProps> = ({}) => {
  const address = useAddress()

  if (!address) {
    return <ConnectDialog inNavbar />
  }

  return <ConnectWalletButton />
}

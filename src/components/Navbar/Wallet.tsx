import { FC, useEffect } from 'react'
import { ConnectDialog } from '../ConnectDialog'
import { WalletDialog } from '../WalletDialog'
import { useAccount } from 'wagmi'
import { useLogEvent } from '@/utils/useLogEvent'
import { events } from '@/utils/analytics'

type WalletProps = {}

export const Wallet: FC<WalletProps> = ({}) => {
  const { address, connector } = useAccount()
  const logEvent = useLogEvent()

  useEffect(() => {
    if (connector) {
      logEvent?.(events.walletConnected, { walletType: connector.id })
    }
  }, [connector, logEvent])

  if (!address) {
    return <ConnectDialog inNavbar title="Connect" />
  }

  return <WalletDialog />
}

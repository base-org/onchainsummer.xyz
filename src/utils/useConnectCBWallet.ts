import { useCallback } from 'react'
import { useConnect } from 'wagmi'

export function useConnectCBWallet() {
  const { connect, connectors } = useConnect()

  return useCallback(() => {
    connect({
      connector: connectors.find((c) => c.name == 'Coinbase Wallet'),
    })
  }, [connect, connectors])
}

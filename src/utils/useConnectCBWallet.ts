import { useCallback } from 'react'
import { useConnect } from 'wagmi'

export function useConnectCBWallet() {
  const { connect, connectors } = useConnect()

  return useCallback(() => {
    alert(connectors.map((c) => c.id).join(', '))
    connect({
      connector:
        connectors.find((c) => c.id == 'injected') ||
        connectors.find((c) => c.id == 'coinbaseWallet'),
    })
  }, [connect, connectors])
}

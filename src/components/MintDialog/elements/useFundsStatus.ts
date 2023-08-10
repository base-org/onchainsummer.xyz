import { useAccount } from 'wagmi'
import { useEffect, useState, useCallback, useRef } from 'react'

import { checkBalances } from './checkBalances'

type FundsStatus = 'insufficient' | 'sufficient' | 'bridge'

export const useFundsStatus = (totalPrice: string) => {
  const { address } = useAccount()
  const hasCheckedForBridge = useRef({
    address,
    hasChecked: false,
  })

  const [fundsStatus, setFundsStatus] = useState<FundsStatus>('sufficient')

  const getFundsStatus = useCallback(async () => {
    if (!address) return

    const status = await checkBalances(address, totalPrice)

    if (status === 'bridge') {
      const hasChecked =
        hasCheckedForBridge.current.address === address &&
        hasCheckedForBridge.current.hasChecked

      if (hasChecked) {
        return
      }

      hasCheckedForBridge.current = {
        address,
        hasChecked: true,
      }
    }

    setFundsStatus(status)
  }, [address, totalPrice])

  useEffect(() => {
    getFundsStatus()
  }, [address, getFundsStatus, totalPrice])

  return {
    fundsStatus,
    getFundsStatus,
  }
}

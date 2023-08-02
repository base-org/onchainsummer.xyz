import { useAccount } from 'wagmi'
import { useEffect, useState, useCallback } from 'react'

import { checkBalances } from './checkBalances'

type FundsStatus = 'insufficient' | 'sufficient' | 'bridge'

export const useFundsStatus = (totalPrice: string) => {
  const { address } = useAccount()

  const [fundsStatus, setFundsStatus] = useState<FundsStatus>('sufficient')

  const getFundsStatus = useCallback(async () => {
    if (!address) return

    const status = await checkBalances(address, totalPrice)

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

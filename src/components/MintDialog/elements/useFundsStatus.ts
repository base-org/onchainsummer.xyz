import { useAddress } from '@thirdweb-dev/react'

import { useEffect, useState } from 'react'

import { checkBalances } from './checkBalances'

type FundsStatus = 'insufficient' | 'sufficient' | 'bridge'

export const useFundsStatus = (totalPrice: string, open: boolean) => {
  const address = useAddress()

  const [fundsStatus, setFundsStatus] = useState<FundsStatus>('sufficient')

  useEffect(() => {
    const getFundsStatus = async () => {
      if (!address || !open) return

      const status = await checkBalances(address, totalPrice)

      setFundsStatus(status)
    }
    getFundsStatus()
  }, [address, open, totalPrice])

  return {
    fundsStatus,
  }
}

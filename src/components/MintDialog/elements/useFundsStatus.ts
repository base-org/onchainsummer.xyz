import useBalances from '@/utils/useBalances'

import { BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import { useEffect, useState } from 'react'

const l1GasEstimate = BigNumber.from('170000')
const l2GasEstimate = BigNumber.from('170000')

type FundsStatus = 'insufficient' | 'sufficient' | 'bridge'

export const useFundsStatus = (totalPrice: string, open: boolean) => {
  const priceEstimate = parseEther(totalPrice).add(l2GasEstimate)
  const { l1Balance, l2Balance, isLoading } = useBalances()

  const [fundsStatus, setFundsStatus] = useState<FundsStatus>('sufficient')

  useEffect(() => {
    {
      if (!isLoading) {
        if (l2Balance.lt(priceEstimate)) {
          if (l1Balance.gt(priceEstimate)) {
            setFundsStatus('bridge')
          } else {
            setFundsStatus('insufficient')
          }
        } else {
          setFundsStatus('sufficient')
        }
      }
    }
  }, [isLoading, l1Balance, l2Balance, priceEstimate])

  return {
    fundsStatus,
  }
}

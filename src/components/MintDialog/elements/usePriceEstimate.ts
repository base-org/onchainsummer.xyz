import { useEffect, useState } from 'react'
import { parseEther } from 'ethers/lib/utils'

import { getPriceEstimate } from './getPriceEstimate'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { useAccount } from 'wagmi'

export const usePriceEstimate = (totalPrice: string) => {
  const { address } = useAccount()

  const [response, setResponse] = useState<
    Awaited<ReturnType<typeof getPriceEstimate>>
  >({
    l1PriceEstimate: parseEther('0'),
    l2PriceEstimate: parseEther('0'),
  })

  useEffect(() => {
    const getFundsStatus = async () => {
      if (!address) return

      const response = await getPriceEstimate(totalPrice, address)

      setResponse(response)
    }
    getFundsStatus()
  }, [address, totalPrice])

  return response
}

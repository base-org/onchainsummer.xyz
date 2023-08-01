import { useEffect, useState } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { parseEther } from 'ethers/lib/utils'

import { getPriceEstimate } from './getPriceEstimate'
import { useMintDialogContext } from '../Context/useMintDialogContext'

export const usePriceEstimate = () => {
  const address = useAddress()
  const { price } = useMintDialogContext()

  const [response, setResponse] = useState<
    Awaited<ReturnType<typeof getPriceEstimate>>
  >({
    l1PriceEstimate: parseEther('0'),
    l2PriceEstimate: parseEther('0'),
  })

  useEffect(() => {
    const getFundsStatus = async () => {
      if (!address) return

      const response = await getPriceEstimate(price, address)

      setResponse(response)
    }
    getFundsStatus()
  }, [address, price])

  return response
}

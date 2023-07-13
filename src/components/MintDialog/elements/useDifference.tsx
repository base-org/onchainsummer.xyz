import { useBalance } from '@thirdweb-dev/react'
import { constants } from 'ethers'
import { formatEther, parseEther } from 'ethers/lib/utils'

export const useDifference = (totalPrice: string) => {
  const balance = useBalance()

  const balanceBigNumber = balance.data?.value ?? constants.Zero
  const priceBigNumber = parseEther(totalPrice)

  const diff = priceBigNumber.sub(balanceBigNumber)

  return {
    value: diff,
    display: formatEther(diff),
  }
}

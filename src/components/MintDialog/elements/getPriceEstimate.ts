import { BigNumber } from 'ethers'
import { formatEther, parseEther } from 'ethers/lib/utils'
import { getBalances } from './getBalances'

const l2GasEstimate = BigNumber.from('170000')

export const getPriceEstimate = async (totalPrice: string, address: string) => {
  const priceAndGas = parseEther(totalPrice).add(l2GasEstimate)
  const priceAndGasNumber = Number(formatEther(priceAndGas))

  const { l1Balance } = await getBalances(address)

  const l1Number = Number(formatEther(l1Balance))

  return parseEther(
    Math.max(
      0.25, // flat minimum we want them to bridge
      priceAndGasNumber, // min they need functionally
      0.2 * l1Number // min we want them to bridge relative to their balance
    ).toString()
  )
}

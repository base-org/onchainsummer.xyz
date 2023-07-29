import { formatEther, parseEther } from 'ethers/lib/utils'
import { getBalances } from './getBalances'
import { getGasData } from './getGasData'

export const getPriceEstimate = async (totalPrice: string, address: string) => {
  const { l1GasToBridge, l2GasEstimate } = await getGasData()
  const priceAndGas = parseEther(totalPrice).add(l2GasEstimate)

  const { l1Balance } = await getBalances(address)

  const l1Number = Number(formatEther(l1Balance))
  const l1Estimate = Number(formatEther(priceAndGas.add(l1GasToBridge)))
  const max = Math.max(0.2 * l1Number, l1Estimate)
  const min = Math.min(0.25, max)

  return {
    l1PriceEstimate: parseEther(min.toString()),
    l2PriceEstimate: priceAndGas,
  }
}

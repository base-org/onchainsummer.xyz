import { getPriceEstimate } from './getPriceEstimate'
import { getBalances } from './getBalances'

export const checkBalances = async (address: string, totalPrice: string) => {
  const { l1PriceEstimate, l2PriceEstimate } = await getPriceEstimate(
    totalPrice,
    address
  )

  const { l1Balance, l2Balance } = await getBalances(address)

  if (l2Balance.lt(l2PriceEstimate) && l1Balance.gte(l1PriceEstimate))
    return 'bridge'
  if (l2Balance.gte(l2PriceEstimate)) return 'sufficient'
  return 'insufficient'
}

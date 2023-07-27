import { getPriceEstimate } from './getPriceEstimate'
import { getBalances } from './getBalances'

export const checkBalances = async (address: string, totalPrice: string) => {
  const priceEstimate = await getPriceEstimate(totalPrice, address)

  const { l1Balance, l2Balance } = await getBalances(address)

  if (l2Balance.lt(priceEstimate)) {
    if (l1Balance.gt(priceEstimate)) {
      return 'bridge'
    } else {
      return 'insufficient'
    }
  } else {
    return 'sufficient'
  }
}

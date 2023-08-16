import { getJsonRpcProviders } from '@/utils/getJsonRpcProviders'

export const getBalances = async (address: string) => {
  const { l1Provider, l2Provider } = getJsonRpcProviders()

  const l1Balance = await l1Provider.getBalance(address)
  const l2Balance = await l2Provider.getBalance(address)

  return { l1Balance, l2Balance }
}

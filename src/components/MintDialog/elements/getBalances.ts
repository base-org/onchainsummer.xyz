import { getJsonRpcProviders } from '@/utils/getJsonRpcProviders'

export const getBalances = async (address: string) => {
  const { l1Provider, l2Provider } = getJsonRpcProviders()

  const l1Signer = l1Provider.getSigner(address)
  const l2Signer = l2Provider.getSigner(address)

  const l1Balance = await l1Signer.getBalance()
  const l2Balance = await l2Signer.getBalance()

  return { l1Balance, l2Balance }
}

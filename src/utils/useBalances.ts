import { constants } from 'ethers'

import { useAccount, useBalance } from 'wagmi'
import { l1, l2 } from '@/config/chain'
import { useQuery } from 'react-query';
import { getJsonRpcProviders } from './getJsonRpcProviders';

const useBalances = () => {
  const {address} = useAccount();
  const { data, isLoading } = useQuery({
    queryKey: ['balances', address],
    queryFn: async ({ queryKey }) => {
      const [_, address] = queryKey as ['balances', string | undefined]
      const { l1Provider, l2Provider } = getJsonRpcProviders()

      const l1Signer = l1Provider.getSigner(address)
      const l2Signer = l2Provider.getSigner(address)

      const l1Balance = await l1Signer.getBalance()
      const l2Balance = await l2Signer.getBalance()
      return { l1Balance, l2Balance }
    },
  })

  return {
    l1Balance: data?.l1Balance || constants.Zero,
    l2Balance: data?.l2Balance || constants.Zero,
    isLoading,
  }
}

export default useBalances

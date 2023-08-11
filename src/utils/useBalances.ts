import { constants } from 'ethers'

import { useQuery } from 'react-query'
import { getJsonRpcProviders } from './getJsonRpcProviders'
import { Address, useAccount, usePublicClient } from 'wagmi'
import { l1, l2 } from '@/config/chain'

const useBalances = () => {
  const {address} = useAccount()
  const l1Provider = usePublicClient({chainId: l1.id})
  const l2Provider = usePublicClient({chainId: l2.id})
  const { data, isLoading } = useQuery({
    queryKey: ['balances', address],
    queryFn: async ({ queryKey }) => {
      const [_, address] = queryKey as ['balances', string | undefined]

      if (!address) return {l1Balance: BigInt(0), l2Balance: BigInt(0)}

      const l1Balance = await l1Provider.getBalance({address: address as Address})
      const l2Balance = await l2Provider.getBalance({address: address as Address})

      return { l1Balance, l2Balance }
    },
  })

  return {
    l1Balance: data?.l1Balance || BigInt(0),
    l2Balance: data?.l2Balance || BigInt(0),
    isLoading,
  }
}

export default useBalances
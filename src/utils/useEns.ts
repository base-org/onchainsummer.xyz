'use client'

import { mainnet } from 'viem/chains'
import { ethers } from 'ethers'
import { useAddress } from '@thirdweb-dev/react'
import { useQuery } from 'react-query'

export function useEns() {
  const address = useAddress()

  const { data, isLoading } = useQuery({
    queryKey: ['ens', address],
    queryFn: async ({ queryKey }) => {
      const [_, address] = queryKey as ['ens', string]
      const [ethUrl] = mainnet.rpcUrls.default.http
      const provider = new ethers.providers.JsonRpcProvider(ethUrl)
      const name = await provider.lookupAddress(address)
      const avatar = await provider.getAvatar(address)
      return { name, avatar }
    },
  })

  return { name: data?.name || '', avatar: data?.avatar || '', isLoading }
}

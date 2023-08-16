'use client'

import { Address, mainnet, useAccount, useEnsAvatar, useEnsName } from 'wagmi'

export function useEns(account?: Address) {
  const { address } = useAccount()
  const { data: name, isLoading } = useEnsName({
    chainId: mainnet.id,
    address: account || address,
  })
  const { data: avatar, isLoading: loadingAvatar } = useEnsAvatar({
    chainId: mainnet.id,
    name,
  })

  return {
    name: name || '',
    avatar: avatar || '',
    isLoading: isLoading || loadingAvatar,
  }
}

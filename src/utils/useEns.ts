'use client'

import { mainnet } from 'viem/chains'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useAddress } from '@thirdweb-dev/react'

export function useEns() {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const address = useAddress()

  useEffect(() => {
    const lookupEns = async (addr: string) => {
      const [ethUrl] = mainnet.rpcUrls.default.http
      const provider = new ethers.providers.JsonRpcProvider(ethUrl)
      const name = await provider.lookupAddress(addr)

      const avatar = await provider.getAvatar(addr)
      setName(name || '')
      setAvatar(avatar || '')
    }
    if (address) {
      lookupEns(address)
    }
  }, [address])
  return { name, avatar }
}

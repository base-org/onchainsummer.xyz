import { createWalletClient, custom, createPublicClient } from 'viem'

import { base, baseGoerli } from 'viem/chains'
import { isProd } from './chain'

export const getClients = async () => {
  if (typeof document === undefined) {
    return null
  }

  const publicClient = createPublicClient({
    chain: isProd ? base : baseGoerli,
    // @ts-ignore
    transport: custom(window.ethereum),
  })

  const walletClient = createWalletClient({
    chain: isProd ? base : baseGoerli,
    // @ts-ignore
    transport: custom(window.ethereum),
  })

  return {
    publicClient,
    walletClient,
  }
}

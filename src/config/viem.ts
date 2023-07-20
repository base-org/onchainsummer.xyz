import { createWalletClient, custom, createPublicClient } from 'viem'

import { mainnet, goerli } from 'viem/chains'
import { isProd } from './chain'

export const getClients = async () => {
  if (typeof document === undefined) {
    return null
  }

  const publicClient = createPublicClient({
    chain: isProd ? mainnet : goerli,
    // @ts-ignore
    transport: custom(window.ethereum),
  })

  const walletClient = createWalletClient({
    chain: isProd ? mainnet : goerli,
    // @ts-ignore
    transport: custom(window.ethereum),
  })

  return {
    publicClient,
    walletClient,
  }
}

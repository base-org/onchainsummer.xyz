import { createWalletClient, custom } from 'viem'
import { mainnet, goerli } from 'viem/chains'
import { isProd } from './chain'

let client: ReturnType<typeof createWalletClient> | null = null

export const getWalletClient = async () => {
  if (typeof document === undefined) {
    return null
  }

  if (client) {
    return client
  }

  client = createWalletClient({
    chain: isProd ? mainnet : goerli,
    // @ts-expect-error
    transport: custom(window.ethereum),
  })

  return client
}

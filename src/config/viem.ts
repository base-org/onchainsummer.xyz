import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

let client: ReturnType<typeof createWalletClient> | null = null

export const getWalletClient = async () => {
  // @ts-expect-error
  if (typeof document === undefined || !window.ethereum) {
    return null
  }

  if (client) {
    return client
  }

  client = createWalletClient({
    chain: mainnet,
    // @ts-expect-error
    transport: custom(window.ethereum),
  })

  return client
}

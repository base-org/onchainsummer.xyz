import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

let client: ReturnType<typeof createWalletClient> | null = null

export const getWalletClient = async () => {
  if (typeof document === undefined) {
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

import { ethers } from 'ethers'
import { isProd } from '@/config/chain'
import { baseGoerli, goerli, mainnet } from 'viem/chains'

const l1Chain = isProd ? mainnet : goerli
// TODO: Add base once it's launched
const l2Chain = isProd ? mainnet : baseGoerli

let l1Provider = new ethers.providers.JsonRpcProvider(
  l1Chain.rpcUrls.default.http[0]
)
let l2Provider = new ethers.providers.JsonRpcProvider(
  l2Chain.rpcUrls.default.http[0]
)

export const getJsonRpcProviders = () => {
  return {
    l1Provider,
    l2Provider,
  }
}

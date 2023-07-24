import { ethers } from 'ethers'
import { isProd } from '@/config/chain'
import { base, baseGoerli, goerli, mainnet } from 'viem/chains'

const l1Chain = isProd ? mainnet : goerli
const l2Chain = isProd ? base : baseGoerli

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

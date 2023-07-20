import { goerli, baseGoerli, mainnet } from 'viem/chains'
import * as OP from '@eth-optimism/sdk'
import { useMemo } from 'react'
import { ethers } from 'ethers'
import { useAddress } from '@thirdweb-dev/react'
import { isProd } from '@/config/chain'

const l1Chain = isProd ? mainnet : goerli
// TODO: Add base once it's launched
const l2Chain = isProd ? mainnet : baseGoerli

export const useCrossChainMessenger = () => {
  const address = useAddress()
  const crossChainMessenger = useMemo(() => {
    const [l1Url] = l1Chain.rpcUrls.default.http
    const [l2Url] = l2Chain.rpcUrls.default.http

    const l1Signer = new ethers.providers.JsonRpcProvider(l1Url).getSigner(
      address
    )
    const l2Signer = new ethers.providers.JsonRpcProvider(l2Url).getSigner(
      address
    )

    return new OP.CrossChainMessenger({
      l1ChainId: OP.L1ChainID.GOERLI,
      l2ChainId: OP.L2ChainID.BASE_GOERLI,
      l1SignerOrProvider: l1Signer,
      l2SignerOrProvider: l2Signer,
    })
  }, [address])

  return crossChainMessenger
}

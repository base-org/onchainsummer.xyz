import { ethers } from 'ethers'

import { goerli, baseGoerli } from 'viem/chains'
import * as OP from '@eth-optimism/sdk'
import { useAddress } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

const useBalances = () => {
  const address = useAddress()
  const [balances, setBalances] = useState({
    l1Balance: ethers.BigNumber.from(0),
    l2Balance: ethers.BigNumber.from(0),
  })

  useEffect(() => {
    const calcBalances = async () => {
      const [l1Url] = goerli.rpcUrls.default.http
      const [l2Url] = baseGoerli.rpcUrls.default.http

      const l1 = new ethers.providers.JsonRpcProvider(l1Url).getSigner(address)
      const l2 = new ethers.providers.JsonRpcProvider(l2Url).getSigner(address)

      const crossChainMessenger = new OP.CrossChainMessenger({
        l1ChainId: OP.L1ChainID.GOERLI,
        l2ChainId: OP.L2ChainID.BASE_GOERLI,
        l1SignerOrProvider: l1,
        l2SignerOrProvider: l2,
      })

      const l1Balance = await crossChainMessenger.l1Signer.getBalance()

      const l2Balance = await crossChainMessenger.l2Signer.getBalance()

      setBalances({
        l1Balance,
        l2Balance,
      })
    }
    calcBalances()
  }, [address])

  return balances
}

export default useBalances

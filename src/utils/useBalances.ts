import { ethers } from 'ethers'

import { useEffect, useState } from 'react'
import { useCrossChainMessenger } from './useCrossChainMessenger'

const useBalances = () => {
  const [balances, setBalances] = useState({
    l1Balance: ethers.BigNumber.from(0),
    l2Balance: ethers.BigNumber.from(0),
  })
  const crossChainMessenger = useCrossChainMessenger()

  useEffect(() => {
    const calcBalances = async () => {
      const l1Balance = await crossChainMessenger.l1Signer.getBalance()

      const l2Balance = await crossChainMessenger.l2Signer.getBalance()

      setBalances({
        l1Balance,
        l2Balance,
      })
    }
    calcBalances()
  }, [crossChainMessenger])

  return balances
}

export default useBalances

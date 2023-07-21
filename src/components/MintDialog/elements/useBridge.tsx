import { BigNumber, ethers } from 'ethers'
import { useCallback, useMemo, useState } from 'react'
import { goerli, baseGoerli, mainnet, base } from 'viem/chains'
import * as OP from '@eth-optimism/sdk'
import { useAddress, useSigner, useSwitchChain } from '@thirdweb-dev/react'
import { isProd } from '@/config/chain'

const l1Chain = isProd ? mainnet : goerli
const l2Chain = isProd ? base : baseGoerli

const useValidateChain = () => {
  const switchChain = useSwitchChain()
  const getChain = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')

    const network = await provider.getNetwork()
    return network.chainId
  }, [])

  return useCallback(
    async (chainId: number) => {
      const currentChain = await getChain()
      try {
        if (!currentChain) {
          return false
        }

        if (currentChain !== chainId) {
          await switchChain(chainId)
        }

        return true
      } catch (e) {
        return false
      }
    },
    [getChain]
  )
}

export enum BridgeState {
  NOT_STARTED,
  AWAITING_CONFIRMATION,
  L1_TX_PROCESSING,
  L1_TX_PROCESSED,
  L2_TX_PROCESSING,
  L2_TX_PROCESSED,
  BRIDGED,
}

export const useBridge = (amount: BigNumber) => {
  const [l1TxHash, setL1TxHash] = useState('')
  const [l2TxHash, setL2TxHash] = useState('')
  const [bridgeState, setBridgeState] = useState(BridgeState.NOT_STARTED)
  const validateChain = useValidateChain()
  const address = useAddress()
  const signer = useSigner()

  const messenger = useMemo(() => {
    const l2Signer = new ethers.providers.JsonRpcProvider(
      l2Chain.rpcUrls.default.http[0]
    ).getSigner(address)

    return new OP.CrossChainMessenger({
      l1ChainId: l1Chain.id,
      l2ChainId: l2Chain.id,
      l1SignerOrProvider: signer!,
      l2SignerOrProvider: l2Signer,
    })
  }, [address, signer])

  const depositETH = useCallback(
    async (crossChainMessenger: OP.CrossChainMessenger) => {
      try {
        const currentBlock =
          await crossChainMessenger.l2Provider.getBlockNumber()

        setBridgeState(BridgeState.AWAITING_CONFIRMATION)

        const response = await crossChainMessenger.depositETH(amount)
        setBridgeState(BridgeState.L1_TX_PROCESSING)
        setL1TxHash(response.hash)

        await response.wait()

        setBridgeState(BridgeState.L2_TX_PROCESSING)
        const messageReceipt = await crossChainMessenger.waitForMessageReceipt(
          response.hash,
          {
            fromBlockOrBlockHash: currentBlock,
          }
        )
        setL2TxHash(messageReceipt.transactionReceipt.transactionHash)

        setBridgeState(BridgeState.L2_TX_PROCESSED)
        await crossChainMessenger.l2Provider.waitForTransaction(
          messageReceipt.transactionReceipt.transactionHash
        )

        setBridgeState(BridgeState.BRIDGED)
      } catch (e) {
        console.log('deposit', e)
        // @ts-expect-error
        if (e.reason === 'user rejected transaction') {
          setBridgeState(BridgeState.NOT_STARTED)
          return
        }
        throw e
      }
    }, // depositETH()
    [amount]
  )

  const bridge = useCallback(
    async () => {
      console.log('validateChain')
      const depositChainValid = await validateChain(l1Chain.id)
      if (!depositChainValid) {
        return
      }

      await depositETH(messenger)
    }, // main
    [depositETH, messenger, validateChain]
  )

  return {
    bridge,
    l1TxHash,
    l2TxHash,
    bridgeState,
  }
}

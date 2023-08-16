import { BigNumber, ethers, providers } from 'ethers'
import { useCallback, useMemo, useState } from 'react'
import { goerli, baseGoerli, mainnet, base } from 'viem/chains'
import * as OP from '@eth-optimism/sdk'
import { isProd } from '@/config/chain'
import { useAccount, useWalletClient } from 'wagmi'
import { useLogEvent } from '@/utils/useLogEvent'
import { events } from '@/utils/analytics'

const l1Chain = isProd ? mainnet : goerli
const l2Chain = isProd ? base : baseGoerli

export enum BridgeState {
  NOT_STARTED,
  AWAITING_CONFIRMATION,
  L1_TX_PROCESSING,
  L1_TX_PROCESSED,
  L2_TX_PROCESSING,
  L2_TX_PROCESSED,
  BRIDGED,
  ERROR,
}

export const useBridge = (amount: BigNumber) => {
  const [l1TxHash, setL1TxHash] = useState('')
  const [l2TxHash, setL2TxHash] = useState('')
  const [bridgeState, setBridgeState] = useState(BridgeState.NOT_STARTED)
  const { address } = useAccount()
  const { data: walletClient } = useWalletClient()
  const logEvent = useLogEvent()

  const messenger = useMemo(() => {
    if (!walletClient) return
    const { account, chain, transport } = walletClient
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    }
    const provider = new providers.Web3Provider(transport, network)
    console.log('right here!')
    const signer = provider.getSigner(account.address)
    const l2Signer = new ethers.providers.JsonRpcProvider(
      l2Chain.rpcUrls.default.http[0]
    ).getSigner(address)

    return new OP.CrossChainMessenger({
      l1ChainId: l1Chain.id,
      l2ChainId: l2Chain.id,
      l1SignerOrProvider: signer,
      l2SignerOrProvider: l2Signer,
    })
  }, [address, walletClient])

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

        logEvent?.(events.bridgeSuccess)
        setBridgeState(BridgeState.BRIDGED)
      } catch (e) {
        // @ts-expect-error
        if (e.reason === 'user rejected transaction') {
          setBridgeState(BridgeState.NOT_STARTED)
          return
        }
        setBridgeState(BridgeState.ERROR)
      }
    }, // depositETH()
    [amount, logEvent]
  )

  const bridge = useCallback(
    async () => {
      if (!messenger) return
      logEvent?.(events.bridgeStarted)
      await depositETH(messenger)
    }, // main
    [depositETH, messenger, logEvent]
  )

  return {
    bridge,
    l1TxHash,
    l2TxHash,
    bridgeState,
  }
}

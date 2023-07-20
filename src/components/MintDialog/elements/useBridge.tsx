import { BigNumber, ethers, providers } from 'ethers'
import { useCallback, useState } from 'react'
import { goerli, baseGoerli } from 'viem/chains'
import * as OP from '@eth-optimism/sdk'
import {
  WalletInstance,
  useAddress,
  useSigner,
  useWallet,
} from '@thirdweb-dev/react'

const gwei = BigInt(1000000000)
const eth = gwei * gwei // 10^18
const centieth = eth / BigInt(100)

const validateChain = async (chainId: number, wallet?: WalletInstance) => {
  const currentChain = await wallet?.getChainId()
  console.log('currentChain', currentChain)

  if (!wallet || !currentChain) {
    return
  }

  if (currentChain !== chainId) {
    console.log('Switch to Goerli network')
    await wallet.switchChain(chainId)
  }

  const nextChain = await wallet?.getChainId()
  console.log('nextChain', nextChain)

  return nextChain === chainId
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
  const wallet = useWallet()
  const signer = useSigner()
  const address = useAddress()

  const setup = useCallback(async () => {
    const [l1Url] = goerli.rpcUrls.default.http
    const [l2Url] = baseGoerli.rpcUrls.default.http

    const l1 = new ethers.providers.JsonRpcProvider(l1Url).getSigner(address)
    const l2 = new ethers.providers.JsonRpcProvider(l2Url).getSigner(address)

    return new OP.CrossChainMessenger({
      l1ChainId: OP.L1ChainID.GOERLI,
      l2ChainId: OP.L2ChainID.BASE_GOERLI,
      l1SignerOrProvider: signer!,
      l2SignerOrProvider: signer!,
    })
  }, [address, signer])

  const reportBalances = useCallback(
    async (crossChainMessenger: OP.CrossChainMessenger) => {
      const l1Balance = (await crossChainMessenger.l1Signer.getBalance())
        .toString()
        .slice(0, -9)
      const l2Balance = (await crossChainMessenger.l2Signer.getBalance())
        .toString()
        .slice(0, -9)

      console.log(`On L1:${l1Balance} Gwei    On L2:${l2Balance} Gwei`)
    }, // reportBalances
    []
  )

  const depositETH = useCallback(
    async (crossChainMessenger: OP.CrossChainMessenger) => {
      try {
        const chainValid = validateChain(goerli.id, wallet)

        if (!chainValid) {
          return
        }

        console.log('Deposit ETH')
        await reportBalances(crossChainMessenger)

        const start = new Date().getTime()

        setBridgeState(BridgeState.AWAITING_CONFIRMATION)

        const response = await crossChainMessenger.depositETH(amount)
        setBridgeState(BridgeState.L1_TX_PROCESSING)
        setL1TxHash(response.hash)

        console.log(`Transaction hash (on L1): ${response.hash}`)
        await response.wait()

        console.log('Waiting for status to change to RELAYED')
        console.log(
          `Time so far ${(new Date().getTime() - start) / 1000} seconds`
        )
        setBridgeState(BridgeState.L1_TX_PROCESSED)
        const messageReceipt = await crossChainMessenger.waitForMessageReceipt(
          response.hash
        )
        console.log(
          `Message receipt (on L1): ${messageReceipt.transactionReceipt.transactionHash}`
        )

        await reportBalances(crossChainMessenger)
        console.log(
          `depositETH took ${(new Date().getTime() - start) / 1000} seconds\n\n`
        )
      } catch (e) {
        console.log(e)
        // @ts-expect-error
        if (e.reason === 'user rejected transaction') {
          setBridgeState(BridgeState.NOT_STARTED)
          return
        }
      }
    }, // depositETH()
    [reportBalances, wallet, amount]
  )

  const withdrawETH = useCallback(
    async (crossChainMessenger: OP.CrossChainMessenger) => {
      const chainValid = validateChain(baseGoerli.id, wallet)

      if (!chainValid) {
        return
      }
      console.log('Withdraw ETH')
      const start = new Date().getTime()
      await reportBalances(crossChainMessenger)

      setBridgeState(BridgeState.AWAITING_CONFIRMATION)

      const response = await crossChainMessenger.withdrawETH(amount)
      setBridgeState(BridgeState.L2_TX_PROCESSING)
      setL2TxHash(response.hash)

      console.log(`Transaction hash (on L2): ${response.hash}`)
      console.log(
        `\tFor more information: https://goerli-optimism.etherscan.io/tx/${response.hash}`
      )
      await response.wait()

      console.log('Waiting for status to be READY_TO_PROVE')
      console.log(
        `Time so far ${(new Date().getTime() - start) / 1000} seconds`
      )
      const messageReceipt = await crossChainMessenger.waitForMessageReceipt(
        response.hash
      )
      console.log(
        `Message receipt (on L2): ${messageReceipt.transactionReceipt.transactionHash}`
      )
      setBridgeState(BridgeState.L2_TX_PROCESSED)

      console.log(
        `Time so far ${(new Date().getTime() - start) / 1000} seconds`
      )
      await crossChainMessenger.proveMessage(response.hash)

      console.log('In the challenge period, waiting for status READY_FOR_RELAY')
      console.log(
        `Time so far ${(new Date().getTime() - start) / 1000} seconds`
      )
      await crossChainMessenger.waitForMessageStatus(
        response.hash,
        OP.MessageStatus.READY_FOR_RELAY
      )

      console.log('Ready for relay, finalizing message now')
      console.log(
        `Time so far ${(new Date().getTime() - start) / 1000} seconds`
      )
      await crossChainMessenger.finalizeMessage(response.hash)

      console.log('Waiting for status to change to RELAYED')
      console.log(
        `Time so far ${(new Date().getTime() - start) / 1000} seconds`
      )
      await crossChainMessenger.waitForMessageStatus(
        response,
        OP.MessageStatus.RELAYED
      )

      setBridgeState(BridgeState.BRIDGED)
      await reportBalances(crossChainMessenger)
      console.log(
        `withdrawETH took ${
          (new Date().getTime() - start) / 1000
        } seconds\n\n\n`
      )
    }, // withdrawETH()
    [reportBalances, wallet, amount]
  )

  const bridge = useCallback(
    async () => {
      const crossChainMessenger = await setup()

      if (!crossChainMessenger) return
      await depositETH(crossChainMessenger)
      await withdrawETH(crossChainMessenger)
    }, // main
    [depositETH, setup, withdrawETH]
  )

  return {
    bridge,
    l1TxHash,
    l2TxHash,
    bridgeState,
  }
}

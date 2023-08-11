import { formatEther } from 'ethers/lib/utils'
import { FC, useMemo, useState } from 'react'
import { BridgeState, useBridge } from '../../elements/useBridge'
import { Pending } from '../../elements/Pending'

import { parseEther } from 'ethers/lib/utils'

import { NotStarted } from './NotStarted'
import { Bridging } from './Bridging'
import { Success } from './Success'
import { ModalPage } from '../../types'
import { BridgeError } from './BridgeError'

interface BridgeProps {
  l1Balance: bigint
  minAmount: string
  setPage: React.Dispatch<ModalPage>
}

const roundDownToDecimals = (value: number) => {
  const scalar = 10000;
  // const scalar = value < 0.01 ? 10000 : 100
  return Math.floor(scalar * value) / scalar
}

export const Bridge: FC<BridgeProps> = ({
  l1Balance,
  minAmount = '0.001',
  setPage,
}) => {
  const recommendedAmount = useMemo(() => {
    return roundDownToDecimals(
      Math.min(
        0.25,
        Math.max(
          0.2 * Number(formatEther(l1Balance)),
          Number(formatEther(parseEther(minAmount)))
        )
      )
    ).toString()
  }, [l1Balance, minAmount])

  const [amount, setAmount] = useState(recommendedAmount)

  const { bridge, l1TxHash, l2TxHash, bridgeState } = useBridge(
    parseEther(amount || '0')
  )

  const awaitingConfirmation = bridgeState === BridgeState.AWAITING_CONFIRMATION

  const content = useMemo(() => {
    switch (bridgeState) {
      case BridgeState.AWAITING_CONFIRMATION:
        return (
          <Pending
            isPendingTx={false}
            isPendingConfirmation={awaitingConfirmation}
          />
        )
      case BridgeState.NOT_STARTED:
        return (
          <NotStarted
            amount={amount}
            setAmount={setAmount}
            bridge={bridge}
            recommendedAmount={recommendedAmount}
            minAmount={minAmount}
            setPage={setPage}
          />
        )
      case BridgeState.L1_TX_PROCESSING:
      case BridgeState.L1_TX_PROCESSED:
      case BridgeState.L2_TX_PROCESSING:
      case BridgeState.L2_TX_PROCESSED:
        return (
          <Bridging
            bridgeState={bridgeState}
            l1TxHash={l1TxHash}
            l2TxHash={l2TxHash}
          />
        )
      case BridgeState.BRIDGED:
        return <Success l2TxHash={l2TxHash} setPage={setPage} amount={amount} />
      case BridgeState.ERROR:
        return (
          <BridgeError
            setPage={setPage}
            l1TxHash={l1TxHash}
            l2TxHash={l2TxHash}
          />
        )
      default:
        return null
    }
  }, [
    amount,
    awaitingConfirmation,
    bridge,
    bridgeState,
    l1TxHash,
    l2TxHash,
    minAmount,
    recommendedAmount,
    setPage,
  ])

  return <>{content}</>
}

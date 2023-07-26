import { FC, useMemo, useState } from 'react'
import { BridgeState, useBridge } from '../../elements/useBridge'
import { Pending } from '../../elements/Pending'

import { parseEther } from 'ethers/lib/utils'

import { NotStarted } from './NotStarted'
import { Bridging } from './Bridging'
import { Success } from './Success'
import { ModalPage } from '../../types'

interface BridgeProps {
  minAmount: string
  setPage: React.Dispatch<ModalPage>
}

export const Bridge: FC<BridgeProps> = ({ minAmount = '0.251', setPage }) => {
  const [amount, setAmount] = useState(minAmount)
  const { bridge, l1TxHash, l2TxHash, bridgeState } = useBridge(
    parseEther(amount)
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
            minAmount={minAmount}
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
    setPage,
  ])

  return <>{content}</>
}

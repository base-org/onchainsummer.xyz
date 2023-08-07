import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { BridgeState } from '../../elements/useBridge'
import { ArrowRight } from '@/components/icons/ArrowRight'

import { scanUrl } from '@/utils/scanUrl'

import dialogClasses from '@/components/dialog.module.css'

interface BridgingProps {
  bridgeState: BridgeState
  l1TxHash: string
  l2TxHash: string
}

const Step = ({
  isStep,
  txHash,
  label,
  l1 = false,
}: {
  isStep: boolean
  txHash: string
  label: string
  l1?: boolean
}) => {
  return (
    <div className="h-1/4 flex flex-col gap-2 leading-none">
      <div className={clsx({ 'text-ocs-blue': isStep })}>{label}</div>
      {txHash && isStep ? (
        <a
          href={scanUrl(l1, txHash)}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium flex gap-2 items-center ml-8"
        >
          View on explorer <ArrowRight color={'#000'} height={16} width={16} />
        </a>
      ) : null}
    </div>
  )
}

export const Bridging: FC<BridgingProps> = ({
  l1TxHash,
  l2TxHash,
  bridgeState,
}) => {
  const isStep1 = bridgeState === BridgeState.L1_TX_PROCESSING
  const isStep2 = bridgeState === BridgeState.L1_TX_PROCESSED
  const isStep3 = bridgeState === BridgeState.L2_TX_PROCESSING
  const isStep4 = bridgeState === BridgeState.L2_TX_PROCESSED

  return (
    <div className="flex flex-col w-full h-full items-center overflow-scroll">
      <Dialog.Title className={dialogClasses.title}>Bridging...</Dialog.Title>

      <div className={'flex flex-col w-full gap-6 md:gap-8'}>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <span>
            This usually takes a couple minutes on the blockchain, please
            don&apos;t refresh the page.
          </span>
        </Dialog.Description>

        <div className="flex w-full h-[240px] gap-3">
          <div className="h-full w-1 bg-light-palette-line rounded-full ">
            <div
              className={clsx(
                'bg-ocs-gray text-white w-1 rounded-full h-full transition-[max-height] duration-500 ease-in-out]',
                {
                  'max-h-[25%]': isStep1,
                },
                {
                  'max-h-[50%]': isStep2,
                },
                {
                  'max-h-[75%]': isStep3,
                },
                {
                  'max-h-[100%]': isStep4,
                }
              )}
            ></div>
          </div>
          <div className="flex flex-col h-full font-mono">
            <Step
              label="1. Ethereum tx processing"
              isStep={isStep1}
              txHash={l1TxHash}
              l1
            />
            <Step
              label="2. Ethereum tx completed"
              isStep={isStep2}
              txHash={l1TxHash}
              l1
            />
            <Step
              label="3. Waiting for Base tx"
              isStep={isStep3}
              txHash={l2TxHash}
            />
            <Step
              label="4. Base tx processing"
              isStep={isStep4}
              txHash={l2TxHash}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

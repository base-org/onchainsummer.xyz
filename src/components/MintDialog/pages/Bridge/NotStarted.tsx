import { FC, useMemo } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { formatEther, parseEther } from 'ethers/lib/utils'
import { Button } from '@/components/Button'
import { EthBase } from '@/components/icons/EthBase'
import useBalances from '@/utils/useBalances'
import dialogClasses from '@/components/dialog.module.css'
import { l1 } from '@/config/chain'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { min } from 'date-fns'

interface NotStartedProps {
  amount: string
  setAmount: React.Dispatch<string>
  minAmount: string
  recommendedAmount: string
  bridge: () => Promise<void>
}

export const NotStarted: FC<NotStartedProps> = ({
  amount,
  setAmount,
  minAmount,
  recommendedAmount,
  bridge,
}) => {
  const { switchNetwork } = useSwitchNetwork()
  const { chain } = useNetwork()

  const wrongChain = chain && chain.id !== l1.id

  const { l1Balance } = useBalances()

  const recommendationIsMin = useMemo(() => {
    return recommendedAmount == minAmount
  }, [amount, min])

  return (
    <div className="flex flex-col md:my-auto">
      <Dialog.Title className={'desktop-h2'}>Bridge ETH to Base</Dialog.Title>

      <div className={'flex flex-col w-full gap-6 md:gap-8'}>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <span className="desktop-body">
            You need ETH on Base to mint!{' '}
            {!recommendationIsMin
              ? ` We recommend bridging ${recommendedAmount} ETH, but `
              : ''}
            {recommendationIsMin ? 'Y' : 'y'}ou&apos;ll need at least{' '}
            {minAmount} ETH.{' '}
            <a
              href="https://help.coinbase.com/en/wallet/bridging"
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-headline inline-block"
            >
              Learn more
            </a>
          </span>
        </Dialog.Description>
        <div className="flex flex-col gap-2">
          <span className="desktop-headline">Bridge from Ethereum to Base</span>
          <label htmlFor="bridge-amount" className="relative w-full">
            <span className="sr-only">Bridge Amount</span>
            <input
              id="bridge-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="border rounded-[100px] px-5 py-3 w-full pr-14 desktop-body"
              min={minAmount}
              step="0.1"
              max={formatEther(l1Balance)}
              onBlur={() => {
                if (parseFloat(amount) < parseFloat(minAmount)) {
                  setAmount(minAmount)
                }
                if (parseFloat(amount) > parseFloat(formatEther(l1Balance))) {
                  setAmount(formatEther(l1Balance))
                }
              }}
            />
            <EthBase className="absolute top-1/2 right-4 transform -translate-y-1/2" />
          </label>

          <div className="flex justify-between text-button-text-text desktop-body">
            <span>Your balance</span>
            <span>{formatEther(l1Balance)} ETH</span>
          </div>
        </div>
        {wrongChain && switchNetwork ? (
          <Button onClick={() => switchNetwork(l1.id)}>Switch to L1</Button>
        ) : (
          <Button disabled={!amount} onClick={bridge}>
            Bridge now
          </Button>
        )}
      </div>
    </div>
  )
}

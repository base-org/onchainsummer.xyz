import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { formatEther } from 'ethers/lib/utils'
import { Button } from '@/components/Button'
import { EthBase } from '@/components/icons/EthBase'
import useBalances from '@/utils/useBalances'
import { useChainId, useSwitchChain } from '@thirdweb-dev/react'
import { isProd } from '@/config/chain'
import { goerli, mainnet } from 'viem/chains'

interface NotStartedProps {
  amount: string
  setAmount: React.Dispatch<string>
  minAmount: string
  bridge: () => Promise<void>
}

const l1ChainId = isProd ? mainnet.id : goerli.id

export const NotStarted: FC<NotStartedProps> = ({
  amount,
  setAmount,
  minAmount,
  bridge,
}) => {
  const switchChain = useSwitchChain()
  const chainId = useChainId()

  const wrongChain = chainId !== l1ChainId

  const { l1Balance } = useBalances()
  return (
    <div className="flex flex-col md:my-auto">
      <Dialog.Title className={'text-[32px] font-display'}>
        Bridge ETH to Base
      </Dialog.Title>

      <div className={'flex flex-col w-full gap-6 md:gap-8'}>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <span>
            You need ETH on Base to mint! We recommend bridging 0.25 ETH, but
            you&apos;ll need at least 0.007 ETH.{' '}
            <a
              href="https://help.coinbase.com/en/wallet/bridging"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium inline-block"
            >
              Learn more
            </a>
          </span>
        </Dialog.Description>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Bridge from Ethereum to Base</span>
          <label htmlFor="bridge-amount" className="relative w-full">
            <span className="sr-only">Bridge Amount</span>
            <input
              id="bridge-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="border rounded-[100px] px-5 py-3 w-full pr-14"
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

          <div className="flex justify-between text-button-text-text leading-none">
            <span>Your balance</span>
            <span>{formatEther(l1Balance)} ETH</span>
          </div>
        </div>
        {wrongChain ? (
          <Button onClick={() => switchChain(l1ChainId)}>Switch to L1</Button>
        ) : (
          <Button onClick={bridge}>Bridge now</Button>
        )}
      </div>
    </div>
  )
}

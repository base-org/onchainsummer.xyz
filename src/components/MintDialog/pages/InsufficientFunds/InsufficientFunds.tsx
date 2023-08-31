import { FC, FunctionComponent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import dialogClasses from '@/components/dialog.module.css'
import useBalances from '@/utils/useBalances'
import { formatEther } from 'ethers/lib/utils'
import { Button } from '@/components/Button'
import { ModalPage } from '../../types'
import { Copy } from '@/components/icons/Copy'
import { Checkmark } from '@/components/icons/Checkmark'
import { usePollBalance } from './usePollBalance'
import { useAccount } from 'wagmi'
import { useMintDialogContext } from '../../Context/useMintDialogContext'

interface InsufficientFundsProps {
  minimalBalance: string
  setPage: React.Dispatch<ModalPage>
  totalPrice: string
}

const WalletAddressCopy: FunctionComponent = () => {
  const { l2Balance } = useBalances()
  const { address } = useAccount()
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between text-button-text-text leading-none">
        <span className="font-medium text-ocs-black">Your wallet</span>
        <span>{formatEther(l2Balance)} ETH</span>
      </div>
      <button
        className="border border-ocs-light-gray bg-white hover:bg-ocs-light-gray p-3 rounded-[100px] text-button-text-text relative pr-12 whitespace-nowrap overflow-hidden text-ellipsis"
        onClick={() => {
          if (!address || !navigator) return
          navigator.clipboard.writeText(address)

          setIsCopied(true)
        }}
      >
        {address}
        {isCopied ? (
          <Checkmark
            height={16}
            width={16}
            className="absolute top-1/2 right-5 transform -translate-y-1/2"
          />
        ) : (
          <Copy className="absolute top-1/2 right-5 transform -translate-y-1/2" />
        )}
      </button>
    </div>
  )
}

export const InsufficientFunds: FC<InsufficientFundsProps> = ({
  minimalBalance,
  setPage,
  totalPrice,
}) => {
  const {
    info: { crossMintClientId },
  } = useMintDialogContext()
  usePollBalance(setPage, totalPrice)

  if (!crossMintClientId) {
    return (
      <div className="flex flex-col md:my-auto gap-6">
        <Dialog.Title className={'desktop-h2'}>
          You need some ETH to mint
        </Dialog.Title>

        <div className={'flex flex-col w-full gap-6 md:gap-8'}>
          <Dialog.Description className="flex flex-col w-full gap-4">
            <span className="desktop-body">
              To mint “Bridge to Base”, you need ETH on Base network. Send ETH
              to your address now, or tap “How to buy ETH” if you need help.
            </span>
          </Dialog.Description>
          <WalletAddressCopy />
          <div className="flex flex-col gap-4">
            <Button href="https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency">
              HOW TO BUY ETH
            </Button>
            <Button
              variant="LIGHT"
              onClick={() => setPage(ModalPage.NATIVE_MINT)}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:my-auto gap-6">
      <Dialog.Title className={'desktop-h2'}>
        Mint with credit card
      </Dialog.Title>

      <div className={'flex flex-col w-full gap-6 md:gap-8'}>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <span className="desktop-body">
            Mint the NFT with a credit card or send at least {minimalBalance}{' '}
            ETH to your Base address.
          </span>
        </Dialog.Description>
        <WalletAddressCopy />
        <div className="flex flex-col gap-4">
          <Button onClick={() => setPage(ModalPage.CROSS_MINT_FORM)}>
            MINT WITH CREDIT CARD
          </Button>
          <Button
            variant="LIGHT"
            onClick={() => setPage(ModalPage.NATIVE_MINT)}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

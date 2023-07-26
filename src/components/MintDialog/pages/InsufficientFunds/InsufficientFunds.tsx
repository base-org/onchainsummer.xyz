import { FC, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import dialogClasses from '@/components/dialog.module.css'
import useBalances from '@/utils/useBalances'
import { formatEther } from 'ethers/lib/utils'
import { Button } from '@/components/Button'
import { ModalPage } from '../../types'
import { useAddress } from '@thirdweb-dev/react'
import { Copy } from '@/components/icons/Copy'
import { Checkmark } from '@/components/icons/Checkmark'

interface InsufficientFundsProps {
  minimalBalance: string
  setPage: React.Dispatch<ModalPage>
}

export const InsufficientFunds: FC<InsufficientFundsProps> = ({
  minimalBalance,
  setPage,
}) => {
  const { l2Balance } = useBalances()
  const address = useAddress()
  const [isCopied, setIsCopied] = useState(false)
  return (
    <div className="flex flex-col md:my-auto gap-6">
      <Dialog.Title className={dialogClasses.title}>
        Mint with credit card
      </Dialog.Title>

      <div className={'flex flex-col w-full gap-6 md:gap-8'}>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <span>
            Mint the NFT with a credit card or send at least {minimalBalance}{' '}
            ETH to your Base address.
          </span>
        </Dialog.Description>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-button-text-text leading-none">
            <span className="font-medium text-ocs-black">Your wallet</span>
            <span>{formatEther(l2Balance)} ETH</span>
          </div>
          <button
            className="border border-[#EFEFEF] bg-white hover:bg-[#EFEFEF] p-3 rounded-[100px] text-button-text-text relative pr-12 whitespace-nowrap overflow-hidden text-ellipsis"
            onClick={() => {
              if (!address || !navigator) return
              navigator.clipboard.writeText(address)

              setIsCopied(true)
            }}
          >
            {address}
            {isCopied ? (
              <Checkmark className="absolute top-1/2 right-5 transform -translate-y-1/2" />
            ) : (
              <Copy className="absolute top-1/2 right-5 transform -translate-y-1/2" />
            )}
          </button>
          {}
        </div>
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

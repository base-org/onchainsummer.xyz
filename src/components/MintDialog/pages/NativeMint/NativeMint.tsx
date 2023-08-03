import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { NativeMintButton } from '../../elements/NativeMintButton'
import { ModalPage } from '../../types'
import { Button } from '@/components/Button'
import { Pending } from '../../elements/Pending'
import clsx from 'clsx'
import { TxDetails } from '../../MintDialog'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { AddressPill } from '@/components/AddressPill'
import { PartnerInfo } from '../../elements/PartnerInfo'

import { MintDotFunMinter } from '../../elements/MintDotFunMinter'
import dialogClasses from '@/components/dialog.module.css'
import { l2 } from '@/config/chain'
import { Quantity } from '../../elements/Quantity'
import { Address, useNetwork, useSwitchNetwork } from 'wagmi'
interface NativeMintProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  totalPrice: string
  txDetails: TxDetails | null
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  setMintError: React.Dispatch<React.SetStateAction<any | null>>
  insufficientFunds: boolean
  crossMintClientId: string | undefined
}

export const NativeMint: FC<NativeMintProps> = ({
  page,
  setPage,
  quantity,
  setQuantity,
  totalPrice,
  txDetails,
  setTxDetails,
  setMintError,
  insufficientFunds,
  crossMintClientId,
}) => {
  const {switchNetwork} = useSwitchNetwork()
  const network = useNetwork()

  const wrongChain = network.chain?.id !== l2.id
  const { creatorAddress, dropName, address, mintDotFunStatus } =
    useMintDialogContext()
  const isPendingConfirmation =
    page === ModalPage.NATIVE_MINT_PENDING_CONFIRMATION
  const isPendingTx = page === ModalPage.NATIVE_MINTING_PENDING_TX
  const isPending = isPendingConfirmation || isPendingTx

  const isMintDotFun = typeof mintDotFunStatus === 'object'

  return (
    <>
      {/* Temporarily disabled for teaser: {!isPending ? <PartnerInfo /> : null} */}
      {/* TODO: Add Coinbase Display font */}
      <Dialog.Title
        className={clsx(dialogClasses.title, 'lg:mt-2', {
          hidden: isPending,
        })}
      >
        {isPending ? 'Mint Tx Pending' : dropName}
      </Dialog.Title>

      <Pending
        isPendingTx={isPendingTx}
        isPendingConfirmation={isPendingConfirmation}
        txHash={txDetails?.hash}
      />

      <div
        className={clsx('flex flex-col w-full gap-4', { hidden: isPending })}
      >
        <Dialog.Description className="flex flex-col w-full gap-4">
          <AddressPill address={creatorAddress as Address} />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <span className="text-button-text-text flex justify-between mb-4">
            <span>
              {quantity} NFT{quantity > 1 ? 's' : ''}
            </span>
            <span>{totalPrice} ETH</span>
          </span>
        </Dialog.Description>

        {wrongChain && switchNetwork ? (
          <Button onClick={() => switchNetwork(l2.id)}>
            Switch to Base
          </Button>
        ) : insufficientFunds ? (
          <Button onClick={() => setPage(ModalPage.INSUFFICIENT_FUNDS)}>
            Mint ({totalPrice} ETH)
          </Button>
        ) : isMintDotFun ? (
          <MintDotFunMinter
            totalPrice={totalPrice}
            setTxDetails={setTxDetails}
            setPage={setPage}
          />
        ) : (
          <NativeMintButton
            page={page}
            setPage={setPage}
            quantity={quantity}
            totalPrice={totalPrice}
            setTxDetails={setTxDetails}
            setMintError={setMintError}
          />
        )}

        {!isMintDotFun && crossMintClientId ? (
          <Button
            variant="LIGHT"
            onClick={() => {
              setPage(ModalPage.CROSS_MINT_FORM)
            }}
          >
            Buy with credit card
          </Button>
        ) : null}
      </div>
    </>
  )
}

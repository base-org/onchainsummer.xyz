import { Address } from '@thirdweb-dev/sdk'
import * as Dialog from '@radix-ui/react-dialog'

import { FC, useMemo, useState } from 'react'
import { Button } from '../Button'
import { Close } from '../icons/Close'

import { Drop, DropType } from '@/config/partners/types'
import { ModalPage } from './types'
import { MintError } from './pages/MintError'
import { Success } from './pages/Success'
import { CrossMint } from './pages/CrossMint'
import { NativeMint } from './pages/NativeMint'
import { Bridge } from './pages/Bridge'
import { InsufficientFunds } from './pages/InsufficientFunds'
import { ArrowRight } from '../icons/ArrowRight'
import { useMintDialogContext } from './Context/useMintDialogContext'
import { Layout } from './elements/Layout'
import clsx from 'clsx'

export type TxDetails = {
  hash: string
  nft: {
    address: string
    tokenIds: string[]
  }
}

export const MintDialog: FC = () => {
  const { price, crossMintClientId } = useMintDialogContext()

  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(ModalPage.NATIVE_MINT)

  const [txDetails, setTxDetails] = useState<TxDetails | null>(null)
  const [mintError, setMintError] = useState<any | null>(null)

  const [crossMintOrderIdentifier, setCrossMintOrderIdentifier] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(price)

  const buttonTitle = useMemo(() => {
    switch (page) {
      case ModalPage.MINT_ERROR:
        return 'Tx Failed'
      case ModalPage.MINT_SUCCESS:
        return 'Success'
      case ModalPage.CROSS_MINT_PENDING:
      case ModalPage.NATIVE_MINTING_PENDING:
        return 'Minting...'
      case ModalPage.NATIVE_MINT:
        return (
          <>
            Mint (${price} ETH) <ArrowRight />
          </>
        )
      case ModalPage.BRIDGE:
        return 'Bridge'
      case ModalPage.BRIDGE_PENDING:
        return 'Bridging funds...'
      case ModalPage.BRIDGE_SUCCESS:
        return 'Success'
      case ModalPage.INSUFFICIENT_FUNDS:
        return 'Insufficient Funds'
      case ModalPage.CROSS_MINT_FORM:
        return 'Complete Payment'
      case ModalPage.CROSS_MINT_PAYMENT_FAILED:
        return 'Payment Failed - Try Again'
      default:
        return ''
    }
  }, [page, price])

  const dialogContent = useMemo(() => {
    switch (page) {
      case ModalPage.MINT_ERROR:
        return (
          <MintError
            mintError={mintError}
            setPage={setPage}
            setCrossMintOrderIdentifier={setCrossMintOrderIdentifier}
            totalPrice={totalPrice}
          />
        )
      case ModalPage.MINT_SUCCESS:
        return (
          <Success
            setPage={setPage}
            setCrossMintOrderIdentifier={setCrossMintOrderIdentifier}
            txHash={txDetails?.hash ?? ''}
            closeModal={() => setOpen(false)}
          />
        )
      case ModalPage.CROSS_MINT_FORM:
      case ModalPage.CROSS_MINT_PENDING:
      case ModalPage.CROSS_MINT_PAYMENT_FAILED:
        return crossMintClientId ? (
          <CrossMint
            setPage={setPage}
            page={page}
            crossMintClientId={crossMintClientId}
            quantity={quantity}
            totalPrice={totalPrice}
            orderIdentifier={crossMintOrderIdentifier}
            setOrderIdentifier={setCrossMintOrderIdentifier}
          />
        ) : null
      case ModalPage.NATIVE_MINTING_PENDING:
      case ModalPage.NATIVE_MINT:
        return (
          <NativeMint
            page={page}
            setPage={setPage}
            quantity={quantity}
            totalPrice={totalPrice}
            txDetails={txDetails}
            setTxDetails={setTxDetails}
            setMintError={setMintError}
          />
        )
      case ModalPage.BRIDGE:
      case ModalPage.BRIDGE_PENDING:
      case ModalPage.BRIDGE_SUCCESS:
        return <Bridge />
      case ModalPage.INSUFFICIENT_FUNDS:
        return <InsufficientFunds />
      default:
        return ''
    }
  }, [
    crossMintClientId,
    crossMintOrderIdentifier,
    mintError,
    page,
    quantity,
    totalPrice,
    txDetails,
  ])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>{buttonTitle}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <Dialog.Content
          className={clsx(
            'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] lg:max-w-[75vw] translate-x-[-50%] translate-y-[-50%] rounded-[24px] p-5 shadow-large bg-white focus:outline-none z-40 overflow-hidden lg:p-16',
            { 'h-full': page === ModalPage.CROSS_MINT_FORM }
          )}
        >
          <Dialog.Close asChild>
            <button
              className="hidden lg:inline-flex absolute top-10 right-10 h-[24px] w-[24px] appearance-none items-center justify-center focus:shadow-[0_0_0_1px] focus:outline-none"
              aria-label="Close"
            >
              <Close />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
          <Layout>{dialogContent}</Layout>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

import { formatEther as formatEtherByEthers } from 'ethers/lib/utils'
import * as Dialog from '@radix-ui/react-dialog'

import { FC, useEffect, useMemo, useState } from 'react'
import { Button } from '../Button'
import { Close } from '../icons/Close'

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
import { formatEther, parseEther } from 'viem'
import { useFundsStatus } from './elements/useFundsStatus'
import dialogClasses from '@/components/dialog.module.css'
import { usePriceEstimate } from './elements/usePriceEstimate'
export type TxDetails = {
  hash: string
}

export const MintDialog: FC = () => {
  const { price, crossMintClientId, trendingPageNativeMint, mintButtonStyles } =
    useMintDialogContext()
  const [open, setOpen] = useState(false)

  const [txDetails, setTxDetails] = useState<TxDetails | null>(null)
  const [mintError, setMintError] = useState<any | null>(null)

  const { l1PriceEstimate } = usePriceEstimate()
  const [crossMintOrderIdentifier, setCrossMintOrderIdentifier] = useState('')
  const [quantity, setQuantity] = useState(1)
  const totalPrice = useMemo(() => {
    return formatEther(parseEther(price) * BigInt(quantity))
  }, [quantity, price])

  const { fundsStatus } = useFundsStatus(totalPrice, open)

  const [page, setPage] = useState(() => {
    switch (fundsStatus) {
      case 'sufficient':
        return ModalPage.NATIVE_MINT
      case 'bridge':
        return ModalPage.BRIDGE
      case 'insufficient':
      default:
        return ModalPage.NATIVE_MINT
    }
  })

  useEffect(() => {
    const needsBridge = fundsStatus === 'bridge'
    if (needsBridge && page === ModalPage.NATIVE_MINT) {
      setPage(ModalPage.BRIDGE)
    }

    const sufficientFunds = fundsStatus === 'sufficient'
    if (
      (sufficientFunds && page === ModalPage.BRIDGE) ||
      (sufficientFunds && page === ModalPage.INSUFFICIENT_FUNDS)
    ) {
      setPage(ModalPage.NATIVE_MINT)
    }
  }, [fundsStatus, page])

  const resetModal = () => {
    setPage(ModalPage.NATIVE_MINT)
    setTxDetails(null)
    setMintError(null)
    setCrossMintOrderIdentifier('')
    setQuantity(1)
  }

  const buttonTitle = useMemo(() => {
    switch (page) {
      case ModalPage.MINT_ERROR:
        return 'Tx Failed'
      case ModalPage.MINT_SUCCESS:
        return 'Success'
      case ModalPage.NATIVE_MINT_PENDING_CONFIRMATION:
        return 'Confirming...'
      case ModalPage.CROSS_MINT_PENDING:
      case ModalPage.NATIVE_MINTING_PENDING_TX:
        return 'Minting...'
      case ModalPage.BRIDGE:
      case ModalPage.NATIVE_MINT:
        return (
          <>
            {trendingPageNativeMint ? (
              <span className="w-full">Mint</span>
            ) : (
              <>
                Mint ({price} ETH) <ArrowRight />
              </>
            )}
          </>
        )
      case ModalPage.BRIDGE_PENDING:
        return 'Bridging funds...'
      case ModalPage.BRIDGE_SUCCESS:
        return 'Bridge Success'
      case ModalPage.INSUFFICIENT_FUNDS:
        return 'Insufficient Funds'
      case ModalPage.CROSS_MINT_FORM:
        return 'Complete Payment'
      case ModalPage.CROSS_MINT_PAYMENT_FAILED:
        return 'Payment Failed - Try Again'
      default:
        return ''
    }
  }, [trendingPageNativeMint, price, page])

  const dialogContent = useMemo(() => {
    switch (page) {
      case ModalPage.MINT_ERROR:
        return (
          <MintError
            mintError={mintError}
            setPage={setPage}
            txHash={txDetails?.hash ?? ''}
          />
        )
      case ModalPage.MINT_SUCCESS:
        return (
          <Success
            resetModal={resetModal}
            txHash={txDetails?.hash ?? ''}
            closeModal={() => setOpen(false)}
          />
        )
      case ModalPage.CROSS_MINT_FORM:
      case ModalPage.CROSS_MINT_PENDING:
      case ModalPage.CROSS_MINT_PAYMENT_FAILED:
        return crossMintClientId ? (
          <CrossMint
            setTxDetails={setTxDetails}
            setPage={setPage}
            page={page}
            crossMintClientId={crossMintClientId}
            quantity={quantity}
            totalPrice={totalPrice}
            orderIdentifier={crossMintOrderIdentifier}
            setOrderIdentifier={setCrossMintOrderIdentifier}
          />
        ) : null
      case ModalPage.NATIVE_MINT_PENDING_CONFIRMATION:
      case ModalPage.NATIVE_MINTING_PENDING_TX:
      case ModalPage.NATIVE_MINT:
        return (
          <NativeMint
            page={page}
            setPage={setPage}
            quantity={quantity}
            setQuantity={setQuantity}
            totalPrice={totalPrice}
            txDetails={txDetails}
            setTxDetails={setTxDetails}
            setMintError={setMintError}
            insufficientFunds={fundsStatus === 'insufficient'}
          />
        )
      case ModalPage.BRIDGE:
      case ModalPage.BRIDGE_PENDING:
      case ModalPage.BRIDGE_SUCCESS:
        return (
          <Bridge
            minAmount={Number(formatEtherByEthers(l1PriceEstimate)).toString()}
            setPage={setPage}
          />
        )
      case ModalPage.INSUFFICIENT_FUNDS:
        return (
          <InsufficientFunds
            minimalBalance={''}
            setPage={setPage}
            totalPrice={totalPrice}
          />
        )
      default:
        return ''
    }
  }, [
    crossMintClientId,
    crossMintOrderIdentifier,
    fundsStatus,
    mintError,
    page,
    quantity,
    totalPrice,
    txDetails,
  ])

  const isDisplayingCrossMintForm =
    page === ModalPage.CROSS_MINT_FORM ||
    page === ModalPage.CROSS_MINT_PENDING ||
    page === ModalPage.CROSS_MINT_PAYMENT_FAILED

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          tabIndex={-1}
          className={clsx('!flex !justify-between', mintButtonStyles)}
        >
          {buttonTitle}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogClasses.overlay} />
        <Dialog.Content
          className={clsx(
            'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-[450px] lg:max-w-[75vw] translate-x-[-50%] translate-y-[-50%] rounded-[24px] p-5 shadow-large bg-white focus:outline-none z-40 lg:p-16 overflow-auto h-full lg:h-auto lg:overflow-hidden',
            { '!h-full': isDisplayingCrossMintForm }
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

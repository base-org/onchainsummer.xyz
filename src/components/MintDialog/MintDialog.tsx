import { formatEther as formatEtherByEthers } from 'ethers/lib/utils'
import * as Dialog from '@radix-ui/react-dialog'

import { FC, useEffect, useMemo, useState } from 'react'
import { Button, ButtonProps } from '../Button'
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
import dialogClasses from '@/components/dialog.module.css'
import useBalances from '@/utils/useBalances'
import { Checkmark } from '../icons/Checkmark'
import { l2GasToMint, useMintThresholds } from '@/utils/useMintThresholds'
export type TxDetails = {
  hash: string
}

enum FundsStatus {
  Sufficient,
  Bridge,
  InsufficientFromQuantity,
  Insufficient,
}

export const MintDialog: FC<{ size?: ButtonProps['size'] }> = ({ size }) => {
  const {
    info: {
      price,
      crossMintClientId,
      trendingPageNativeMint,
      mintButtonStyles,
    },
  } = useMintDialogContext()

  const [open, setOpen] = useState(false)
  const { l2Balance, l1Balance } = useBalances()

  const [txDetails, setTxDetails] = useState<TxDetails | null>(null)
  const [mintError, setMintError] = useState<any | null>(null)

  const [crossMintOrderIdentifier, setCrossMintOrderIdentifier] = useState('')
  const [quantity, setQuantity] = useState(1)
  const totalPrice = useMemo(() => {
    return formatEther(parseEther(price) * BigInt(quantity))
  }, [quantity, price])

  const [page, setPage] = useState<ModalPage>()
  const { minL1BalanceWei, minL2BalanceWei } = useMintThresholds()

  const fundsStatus = useMemo(() => {
    const totalPriceWei = parseEther(totalPrice)
    if (l2Balance >= totalPriceWei + l2GasToMint) {
      return FundsStatus.Sufficient
    }

    if (
      l2Balance >= minL2BalanceWei &&
      l2Balance < totalPriceWei + l2GasToMint
    ) {
      // we do not want to send them to bridge just because they increased quantity
      // so we track this uniquely
      return FundsStatus.InsufficientFromQuantity
    }

    if (l2Balance < minL2BalanceWei && l1Balance < minL1BalanceWei) {
      return FundsStatus.Insufficient
    }

    return FundsStatus.Bridge
  }, [l1Balance, l2Balance, minL1BalanceWei, minL2BalanceWei, totalPrice])

  useEffect(() => {
    if (
      page &&
      ![
        ModalPage.NATIVE_MINT,
        ModalPage.INSUFFICIENT_FUNDS,
        ModalPage.BRIDGE,
      ].includes(page)
    ) {
      // do not update the page while other things are in progress
      return
    }

    switch (fundsStatus) {
      case FundsStatus.Sufficient:
        setPage(ModalPage.NATIVE_MINT)
        return
      case FundsStatus.InsufficientFromQuantity:
      case FundsStatus.Insufficient:
        // native mint component redirects to
        // insufficient funds screen after mint is pressed
        setPage(ModalPage.NATIVE_MINT)
        return
      case FundsStatus.Bridge:
        setPage(ModalPage.BRIDGE)
        return
    }
    // Intentionally leaving out `page` from deps here
  }, [fundsStatus])

  const resetModal = () => {
    setPage(ModalPage.NATIVE_MINT)
    setTxDetails(null)
    setMintError(null)
    setCrossMintOrderIdentifier('')
    setQuantity(1)
  }

  const buttonTitle = useMemo(() => {
    switch (page) {
      case ModalPage.MINT_SUCCESS:
        return (
          <>
            NFT Minted <Checkmark className="ml-auto" />
          </>
        )
      case ModalPage.NATIVE_MINT_PENDING_CONFIRMATION:
        return 'Confirming...'
      case ModalPage.CROSS_MINT_PENDING:
      case ModalPage.NATIVE_MINTING_PENDING_TX:
        return 'Minting...'
      case ModalPage.BRIDGE:
      case ModalPage.NATIVE_MINT:
      case ModalPage.MINT_ERROR:
      case ModalPage.INSUFFICIENT_FUNDS:
        return (
          <>
            {trendingPageNativeMint ? (
              <>Mint</>
            ) : (
              <>
                {price === '0' ? (
                  <>
                    Bridge and Mint For Free <ArrowRight className="ml-auto" />
                  </>
                ) : (
                  <>
                    Mint (
                    {Number(price).toLocaleString('en-US', {
                      maximumFractionDigits: 4,
                    })}{' '}
                    ETH)
                    <ArrowRight className="ml-auto" />
                  </>
                )}
              </>
            )}
          </>
        )
      case ModalPage.BRIDGE_PENDING:
        return 'Bridging funds...'
      case ModalPage.BRIDGE_SUCCESS:
        return 'Bridge Success'
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
            insufficientFunds={[
              FundsStatus.Insufficient,
              FundsStatus.InsufficientFromQuantity,
            ].includes(fundsStatus)}
          />
        )
      case ModalPage.BRIDGE:
      case ModalPage.BRIDGE_PENDING:
      case ModalPage.BRIDGE_SUCCESS:
        return (
          <Bridge
            l1Balance={l1Balance}
            minAmount={Number(formatEtherByEthers(minL2BalanceWei)).toFixed(4)}
            setPage={setPage}
          />
        )
      case ModalPage.INSUFFICIENT_FUNDS:
        return (
          <InsufficientFunds
            minimalBalance={Number(
              formatEther(parseEther(totalPrice) - l2Balance + l2GasToMint)
            )
              .toFixed(5)
              .toString()}
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
    l1Balance,
    l2Balance,
    minL2BalanceWei,
    mintError,
    page,
    quantity,
    totalPrice,
    txDetails,
  ])

  const desktopHeightAuto =
    page === ModalPage.NATIVE_MINTING_PENDING_TX ||
    page === ModalPage.NATIVE_MINT_PENDING_CONFIRMATION ||
    page === ModalPage.MINT_SUCCESS ||
    page === ModalPage.BRIDGE ||
    page === ModalPage.BRIDGE_PENDING ||
    page === ModalPage.BRIDGE_SUCCESS

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button size={size} tabIndex={-1} className={clsx(mintButtonStyles)}>
          {buttonTitle}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogClasses.overlay} />
        <Dialog.Content
          className={clsx(
            'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[24px] p-5 shadow-large bg-white focus:outline-none z-40 h-auto overflow-scroll',
            'lg:max-w-5xl lg:p-16 lg:h-full lg:max-h-[600px] lg:overflow-hidden',
            {
              'lg:!h-auto': desktopHeightAuto,
            }
          )}
        >
          <Dialog.Close asChild>
            <button
              className="p-[10px] lg:p-0 bg-white rounded-full  z-30  absolute top-[1.75rem] right-[1.75rem] lg:rounded-none appearance-none items-center justify-center"
              aria-label="Close"
            >
              <Close height={20} width={20} />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
          <Layout>{dialogContent}</Layout>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

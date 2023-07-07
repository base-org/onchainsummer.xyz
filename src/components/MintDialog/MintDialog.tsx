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

export interface MintDialogProps {
  address: Address
  crossMintClientId?: string
  price: string
  partnerIcon: string
  partnerName: string
  dropImage: string
  dropName: string
  dropEndTime: number
  creatorAddress: string
}

export const MintDialog: FC<MintDialogProps> = ({
  price,
  address,
  crossMintClientId,
  partnerIcon,
  partnerName,
  dropImage,
  dropName,
  dropEndTime,
  creatorAddress,
}) => {
  const [page, setPage] = useState(ModalPage.NATIVE_MINT)

  const [nftDetails, setNftDetails] = useState<{
    address: string
    tokenIds: string[]
  } | null>(null)

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
        return `Mint (${price} ETH)`
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
            setPage={setPage}
            setCrossMintOrderIdentifier={setCrossMintOrderIdentifier}
          />
        )
      case ModalPage.MINT_SUCCESS:
        return (
          <Success
            setPage={setPage}
            setCrossMintOrderIdentifier={setCrossMintOrderIdentifier}
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
            partnerIcon={partnerIcon}
            partnerName={partnerName}
            dropImage={dropImage}
            dropName={dropName}
            page={page}
            setPage={setPage}
            address={address}
            quantity={quantity}
            dropEndTime={dropEndTime}
            creatorAddress={creatorAddress}
            totalPrice={totalPrice}
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
    address,
    creatorAddress,
    crossMintClientId,
    crossMintOrderIdentifier,
    dropEndTime,
    dropImage,
    dropName,
    page,
    partnerIcon,
    partnerName,
    quantity,
    totalPrice,
  ])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>{buttonTitle}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[24px] p-5 shadow-large bg-white focus:outline-none z-40 overflow-auto">
          <Dialog.Close asChild>
            <button
              className="hidden md:inline-flex absolute top-10 right-10 h-[24px] w-[24px] appearance-none items-center justify-center focus:shadow-[0_0_0_1px] focus:outline-none"
              aria-label="Close"
            >
              <Close />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
          {dialogContent}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

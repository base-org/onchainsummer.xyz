import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { NativeMintButton } from '../../elements/NativeMintButton'
import { ModalPage } from '../../types'
import { Separator } from '@/components/Separator'
import { Countdown } from '@/components/Countdown'
import { AddressPill } from '@/components/AddressPill'
import { Button } from '@/components/Button'
import { ArrowRight } from '@/components/icons/ArrowRight'
import { Pending } from '../../elements/Pending'
import clsx from 'clsx'
import { TxDetails } from '../../MintDialog'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { Layout } from '../../elements/Layout'

interface NativeMintProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  quantity: number
  totalPrice: string
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  setMintError: React.Dispatch<React.SetStateAction<any | null>>
}

export const NativeMint: FC<NativeMintProps> = ({
  page,
  setPage,
  quantity,
  totalPrice,
  setTxDetails,
  setMintError,
}) => {
  const { dropImage, dropName, partnerIcon, partnerName, address } =
    useMintDialogContext()
  const isPending = page === ModalPage.NATIVE_MINTING_PENDING

  return (
    <Layout>
      <div className={clsx({ hidden: !isPending })}>
        <Dialog.Title className="sr-only">Mint Tx Pending</Dialog.Title>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <Pending isPending={isPending} />
        </Dialog.Description>
      </div>
      <div
        className={clsx('flex flex-col w-full gap-4', {
          hidden: isPending,
        })}
      >
        <div className="flex gap-2">
          <div className="relative z-20 h-6 w-6">
            <Image src={partnerIcon} alt={`${partnerName} Icon`} fill />
          </div>
          <span className="font-medium">{partnerName}</span>
        </div>
        {/* TODO: Add Coinbase Display font */}
        <Dialog.Title className="text-[32px]">{dropName}</Dialog.Title>
        <Dialog.Description className="flex flex-col w-full gap-4">
          <div className="text-button-text-text flex justify-between mb-4">
            <span>
              {quantity} NFT{quantity > 1 ? 's' : ''}
            </span>
            <span>{totalPrice} ETH</span>
          </div>
        </Dialog.Description>
        <NativeMintButton
          page={page}
          setPage={setPage}
          address={address}
          quantity={quantity}
          totalPrice={totalPrice}
          setTxDetails={setTxDetails}
          setMintError={setMintError}
        />
        <Button
          variant="LIGHT"
          onClick={() => {
            setPage(ModalPage.CROSS_MINT_FORM)
          }}
        >
          Buy with credit card
        </Button>
      </div>
    </Layout>
  )
}

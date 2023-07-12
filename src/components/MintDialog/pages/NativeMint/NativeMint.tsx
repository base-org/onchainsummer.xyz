import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { NativeMintButton } from '../../elements/NativeMintButton'
import { ModalPage } from '../../types'
import { Button } from '@/components/Button'
import { Pending } from '../../elements/Pending'
import clsx from 'clsx'
import { TxDetails } from '../../MintDialog'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { AddressPill } from '@/components/AddressPill'
import { PartnerInfo } from '../../elements/PartnerInfo'

interface NativeMintProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  quantity: number
  totalPrice: string
  txDetails: TxDetails | null
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  setMintError: React.Dispatch<React.SetStateAction<any | null>>
}

export const NativeMint: FC<NativeMintProps> = ({
  page,
  setPage,
  quantity,
  totalPrice,
  txDetails,
  setTxDetails,
  setMintError,
}) => {
  const { creatorAddress, dropName, partnerIcon, partnerName, address } =
    useMintDialogContext()
  const isPending = page === ModalPage.NATIVE_MINTING_PENDING

  return (
    <>
      {!isPending ? <PartnerInfo /> : null}
      {/* TODO: Add Coinbase Display font */}
      <Dialog.Title
        className={clsx('text-[32px] lg:mt-2', { hidden: isPending })}
      >
        {isPending ? 'Mint Tx Pending' : dropName}
      </Dialog.Title>

      <Pending isPending={isPending} txHash={txDetails?.hash} />

      <div
        className={clsx('flex flex-col w-full gap-4', { hidden: isPending })}
      >
        <Dialog.Description className="flex flex-col w-full gap-4">
          <AddressPill address={creatorAddress} />
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
    </>
  )
}

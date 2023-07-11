'use client'

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalPage } from '../../types'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { AddressPill } from '@/components/AddressPill'
import { isProd } from '@/config/chain'
import { useMintDialogContext } from '../../Context/useMintDialogContext'

interface SuccessProps {
  setPage: React.Dispatch<ModalPage>
  setCrossMintOrderIdentifier: React.Dispatch<string>
  txHash: string
  closeModal: () => void
}

export const Success: FC<SuccessProps> = ({
  setPage,
  setCrossMintOrderIdentifier,
  txHash,
  closeModal,
}) => {
  const { dropImage, dropName, partnerIcon, partnerName, creatorAddress } =
    useMintDialogContext()
  return (
    <div className="relative flex flex-col w-full gap-4">
      <div className="relative z-20 w-full aspect-video mb-1">
        <Image
          src={dropImage}
          alt={dropName}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex gap-2">
        <div className="relative z-20 h-6 w-6">
          <Image src={partnerIcon} alt={`${partnerName} Icon`} fill />
        </div>
        <span className="font-medium">{partnerName}</span>
      </div>
      {/* TODO: Add Coinbase Display font */}
      <Dialog.Title className="text-[32px]">It&apos;s Yours!</Dialog.Title>
      <Dialog.Description className="flex flex-col w-full gap-4">
        <p>
          Your mint is confirmed — you’re officially the new owner of {dropName}
          .
        </p>
        <AddressPill address={creatorAddress} />
      </Dialog.Description>

      <Dialog.Close asChild>
        <Button
          external
          href={`https://${isProd ? '' : 'goerli.'}basescan.org/tx/${txHash}`}
          onClick={() => {
            setPage(ModalPage.NATIVE_MINT)
            setCrossMintOrderIdentifier('')
            closeModal()
          }}
        >
          View on BaseScan
        </Button>
      </Dialog.Close>
    </div>
  )
}

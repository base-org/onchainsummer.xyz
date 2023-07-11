'use client'

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalPage } from '../../types'
import { Button } from '@/components/Button'
import { AddressPill } from '@/components/AddressPill'
import { isProd } from '@/config/chain'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { PartnerInfo } from '../../elements/PartnerInfo'

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
    <>
      <PartnerInfo />
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
    </>
  )
}

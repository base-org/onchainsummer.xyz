'use client'

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalPage } from '../../types'
import { Button } from '@/components/Button'
import { AddressPill } from '@/components/AddressPill'
import { isProd } from '@/config/chain'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { PartnerInfo } from '../../elements/PartnerInfo'
import { ViewOnExplorer } from '../../elements/ViewOnExplorer'

interface SuccessProps {
  resetModal: () => void
  txHash: string
  closeModal: () => void
}

export const Success: FC<SuccessProps> = ({
  resetModal,
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
        <ViewOnExplorer
          txHash={txHash}
          onClick={() => {
            resetModal()
            closeModal()
          }}
        />
      </Dialog.Close>
    </>
  )
}

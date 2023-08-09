'use client'

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AddressPill } from '@/components/AddressPill'

import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { PartnerInfo } from '../../elements/PartnerInfo'
import { ViewOnExplorer } from '../../elements/ViewOnExplorer'
import dialogClasses from '@/components/dialog.module.css'
import { Address } from 'viem'
import { Share } from '@/components/Share'

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
      <Dialog.Title className={'desktop-h2'}>It&apos;s Yours!</Dialog.Title>
      <Dialog.Description className="flex flex-col w-full gap-4">
        <span className="desktop-body">
          Your mint is confirmed — you’re officially the new owner of {dropName}
          .
        </span>
        <AddressPill
          address={creatorAddress as Address}
          className={'!bg-ocs-gray !text-white'}
        />
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

      <div>
        <h3 className="font-sans text-[16px] text-[#151515]">Share on </h3>
        <Share />
      </div>
    </>
  )
}

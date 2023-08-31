'use client'

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AddressPill } from '@/components/AddressPill'

import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { PartnerInfo } from '../../elements/PartnerInfo'
import { ViewOnExplorer } from '../../elements/ViewOnExplorer'
import { Address } from 'viem'
import { Share } from '@/components/Share'
import { Button } from '@/components/Button'
import { ThirdWebPill } from '@/components/icons/ThirdWebPill'
import { MintType } from '../../types'

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
  const {
    info: { dropName, creatorAddress, interactWithNFTLink, mintType },
  } = useMintDialogContext()
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
        <AddressPill address={creatorAddress as Address} />
      </Dialog.Description>

      <div className="flex flex-col gap-4">
        <Dialog.Close asChild>
          <ViewOnExplorer
            txHash={txHash}
            onClick={() => {
              resetModal()
              closeModal()
            }}
            showIcon={!interactWithNFTLink}
          />
        </Dialog.Close>
        {interactWithNFTLink ? (
          <Button variant="LIGHT" external href={interactWithNFTLink.url}>
            {interactWithNFTLink.label}
          </Button>
        ) : null}
      </div>

      <div>
        <h3 className="font-sans text-[16px] text-ocs-black">Share on </h3>
        <Share />
        {mintType === MintType.ThirdWeb && (
          <p className="text-sm font-mono text-foreground-muted mt-6 flex items-center">
            Mint contract powered by <ThirdWebPill className="inline ml-2" />
          </p>
        )}
      </div>
    </>
  )
}

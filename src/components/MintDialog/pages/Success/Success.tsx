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

interface SuccessProps {
  resetModal: () => void
  txHash: string
  closeModal: () => void
}

const CB_NFT_URL = 'https://nft.coinbase.com'

export const Success: FC<SuccessProps> = ({
  resetModal,
  txHash,
  closeModal,
}) => {
  const { dropName, creatorAddress, address, cbNftButtonText } =
    useMintDialogContext()
  const secondaryButtonText = cbNftButtonText || 'See your NFT'
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
            showIcon={false}
          />
        </Dialog.Close>
        <Button variant="LIGHT" external href={`${CB_NFT_URL}/${address}`}>
          {secondaryButtonText}
        </Button>
      </div>

      <div>
        <h3 className="font-sans text-[16px] text-[#151515]">Share on </h3>
        <Share />
      </div>
    </>
  )
}

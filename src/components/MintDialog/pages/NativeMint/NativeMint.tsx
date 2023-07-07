import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { NativeMintButton } from '../../elements/NativeMintButton'
import { ModalPage } from '../../types'
import { Separator } from '@/components/Separator'
import { Countdown } from '@/components/Countdown'
import { shortenAddress } from '@/utils/address'

interface NativeMintProps {
  partnerIcon: string
  partnerName: string
  dropImage: string
  dropName: string
  creatorAddress: string
  dropEndTime: number
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  address: string
  quantity: number
  totalPrice: string
}

export const NativeMint: FC<NativeMintProps> = ({
  partnerIcon,
  partnerName,
  dropImage,
  dropName,
  creatorAddress,
  dropEndTime,
  page,
  setPage,
  address,
  quantity,
  totalPrice,
}) => {
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
      <Dialog.Title className="text-[32px]">{dropName}</Dialog.Title>
      <Dialog.Description className="flex flex-col w-full gap-4">
        <span className="max-w-full overflow-hidden rounded-[58px] bg-ocs-pink p-1 pr-2 w-max flex gap-2 items-center text-sm leading-none mb-4">
          <div className="h-4 w-4 aspect-square rounded-[58px] bg-ocs-black" />
          {shortenAddress(creatorAddress)}
        </span>
        <Separator className="bg-ocs-red" />
        <Countdown completedText="Drop Ended" date={dropEndTime} />
      </Dialog.Description>
      <NativeMintButton
        page={page}
        setPage={setPage}
        address={address}
        quantity={quantity}
        totalPrice={totalPrice}
      />
    </div>
  )
}

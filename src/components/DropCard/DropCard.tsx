import { FC } from 'react'
import { Card } from '../Card'
import Image from 'next/image'
import { Button } from '../Button'
import { MintButton } from '../MintButton'
import { AddressPill } from '../AddressPill'
import { Address } from 'wagmi'

type DropCardProps = {
  address: Address
  crossMintClientId: string
  partnerIcon: string
  partner: string
  image: string
  externalLink?: string
  name: string
  endDate: number
  price: string
  creator: string
}

export const DropCard: FC<DropCardProps> = ({
  address,
  crossMintClientId,
  partnerIcon,
  image,
  partner,
  name,
  externalLink,
  price,
  creator,
}) => {
  return (
    <Card className="relative flex flex-col gap-4 font-text w-[290px] md:w-[320px] flex-auto border border-[#EFEFEF]">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={`${name} from ${partner}`}
          fill
          className="object-cover rounded-t-2xl md:rounded-t-3xl"
        />
      </div>
      <div className="p-4 flex flex-col flex-auto">
        {externalLink ? (
          <a
            href={externalLink}
            className="text-[32px] after:absolute after:inset-0 flex-auto"
          >
            {name}
          </a>
        ) : (
          <span className="text-[32px]">{name}</span>
        )}
        <div className="mt-4 mb-8">
          <AddressPill address={creator as Address} className="bg-ocs-turquoise" />
        </div>
        {externalLink ? (
          <Button tabIndex={-1} className="!flex !justify-center mt-auto">
            Mint on {partner}
          </Button>
        ) : (
          <MintButton
            price={price}
            address={address}
            crossMintClientId={crossMintClientId}
            partnerIcon={partnerIcon}
            partnerName={partner}
            dropImage={image}
            dropName={name}
            creatorAddress={creator}
          />
        )}
      </div>
    </Card>
  )
}

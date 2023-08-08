import { FC } from 'react'
import { Card } from '../Card'
import Image from 'next/image'
import { Button } from '../Button'
import { MintButton } from '../MintButton'
import { AddressPill } from '../AddressPill'
import { Address } from 'wagmi'
import { useValidateExternalLink } from '../ExternalDrop/useValidateExternalLink'
import { ExternalDrop } from '../ExternalDrop/ExternalDrop'

type DropCardProps = {
  address: Address
  crossMintClientId: string
  partnerIcon: string
  partner: string
  image: string
  externalLink?: string
  name: string
  startDate: number
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
  startDate,
  endDate,
}) => {
  const {
    isExternalLink,
    status: externalLinkStatus,
    externalLinkHref,
  } = useValidateExternalLink({
    endDate,
    externalLink,
    startDate,
    partner,
    contractAddress: address,
  })

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
      <div className="pt-2 p-4 flex flex-col flex-auto">
        {isExternalLink && externalLinkStatus === 'valid' ? (
          <a
            href={externalLinkHref}
            className="text-[24px] after:absolute after:inset-0 flex-auto"
            target="_blank"
          >
            {name}
          </a>
        ) : (
          <span className="text-[24px]">{name}</span>
        )}
        <div className="mt-4 mb-8">
          <AddressPill
            address={creator as Address}
            className="bg-ocs-turquoise"
          />
        </div>
        {isExternalLink ? (
          <ExternalDrop
            endDate={endDate}
            externalLink={externalLink}
            startDate={startDate}
            partner={partner}
            contractAddress={address}
            className="!flex !justify-center mt-auto"
          />
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
            endDate={endDate}
          />
        )}
      </div>
    </Card>
  )
}

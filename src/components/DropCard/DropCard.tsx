import { FC } from 'react'
import { Card } from '../Card'
import { MintButton } from '../MintButton'
import { AddressPill } from '../AddressPill'
import { Address } from 'wagmi'
import { useValidateExternalLink } from '../ExternalDrop/useValidateExternalLink'
import { ExternalDrop } from '../ExternalDrop/ExternalDrop'
import { MintType } from '@/components/MintDialog/types'
import { NFTAsset } from '@/components/NFTAsset'

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
  mintType?: MintType
  openSeaLink?: string
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
  mintType,
  openSeaLink,
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
        <NFTAsset
          source={image}
          name={`${name} from ${partner}`}
          className="object-cover rounded-t-2xl md:rounded-t-3xl"
        />
      </div>
      <div className="pt-2 p-4 flex flex-col flex-auto justify-between">
        {isExternalLink && externalLinkStatus === 'valid' ? (
          <a
            href={externalLinkHref}
            className="desktop-h3 after:absolute after:inset-0 flex-auto line-clamp-2"
            target="_blank"
          >
            {name}
          </a>
        ) : (
          <span className="desktop-h3 line-clamp-2">{name}</span>
        )}
        <div>
          <div className="mt-4 mb-8">
            <AddressPill address={creator as Address} />
          </div>
          {isExternalLink ? (
            <ExternalDrop
              endDate={endDate}
              externalLink={externalLink}
              startDate={startDate}
              partner={partner}
              contractAddress={address}
              openSeaLink={openSeaLink}
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
              mintType={
                mintType ||
                (externalLink ? MintType.External : MintType.ThirdWeb)
              }
              openSeaLink={openSeaLink}
            />
          )}
        </div>
      </div>
    </Card>
  )
}

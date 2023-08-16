import { FC } from 'react'
import { Card } from '../Card'
import { MintButton } from '../MintButton'
import { AddressPill } from '../AddressPill'
import { Address } from 'wagmi'
import { useValidateExternalLink } from '../ExternalDrop/useValidateExternalLink'
import { ExternalDrop } from '../ExternalDrop/ExternalDrop'
import { MintType, siteDataSuffix } from '@/components/MintDialog/types'
import { NFTAsset } from '@/components/NFTAsset'
import { Hex } from 'viem'
import { DropDataSuffix } from '@/config/partners/types'

type DropCardProps = {
  address: Address
  crossMintClientId: string
  partnerIcon: string
  partner: string
  image: string
  externalLink?: string
  name: string
  description?: string
  startDate: number
  endDate: number
  price: string
  creator: string
  mintType?: MintType
  openSeaLink?: string
  interactWithNFTLink?: string
  dataSuffix: Hex
  dropDataSuffix?: DropDataSuffix
  buttonText?: string
  thumbnail?: string
}

export const DropCard: FC<DropCardProps> = ({
  address,
  crossMintClientId,
  partnerIcon,
  image,
  partner,
  name,
  description,
  externalLink,
  price,
  creator,
  startDate,
  endDate,
  mintType,
  openSeaLink,
  dataSuffix,
  dropDataSuffix,
  interactWithNFTLink,
  buttonText,
  thumbnail,
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
      <div className="relative w-full aspect-[4/3] bg-black flex items-center rounded-t-2xl md:rounded-t-3xl">
        <NFTAsset
          thumbnail={thumbnail}
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
          <div className="my-4">
            <AddressPill address={creator as Address} />
          </div>
          {description && (
            <span className="text-sm line-clamp-3 mb-8 text-ocs-gray font-sans">
              {description}
            </span>
          )}
          {isExternalLink ? (
            <ExternalDrop
              endDate={endDate}
              externalLink={externalLink}
              startDate={startDate}
              partner={partner}
              contractAddress={address}
              openSeaLink={openSeaLink}
              className="!flex !justify-center mt-auto"
              buttonText={buttonText}
            />
          ) : (
            <MintButton
              price={price}
              address={address}
              crossMintClientId={crossMintClientId}
              partnerIcon={partnerIcon}
              partnerName={partner}
              dropImage={image}
              dropThumbnail={thumbnail}
              dropName={name}
              creatorAddress={creator}
              endDate={endDate}
              mintType={
                mintType ||
                (externalLink ? MintType.External : MintType.ThirdWeb)
              }
              openSeaLink={openSeaLink}
              interactWithNFTLink={interactWithNFTLink}
              dataSuffix={siteDataSuffix}
              dropDataSuffix={dropDataSuffix}
            />
          )}
        </div>
      </div>
    </Card>
  )
}

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
import { Drop, DropDataSuffix } from '@/config/partners/types'
import clsx from 'clsx'
import { FloorAsk } from '@reservoir0x/reservoir-kit-ui'

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
  interactWithNFTLink?: Drop['interactWithNFTLink']
  dataSuffix: Hex
  dropDataSuffix?: DropDataSuffix
  buttonText?: string
  floorAsk?: FloorAsk
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
  floorAsk,
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

  const className = 'desktop-h3 line-clamp-2 px-4 flex-auto'

  return (
    <Card
      li
      className="relative flex flex-col max-h-[580px] gap-4 font-text w-[290px] md:w-[320px] overflow-hidden"
    >
      <div className="relative w-full aspect-[4/3] bg-black flex items-center rounded-t-2xl md:rounded-t-3xl">
        <NFTAsset
          source={image}
          name={`${name} from ${partner}`}
          className="object-cover rounded-t-2xl md:rounded-t-3xl aspect-[4/3]"
        />
      </div>

      {isExternalLink && externalLinkStatus === 'valid' ? (
        <a
          href={externalLinkHref}
          className={clsx('after:absolute after:inset-0', className)}
          target="_blank"
        >
          {name}
        </a>
      ) : (
        <span className={className}>{name}</span>
      )}

      <AddressPill address={creator as Address} className="h-max mx-4" />

      {description ? (
        <span className="desktop-body line-clamp-3 text-ocs-gray font-sans px-4 h-[66px]">
          {description}
        </span>
      ) : null}

      <div className="pt-8 px-4 pb-4 mt-auto">
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
            floorAsk={floorAsk}
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
              mintType || (externalLink ? MintType.External : MintType.ThirdWeb)
            }
            openSeaLink={openSeaLink}
            interactWithNFTLink={interactWithNFTLink}
            dataSuffix={siteDataSuffix}
            dropDataSuffix={dropDataSuffix}
            floorAsk={floorAsk}
          />
        )}
      </div>
    </Card>
  )
}

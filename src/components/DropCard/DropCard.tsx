import { FC } from 'react'
import { Card } from '../Card'
import Image from 'next/image'
import { Button } from '../Button'
import { MintButton } from '../MintButton'
import { DropType } from '@/config/partners/types'
import { RightArrow } from '../icons/RightArrow'

type DropCardProps = {
  address: string
  crossMintClientId: string
  type: DropType
  partnerIcon: string
  partner: string
  image: string
  externalLink?: string
  name: string
  endDate: number
  price: string
}

export const DropCard: FC<DropCardProps> = ({
  address,
  crossMintClientId,
  partnerIcon,
  type,
  image,
  partner,
  name,
  externalLink,
  endDate,
  price,
}) => {
  const truncatedAddress = address.slice(0, 6) + '...' + address.slice(-4)

  return (
    <Card className="relative flex flex-col w-full gap-4 font-text">
      <Card className="absolute aspect-square p-2 top-9 right-9 z-20 bg-white">
        <div className="relative z-20 h-8 w-8">
          <Image src={partnerIcon} alt={`${partner} Icon`} fill />
        </div>
      </Card>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={`${name} from ${partner}`}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 flex flex-col">
        {externalLink ? (
          <a
            href={externalLink}
            className="text-[32px] after:absolute after:inset-0"
          >
            {name}
          </a>
        ) : (
          <span className="text-[32px]">{name}</span>
        )}
        <div className="flex flex-row gap-3 items-center bg-[#54DCE7] p-1 w-fit rounded-full mt-4 mb-8">
          <div className="bg-black rounded-full h-4 w-4"></div>
          <div className="font-mono">{truncatedAddress}</div>
        </div>
        {externalLink ? (
          <Button tabIndex={-1} className="!flex !justify-between">
            Mint ({price} ETH)
            <RightArrow />
          </Button>
        ) : (
          <MintButton
            price={price}
            address={address}
            crossMintClientId={crossMintClientId}
            type={type}
          />
        )}
      </div>
    </Card>
  )
}

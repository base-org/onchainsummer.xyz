import { FC } from 'react'
import { Card } from '../Card'
import Image from 'next/image'
import clsx from 'clsx'
import { Countdown } from '../Countdown'
import { Button } from '../Button'
import { MintButton } from '../MintButton'
import { DropType } from '@/config/partners/types'

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
  return (
    <Card className="p-5 relative flex flex-col w-full gap-4 font-text">
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
          style={{ objectFit: 'cover' }}
        />
      </div>
      {externalLink ? (
        <a
          href={externalLink}
          className="font-medium text-lg after:absolute after:inset-0"
        >
          {name}
        </a>
      ) : (
        <span className="font-medium text-lg">{name}</span>
      )}
      <div className="flex gap-10 font-text">
        <div>
          <h4 className="text-xs text-neutral-900/50">Remaining Time</h4>
          <div className="flex gap-2 items-center font-medium">
            <div
              className={clsx('h-2 w-2 rounded-full', {
                'bg-timer-active': endDate > new Date().getTime(),
                'bg-red': endDate <= new Date().getTime(),
              })}
            />
            <div>
              <Countdown date={endDate} completedText={'Drop Ended'} />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs text-neutral-900/50">Price</h4>
          <div className="font-medium">{price} ETH</div>
        </div>
      </div>
      {externalLink ? (
        <Button tabIndex={-1}>Mint ({price} ETH)</Button>
      ) : (
        <MintButton
          price={price}
          address={address}
          crossMintClientId={crossMintClientId}
          type={type}
        />
      )}
    </Card>
  )
}

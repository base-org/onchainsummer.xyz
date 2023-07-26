import { Drop, Partner } from '@/config/partners/types'
import Image from 'next/image'
import { FC } from 'react'
import clsx from 'clsx'
import { isBefore, isAfter } from 'date-fns'

interface PartnerHeroProps {
  partner: Partner
  headline: Drop
  staticHeadline: boolean
}

import { Separator } from '../Separator'
import { MintButton } from '../MintButton/MintButton'
import { Button } from '../Button'
import { AddressPill } from '../AddressPill'
import { Countdown } from '@/components/Countdown'

export const PartnerHero: FC<PartnerHeroProps> = ({
  partner: { name, icon, description },
  headline,
}) => {
  const isBeforeStartDate = isBefore(new Date(), new Date(headline.startDate))
  const isAfterEndDate = isAfter(new Date(), new Date(headline.endDate))

  const separatorBackgroundColor = isBeforeStartDate
    ? '!bg-black'
    : isAfterEndDate
    ? '!bg-[#858585]'
    : '!bg-ocs-blue'

  return (
    <section className="grid p-5 md:py-6 md:px-10 rounded-3xl md:rounded-[32px] bg-white shadow-large w-full md:grid-cols-[5fr,7fr] gap-5 md:gap-10">
      <div className="relative w-full aspect-[287/212] mb-1 lg:mb-0 order-1 md:order-2">
        <Image
          src={headline.image}
          alt={headline.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col w-full gap-4 h-full overflow-scroll order-2 md:order-1 md:gap-8 hide-scrollbar">
        <div className="flex gap-2 md:mt-6">
          <div className="relative h-6 w-6">
            <Image src={icon} alt={`${name} Icon`} fill />
          </div>
          <span className="font-medium">{name}</span>
        </div>
        <h1 className="text-[32px] leading-none font-display md:text-[46px]">
          {headline.name}
        </h1>
        <AddressPill address={headline.creator} />
        <div className="flex flex-col w-full gap-4 mt-auto">
          <p className="md:hidden">{description}</p>
          <Separator className={clsx(separatorBackgroundColor)} />
          <Countdown startDate={headline.startDate} date={headline.endDate} />
          {headline.externalLink ? (
            <Button href={headline.externalLink}>
              Mint {headline.price} ETH
            </Button>
          ) : (
            <MintButton
              address={headline.address}
              crossMintClientId={headline.crossMintClientId}
              price={headline.price}
              partnerIcon={icon}
              partnerName={name}
              dropImage={headline.image}
              dropName={headline.name}
              creatorAddress={headline.creator}
            />
          )}
        </div>
      </div>
    </section>
  )
}

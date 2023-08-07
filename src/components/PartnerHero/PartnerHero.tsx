'use client'

import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { Drop, Partner } from '@/config/partners/types'
import Image from 'next/image'
import { FC } from 'react'
import clsx from 'clsx'
import { Separator } from '../Separator'
import { MintButton } from '../MintButton/MintButton'
import { AddressPill } from '../AddressPill'
import { Countdown } from '@/components/Countdown'
import { Address } from 'viem'
import { getDateRangeValidation } from '@/utils/getDateRangeValidation'
import { ExternalDrop } from '../ExternalDrop/ExternalDrop'
import { MintType } from '@/components/MintDialog/types'

interface PartnerHeroProps {
  partner: Partner
  headline: Drop
  staticHeadline: boolean
  teaser?: boolean
  customHeader?: String
}

export const PartnerHero: FC<PartnerHeroProps> = ({
  partner: { name, icon, description },
  headline,
  teaser,
  customHeader,
}) => {
  const { isAfterEndDate, isBeforeStartDate } = getDateRangeValidation({
    startDate: headline.startDate,
    endDate: headline.endDate,
  })

  const separatorBackgroundColor = isBeforeStartDate
    ? '!bg-black'
    : isAfterEndDate
    ? '!bg-[#858585]'
    : '!bg-ocs-gray'

  return (
    <section className="grid p-5 md:p-6 rounded-3xl md:rounded-[32px] bg-white shadow-large w-full md:grid-cols-[5fr,7fr] gap-5 md:gap-10">
      <div className="relative w-full aspect-[16/16] mb-1 lg:mb-0 order-1 md:order-2">
        <Image
          src={headline.image}
          alt={headline.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col w-full gap-4 h-full overflow-scroll order-2 md:order-1 md:gap-4 hide-scrollbar">
        {name !== 'Base' && (
          <div className="flex gap-2 md:mt-6">
            <div className="relative h-6 w-6">
              <Image src={icon} alt={`${name} Icon`} fill />
            </div>
            <span className="font-medium">{name}</span>
          </div>
        )}
        <h1 className="text-[32px] leading-none font-display md:text-[34px]">
          {customHeader ? customHeader : headline.name}
        </h1>
        <div className="flex items-center mb-2">
          <span className="mr-2 text-slate-500">by</span>
          <AddressPill
            address={headline.creator as Address}
            className={clsx(teaser && '!bg-ocs-gray !text-white')}
          />
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ node, ...props }) => (
              <p {...props} className="font-sans text-[#444]" />
            ),
          }}
        >
          {description}
        </ReactMarkdown>
        <div className="flex flex-col w-full gap-4 mt-auto">
          <Separator className={clsx(separatorBackgroundColor)} />
          <Countdown startDate={headline.startDate} date={headline.endDate} />
          <>
            {headline.externalLink ? (
              <ExternalDrop
                {...headline}
                partner={name}
                contractAddress={headline.address}
              />
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
                endDate={headline.endDate}
                mintType={headline.mintType || headline.externalLink ? MintType.External : MintType.ThirdWeb}
              />
            )}
          </>
        </div>
      </div>
    </section>
  )
}

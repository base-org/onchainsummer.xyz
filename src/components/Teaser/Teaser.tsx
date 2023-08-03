'use client'

import { FC } from 'react'
import clsx from 'clsx'
import coinbaseConfig from '../../config/partners/coinbase'
import { PartnerHero } from '../PartnerHero'
import { EmailSubscriptionDialog } from '../EmailSubscriptionDialog'
import { Button } from '@/components/Button'
import { CBSubscribeDialog } from '@/components/CBSubscribeDialog'
import { PartnerCarousel } from '../PartnerCarousel/PartnerCarousel'

interface TeaserProps {
  mirrorSubscribeUrl?: string | undefined
  mirrorProjectAddress?: string | undefined
}

export const Teaser: FC<TeaserProps> = ({
  mirrorProjectAddress,
  mirrorSubscribeUrl,
}) => {
  const partner = coinbaseConfig
  const featuredDrop = partner.drops[0]
  const showPartnerHero = window.location.pathname !== '/0308'

  return (
    <div
      className={clsx(
        showPartnerHero
          ? 'bg-teaser-gradient'
          : 'bg-teaser-gradient-ios h-screen'
      )}
    >
      <div
        className={clsx(
          'flex flex-col justify-center items-center z-0 mx-4 sm:max-w-[1286px] lg:mx-auto',
          !showPartnerHero && 'h-1/2'
        )}
      >
        <div className="h-[54px] w-[54px] rounded-full bg-[#FCD22D]"></div>
        <h1 className="mt-10 mb-6 text-7xl sm:text-[80px] font-display">
          08.09.23
        </h1>
        <div className="flex justify-center gap-2 md:mb-[56px] mb-8 flex-wrap">
          <EmailSubscriptionDialog
            mirrorProjectAddress={mirrorProjectAddress}
            mirrorSubscribeUrl={mirrorSubscribeUrl}
          />
          <CBSubscribeDialog>
            <Button className="flex-1 !py-[11px]" variant="LIGHT">
              SUBSCRIBE WITH WALLET
            </Button>
          </CBSubscribeDialog>
        </div>
        {showPartnerHero && (
          <div className="mb-[34px]">
            <PartnerHero
              partner={partner}
              headline={featuredDrop}
              staticHeadline={false}
              teaser={true}
            />
          </div>
        )}
      </div>
      <div className="w-full bg-[#0052FF] h-16 md:h-48 absolute">
        <PartnerCarousel />
      </div>
    </div>
  )
}

'use client'

import { FC } from 'react'
import clsx from 'clsx'
import baseConfig from '../../config/partners/base'
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
  const partner = baseConfig
  const featuredDrop = partner.drops[0]
  const showPartnerHero = window.location.pathname !== '/0803'

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
          'flex flex-col justify-center items-center z-0 mx-4 sm:max-w-[900px] lg:mx-auto mt-8 sm:mt-0',
          !showPartnerHero && 'h-1/2'
        )}
      >
        <div className="mb-8 h-[54px] w-[54px] rounded-full bg-ocs-yellow"></div>
        <h1 className="text-4xl sm:text-[64px] font-display text-center uppercase font-bold">
          Onchain Summer 08.09.23
        </h1>
        <h3 className="mt-7 mb-8 text-2xl font-display text-center text-ocs-dark-gray">
          Bridge and mint today to experience the best of onchain this summer.
        </h3>
        <div className="flex justify-center gap-2 md:mb-14 mb-8 flex-wrap">
          <EmailSubscriptionDialog
            mirrorProjectAddress={mirrorProjectAddress}
            mirrorSubscribeUrl={mirrorSubscribeUrl}
          />
          <CBSubscribeDialog>
            <Button className="flex-1 !py-[8px] !text-center" variant="LIGHT">
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
              customHeader={'Bridge and mint today'}
            />
          </div>
        )}
      </div>
      <div className="w-full bg-ocs-blue h-16 md:h-36 absolute">
        <PartnerCarousel />
      </div>
    </div>
  )
}

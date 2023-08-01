'use client'

import { FC } from 'react'
import openSeaConfig from '../../config/partners/open-sea'
import { PartnerHero } from '../PartnerHero'
import { EmailSubscriptionDialog } from '../EmailSubscriptionDialog'
import { Button } from '@/components/Button'
import { CBSubscribeDialog } from '@/components/CBSubscribeDialog'

interface TeaserProps {
  mirrorSubscribeUrl?: string | undefined
  mirrorProjectAddress?: string | undefined
}

export const Teaser: FC<TeaserProps> = ({
  mirrorProjectAddress,
  mirrorSubscribeUrl,
}) => {
  const partner = openSeaConfig
  const featuredDrop = partner.drops[0]

  return (
    <div className="flex flex-col justify-center items-center z-0 mx-4 sm:max-w-[1286px] lg:mx-auto">
      <div className="h-[54px] w-[54px] rounded-full bg-[#FCD22D] mt-20"></div>
      <h1 className="mt-10 mb-6 text-7xl sm:text-[120px] font-display">
        08.09.23
      </h1>
      <div className="flex justify-center gap-2 md:mb-[72.5px] mb-8 flex-wrap">
        <CBSubscribeDialog>
          <Button className="flex-1" variant="LIGHT">
            SUBSCRIBE WITH WALLET
          </Button>
        </CBSubscribeDialog>
        <EmailSubscriptionDialog
          mirrorProjectAddress={mirrorProjectAddress}
          mirrorSubscribeUrl={mirrorSubscribeUrl}
        />
      </div>
      <div className="mb-20">
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={false}
        />
      </div>
    </div>
  )
}

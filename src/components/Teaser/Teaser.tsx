'use client'

import { FC } from 'react'
import openSeaConfig from '../../config/partners/open-sea'
import { PartnerHero } from '../PartnerHero'
import { EmailSubscriptionDialog } from '../EmailSubscriptionDialog'

interface TeaserProps {
  mirrorSubscribeUrl: string | undefined
  mirrorProjectAddress: string | undefined
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
      <h1 className="my-10 text-7xl sm:text-[120px] font-display">08.09.23</h1>
      <div className="mb-20">
        <div className="flex justify-center mb-[72px] gap-4">
          <EmailSubscriptionDialog
            mirrorProjectAddress={mirrorProjectAddress}
            mirrorSubscribeUrl={mirrorSubscribeUrl}
          />
        </div>
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={false}
        />
      </div>
    </div>
  )
}

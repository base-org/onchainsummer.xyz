import { FC } from 'react'
import openSeaConfig from '../../config/partners/open-sea'
import { PartnerHero } from '../PartnerHero'

interface TeaserProps {}

export const Teaser: FC<TeaserProps> = ({}) => {
  const partner = openSeaConfig
  const featuredDrop = partner.drops[0]

  return (
    <div className="flex flex-col justify-center items-center z-0 mx-4 sm:max-w-[1286px] lg:mx-auto">
      <div className="h-[90px] w-[90px] rounded-full bg-[#FCD22D] mt-20"></div>
      <h1 className="my-10 text-7xl sm:text-[120px] font-display">08.09.23</h1>
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

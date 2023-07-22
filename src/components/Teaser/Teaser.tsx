import { FC } from 'react'
import openSeaConfig from '../../config/partners/open-sea'
import { PartnerHero } from '../PartnerHero'

interface TeaserProps {}

export const Teaser: FC<TeaserProps> = ({}) => {
  const partner = openSeaConfig
  const featuredDrop = partner.drops[0]

  return (
    <div className="flex flex-col justify-center items-center z-0 max-w-[1286px] mx-auto">
      <div className="h-[90px] w-[90px] rounded-full bg-[#FCD22D] mt-20"></div>
      <div>
        <h1 className="text-[120px] font-display">08.09.23</h1>
      </div>
      <div>
        <iframe
          title="mirror"
          height="40"
          src="https://base.mirror.xyz/subscribe/embed?transparent=true&mode=light"
          width="600"
          className="max-w-full"
        />
      </div>
      <div className="my-20">
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={false}
        />
      </div>
    </div>
  )
}

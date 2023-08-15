import { FC, useMemo } from 'react'
import Link from 'next/link'
import { Address } from 'wagmi'

import { TwitterIcon } from '@/components/icons/Twitter'
import { useMintDialogContext } from '@/components/MintDialog/Context/useMintDialogContext'
import { website } from '@/config/website'
import { WarpCast } from '@/components/icons/Warpcast'
import { Lens } from '@/components/icons/Lens'
import { useEns } from '@/utils/useEns'
import { schedule } from "@/config/schedule";

const twitterURL: string = 'https://twitter.com/intent/tweet'
const warpCastURL: string = 'https://warpcast.com'
const lensURL: string = 'https://lenster.xyz'

type ShareComponentProps = {}
export const Share: FC<ShareComponentProps> = () => {
  const { info: {dropName, partnerName, creatorAddress } } = useMintDialogContext()
  const { name } = useEns(creatorAddress as Address)
  const partnerSlug = useMemo(() => {
    return Object.values(schedule).find((partner) => partner.name === partnerName)?.slug
  }, [partnerName])

  const href = `${website.url}/${partnerSlug ?? ''}`
  const shareText = {
    twitter: `I just minted ${dropName} by ${name || creatorAddress}, celebrating Onchain Summer with ${partnerName} on @BuildOnBase.`,
    lens: `I just minted ${dropName} by ${name || creatorAddress}, celebrating Onchain Summer with ${partnerName} on @base.`,
    warpCast: `I just minted ${dropName} by ${name || creatorAddress}, celebrating Onchain Summer with ${partnerName} on @base.`,
  }

  const tweetUrl = `${twitterURL}?url=${href}&text=${shareText['twitter']}`
  const warpCastShareUrl = `${warpCastURL}/~/compose?text=${shareText['warpCast']}&embeds[]=${href}`
  const lensShareUrl = `${lensURL}?text=${shareText['lens']}&url=${href}`

  return (
    <div className="flex flex-row items-center m-[10px] gap-4">
      <div className="flex flex-col items-center space-x-2">
        <Link
          href={tweetUrl}
          target="_blank"
          className="flex flex-col items-center"
        >
          <TwitterIcon />
          <p className="text-sm font-mono uppercase text-[#858585] mt-[6px]">
            X
          </p>
        </Link>
      </div>

      <div className="flex flex-col items-center space-x-2">
        <Link
          href={warpCastShareUrl}
          target="_blank"
          className="flex flex-col items-center"
        >
          <WarpCast />
          <p className="text-sm font-mono uppercase text-[#858585] mt-[6px]">
            Warpcast
          </p>
        </Link>
      </div>

      <div className="flex flex-col items-center space-x-2">
        <Link
          href={lensShareUrl}
          target="_blank"
          className="flex flex-col items-center"
        >
          <Lens />
          <p className="text-sm font-mono uppercase text-[#858585] mt-[6px]">
            Lens
          </p>
        </Link>
      </div>
    </div>
  )
}

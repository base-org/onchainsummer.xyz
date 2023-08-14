import { FC } from 'react'
import Link from 'next/link'

import { TwitterIcon } from '@/components/icons/Twitter'
import { useMintDialogContext } from '@/components/MintDialog/Context/useMintDialogContext'
import { WarpCast } from '@/components/icons/Warpcast'
import { Lens } from '@/components/icons/Lens'

const twitterURL: string = 'https://twitter.com/intent/tweet'
const warpCastURL: string = 'https://warpcast.com'
const lensURL: string = 'https://lenster.xyz'

type ShareComponentProps = {}
export const Share: FC<ShareComponentProps> = () => {
  const { info: {dropName} } = useMintDialogContext()
  const {
    location: { href },
  } = window
  const shareText = {
    twitter: `I just minted ${dropName}, celebrating the start of @BuildOnBase bringing billions of people onchain.%0a%0aIt’s Onchain Summer.`,
    lens: `I just minted ${dropName}, celebrating the start of @BuildOnBase bringing billions of people onchain.%0a%0aIt’s Onchain Summer.`,
    warpCast: `I just minted ${dropName}, celebrating the start of @base bringing billions of people onchain.%0a%0aIt’s Onchain Summer.`,
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

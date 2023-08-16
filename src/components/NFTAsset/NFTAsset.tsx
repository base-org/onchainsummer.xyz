'use client'

import { FC } from 'react'
import Image from 'next/image'
import Player from 'react-player'
import clsx from 'clsx'

interface NFTAssetProps {
  name: string
  source: string
  thumbnail?: string
  autoPlay?: boolean
  muted?: boolean
  className?: string
}

export const NFTAsset: FC<NFTAssetProps> = ({
  source,
  name,
  autoPlay,
  muted,
  thumbnail,
  ...props
}) => {
  const extension = source.split('.').pop()
  return extension && ['mov', 'mp4'].includes(extension) ? (
    <Player
      light={
        thumbnail ? (
          <Image fill src={thumbnail} alt={name} {...props} />
        ) : undefined
      }
      url={source}
      loop
      playsinline
      controls
      muted={!!muted}
      playing={!!autoPlay}
      autoPlay={!!autoPlay}
      width="100%"
      height="100%"
      {...props}
      className={clsx('z-10 relative', props.className)}
    />
  ) : (
    <Image fill src={source} alt={name} {...props} />
  )
}

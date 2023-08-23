'use client'

import clsx from 'clsx'
import { FC } from 'react'

interface NFTAssetProps {
  name: string
  source: string
  autoPlay?: boolean
  muted?: boolean
  className?: string
}

export const NFTAsset: FC<NFTAssetProps> = ({
  source,
  name,
  autoPlay,
  muted,
  className,
  ...props
}) => {
  const extension = source.split('.').pop()?.toLowerCase()
  const cn = clsx(
    'z-10 w-full h-full object-cover absolute top-0 left-0',
    className
  )
  return extension && ['mov', 'mp4', 'm4v'].includes(extension) ? (
    <video
      loop
      playsInline
      controls
      muted={!!muted}
      autoPlay={!!autoPlay}
      {...props}
      className={cn}
    >
      <source src={source} type="video/mp4" />
    </video>
  ) : (
    <img src={source} alt={name} {...props} className={cn} />
  )
}

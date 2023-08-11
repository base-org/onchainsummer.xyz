'use client'

import { FC } from 'react'
import Image from 'next/image'

interface NFTAssetProps {
  name: string
  source: string
  autoPlay?: boolean
  className?: string
}

export const NFTAsset: FC<NFTAssetProps> = ({ source, name, autoPlay, ...props }) => {
  const extension = source.split('.').pop();
  return extension && ['mov', 'mp4'].includes(extension) ? (
    <video loop playsInline muted autoPlay={!!autoPlay} {...props}>
      <source src={source} type="video/mp4" />
    </video>
  ) : (
    <Image fill src={source} alt={name} {...props} />
  )
}

'use client'

import { FC } from 'react'
import Image from 'next/image'

interface NFTAssetProps {
  name: string
  source: string
  className?: string
}

export const NFTAsset: FC<NFTAssetProps> = ({ source, name, ...props }) => {
  return source.indexOf('.mov') > -1 ? (
    <video autoPlay loop muted playsInline {...props}>
      <source src={source} type="video/mp4" />
    </video>
  ) : (
    <Image fill src={source} alt={name} {...props} />
  )
}

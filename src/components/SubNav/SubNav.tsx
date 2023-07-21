'use client'

import { FC } from 'react'
import { ChainChecker } from '../ChainChecker'
import clsx from 'clsx'

interface SubNavProps {
  subNavBgColor?: string
}

export const SubNav: FC<SubNavProps> = ({ subNavBgColor }) => {
  const rainbowBgGradient =
    'linear-gradient(to bottom, #FCD22D 0%, #FCD22D 11%, #735DFF 11%, #735DFF 26%, #54DCE7 26%, #54DCE7 45%, #FF7DCB 45%, #FF7DCB 68%, #0052FF 68%, #0052FF 100%)'
  const background = subNavBgColor
    ? { backgroundColor: subNavBgColor }
    : { backgroundImage: rainbowBgGradient }

  return (
    <div
      style={background}
      className="flex justify-center items-center min-h-[135px] z-0"
    >
      <ChainChecker />
    </div>
  )
}

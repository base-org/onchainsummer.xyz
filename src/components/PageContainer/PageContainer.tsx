'use client'

import { ReactNode } from 'react'
import { SubNav } from '../SubNav'
import { useIsMisMatched } from '@/utils/useIsMismatched'
import clsx from 'clsx'

interface PageContainerProps {
  children: ReactNode
  subNavBgColor?: string
  subNavOverlap?: boolean
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  subNavBgColor,
  subNavOverlap = false,
}) => {
  const isMismatched = useIsMisMatched()

  const mt = isMismatched ? 'mt-32 sm:mt-20 md:mt-12' : 'mt-6 md:mt-12'

  const subnavOverlap =
    subNavOverlap && !isMismatched
      ? '-mt-[calc(135px-36px)] md:-mt-[calc(135px-49px)]'
      : ''

  return (
    <>
      <SubNav subNavBgColor={subNavBgColor} />
      <main
        className={clsx('w-full max-w-[1248px] mx-auto', mt, subnavOverlap)}
      >
        {children}
      </main>
    </>
  )
}

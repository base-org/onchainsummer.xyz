'use client'

import clsx from 'clsx'
import { ReactNode } from 'react'
import { SubNav } from '../SubNav'
import { useIsMisMatched } from '@/utils/useIsMismatched'

interface PageContainerProps {
  children: ReactNode
  subNavBgColor?: string
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  subNavBgColor,
}) => {
  const isMismatched = useIsMisMatched();


  const heroMarginTop = isMismatched ? 'mt-28 md:mt-6' : '-mt-[100px] md:-mt-16'

  return (
    <>
      <SubNav subNavBgColor={subNavBgColor} />
      <main className={clsx('w-full max-w-[1248px] mx-auto', heroMarginTop)}>
        {children}
      </main>
    </>
  )
}

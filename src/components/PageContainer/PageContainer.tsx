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


  const heroMarginTop = isMismatched ? 'md:mt-6' : '-mt-[100px]'

  return (
    <>
      <SubNav subNavBgColor={subNavBgColor} />
      <main className={clsx('w-full max-w-[1248px] mx-auto mt-16', heroMarginTop)}>
        {children}
      </main>
    </>
  )
}

'use client'

import clsx from 'clsx'
import { useNetworkMismatch } from '@thirdweb-dev/react'
import { ReactNode } from 'react'
import { SubNav } from '../SubNav'

interface PageContainerProps {
  children: ReactNode
  subNavBgColor?: string
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  subNavBgColor,
}) => {
  const isMismatched = useNetworkMismatch()
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

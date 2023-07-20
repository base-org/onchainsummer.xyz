'use client'

import clsx from 'clsx'
import { useNetworkMismatch } from '@thirdweb-dev/react'
import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const isMismatched = useNetworkMismatch()
  const heroMarginTop = isMismatched ? 'mt-28 md:mt-6' : '-mt-[100px] md:-mt-16'

  return (
    <main className={clsx('w-full max-w-6xl mx-auto', heroMarginTop)}>
      {children}
    </main>
  )
}

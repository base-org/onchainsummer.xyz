'use client'
import { useState, useEffect, use } from 'react'
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
  const isMismatched = useIsMisMatched()
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    if (typeof window === undefined) return

    setIsHomePage(window.location.pathname === '/')
  }, [])

  const heroMarginTop = isMismatched ? 'md:mt-6' : '!-mt-[90px]'

  return (
    <>
      <SubNav subNavBgColor={subNavBgColor} />
      <main
        className={clsx(
          'w-full max-w-[1248px] mx-auto mt-16',
          isHomePage && heroMarginTop
        )}
      >
        {children}
      </main>
    </>
  )
}

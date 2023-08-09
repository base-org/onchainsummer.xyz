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

  const mt = isMismatched
    ? 'mt-32 sm:mt-20 md:mt-12'
    : subNavOverlap
    ? '-mt-[calc(135px-36px)] md:-mt-[calc(135px-49px)]'
    : 'mt-6 md:mt-12'

  return (
    <>
      <SubNav subNavBgColor={subNavBgColor} />
      <div className={clsx('px-6 md:px-20', mt)}>
        <main className="w-full max-w-7xl mx-auto">{children}</main>
      </div>
    </>
  )
}

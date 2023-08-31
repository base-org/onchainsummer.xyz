'use client'
import { ReactNode } from 'react'
import { SubNav } from '../SubNav'
import { useIsMisMatched } from '@/utils/useIsMismatched'
import clsx from 'clsx'

interface PageContainerProps {
  children: ReactNode
  subNavBgColor?: string
  subNavOverlap?: boolean
  postFestival?: boolean
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  subNavBgColor,
  subNavOverlap = false,
  postFestival = false,
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
      {postFestival ? (
        <div className="flex flex-col gap-6 bg-ocs-blue items-center justify-center pb-24 pt-14 w-full">
          <div className="w-14 h-14 bg-ocs-yellow rounded-full" />
          <h1 className="text-white text-center font-display text-[64px] font-bold leading-[120%] uppercase">
            Summer Never Ends
          </h1>
        </div>
      ) : null}
      <div className={clsx('px-6 md:px-20', mt)}>
        <main className="w-full max-w-7xl mx-auto">{children}</main>
      </div>
    </>
  )
}

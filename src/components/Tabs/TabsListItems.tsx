'use client'

import { FC } from 'react'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

type TabsListItemsProps = {
  upcomingLength: number
  pastLength: number
}

export const TabsListItems: FC<TabsListItemsProps> = ({
  upcomingLength,
  pastLength,
}) => {
  return (
    <>
      <Tabs.Trigger
        className="text-neutral-900 md:min-w-[200px] border-2 border-solid border-[#858585] data-[state=active]:border-none data-[state=active]:bg-[#FCD22D] px-3 pt-10 pb-2 md:px-4 rounded-2xl relative"
        value="tab1"
      >
        <div className="flex items-center desktop-h3 md:desktop-h2">
          upcoming{' '}
          <div className="h-[24px] w-[24px] py-[1px] text-[12px] bg-neutral-950 text-white rounded-full flex items-center justify-center mx-2 relative bottom-3">
            <span className="text-center text-lg">{upcomingLength}</span>
          </div>
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-neutral-900 md:min-w-[200px] border-2 border-solid border-[#858585] data-[state=active]:border-none data-[state=active]:bg-[#FCD22D] px-3 pt-10 pb-2 md:px-4 rounded-2xl relative"
        value="tab2"
      >
        <div className="flex items-center desktop-h3 md:desktop-h2">
          active{' '}
          <div className="h-[24px] w-[24px] py-[1px] text-[12px] bg-neutral-950 text-white rounded-full flex items-center justify-center mx-2 relative bottom-3">
            <span className="text-center text-lg">{pastLength}</span>
          </div>
        </div>
      </Tabs.Trigger>
    </>
  )
}

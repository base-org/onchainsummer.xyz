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
        className="text-neutral-900 data-[state=active]:bg-[#FCD22D] px-2 pt-6 pb-4 md:px-4 rounded-2xl relative"
        value="tab1"
      >
        <div className="flex items-center text-2xl md:text-[32px] font-light ">
          upcoming{' '}
          <div className="px-[4px] py-[1px] text-[12px] bg-neutral-950 text-white rounded-xl flex items-center justify-center mx-2 relative bottom-3">
            <span className="text-center text-lg">{upcomingLength}</span>
          </div>
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-neutral-900 data-[state=active]:bg-[#FCD22D] px-2 pt-6 pb-4 md:px-4 rounded-2xl relative"
        value="tab2"
      >
        <div className="flex items-center text-2xl md:text-[32px] font-light">
          past{' '}
          <div className="px-[4px] py-[1px] text-[12px] bg-neutral-950 text-white rounded-xl flex items-center justify-center mx-2 relative bottom-3">
            <span className="text-center text-lg">{pastLength}</span>
          </div>
        </div>
      </Tabs.Trigger>
    </>
  )
}

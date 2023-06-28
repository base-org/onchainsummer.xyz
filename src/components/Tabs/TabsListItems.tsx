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
        className="text-neutral-600 data-[state=active]:border-b-[2px] data-[state=active]:text-neutral-950 border-neutral-950 relative top-[1px]"
        value="tab1"
      >
        <div className="flex items-center">
          Upcoming{' '}
          <div className="w-5 h-5 text-[12px] bg-neutral-950 text-white rounded-full flex items-center justify-center mx-2">
            <span className="text-center">{upcomingLength}</span>
          </div>
        </div>

        <div className="py-1" />
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-neutral-600 data-[state=active]:border-b-[2px] data-[state=active]:text-neutral-950 border-neutral-950 relative top-[1px]"
        value="tab2"
      >
        <div className="flex items-center">
          Past{' '}
          <div className="w-5 h-5 text-[12px] bg-neutral-300 text-neutral-600 rounded-full flex items-center justify-center mx-2">
            <span className="text-center">{pastLength}</span>
          </div>
        </div>
        <div className="py-1" />
      </Tabs.Trigger>
    </>
  )
}

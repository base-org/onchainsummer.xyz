'use client'

import { FC } from 'react'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

type TabsListItems = {}

export const TabsListItems: FC<TabsListItems> = ({}) => {
  return (
    <>
      <Tabs.Trigger
        className="text-neutral-600 data-[state=active]:border-b-[2px] data-[state=active]:text-neutral-950 border-neutral-950 relative top-[1px]"
        value="tab1"
      >
        Upcoming
        <div className="py-1" />
      </Tabs.Trigger>
      <Tabs.Trigger
        className="text-neutral-600 data-[state=active]:border-b-[2px] data-[state=active]:text-neutral-950 border-neutral-950 relative top-[1px]"
        value="tab2"
      >
        Past
        <div className="py-1" />
      </Tabs.Trigger>
    </>
  )
}

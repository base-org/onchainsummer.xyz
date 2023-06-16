'use client'

import { FC } from 'react'
import React from 'react'
import * as TabsComponent from '@radix-ui/react-tabs'
import { TabsListItems } from './TabsListItems'

type TabsComponentProps = {}

export const Tabs: FC<TabsComponentProps> = ({}) => {
  return (
    <TabsComponent.Root className=" w-full" defaultValue="tab1">
      <TabsComponent.List
        className="border-b-[1px] border-neutral-400 flex gap-4"
        aria-label="Manage your account"
      >
        <TabsListItems />
      </TabsComponent.List>
      <TabsComponent.Content className="" value="tab1">
        Tab1
      </TabsComponent.Content>
      <TabsComponent.Content className="" value="tab2">
        Tab2
      </TabsComponent.Content>
    </TabsComponent.Root>
  )
}

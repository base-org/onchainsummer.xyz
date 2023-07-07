'use client'

import { FC } from 'react'
import React from 'react'
import Image from 'next/image'
import * as TabsComponent from '@radix-ui/react-tabs'
import { TabsListItems } from './TabsListItems'
import { HeadlineDrop } from '@/config/partners/types'
import { TabsDropCard } from './TabsDropCard'

export interface TabsComponentProps {
  upcomingDrops: HeadlineDrop[]
  pastDrops: HeadlineDrop[]
}

export const Tabs: FC<TabsComponentProps> = ({ upcomingDrops, pastDrops }) => {
  return (
    <section className="mx-5 p-4 md:px-4 bg-gray-200/80 rounded-2xl">
      <TabsComponent.Root defaultValue="tab1">
        <TabsComponent.List className="" aria-label="Manage your account">
          <TabsListItems
            upcomingLength={upcomingDrops.length}
            pastLength={pastDrops.length}
          />
        </TabsComponent.List>
        <TabsComponent.Content value="tab1">
          {upcomingDrops.map(
            (
              { address, name, startDate, endDate, image, description },
              idx
            ) => (
              <div key={idx} className="my-4 last:mb-0">
                <TabsDropCard
                  address={address}
                  name={name}
                  startDate={startDate}
                  endDate={endDate}
                  image={image}
                  description={description}
                />
              </div>
            )
          )}
        </TabsComponent.Content>
        <TabsComponent.Content className="" value="tab2">
          {pastDrops.map(
            (
              { address, name, startDate, endDate, image, description },
              idx
            ) => (
              <div key={idx} className="my-4 last:mb-0">
                <TabsDropCard
                  address={address}
                  name={name}
                  startDate={startDate}
                  endDate={endDate}
                  image={image}
                  description={description}
                />
              </div>
            )
          )}
        </TabsComponent.Content>
      </TabsComponent.Root>
    </section>
  )
}

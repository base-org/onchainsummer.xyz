'use client'

import formatRelative from 'date-fns/formatRelative'
import formatDuration from 'date-fns/formatDuration'
import intervalToDuration from 'date-fns/intervalToDuration'
import { FC } from 'react'
import React from 'react'
import Image from 'next/image'
import * as TabsComponent from '@radix-ui/react-tabs'
import { TabsListItems } from './TabsListItems'
import { Button } from '../Button'
import { Separator } from '../Separator'
import { HeadlineDrop } from '@/config/partners/types'

export interface TabsComponentProps {
  upcomingDrops: HeadlineDrop[]
  pastDrops: HeadlineDrop[]
}

export const Tabs: FC<TabsComponentProps> = ({ upcomingDrops, pastDrops }) => {
  return (
    <section>
      <h2 className="text-[32px] md:text-[40px] font-medium mb-6 md:mb-8 ml-6 md:ml-0">
        Onchain{' '}
        <span className="text-transparent bg-clip-text bg-blue-gradient">
          Soon
        </span>
      </h2>
      <TabsComponent.Root defaultValue="tab1">
        <TabsComponent.List
          className="border-b-[1px] border-neutral-400 flex gap-4 ml-6 md:ml-0"
          aria-label="Manage your account"
        >
          <TabsListItems
            upcomingLength={upcomingDrops.length}
            pastLength={pastDrops.length}
          />
        </TabsComponent.List>
        <TabsComponent.Content value="tab1">
          {upcomingDrops.map(
            ({ address, name, startDate, endDate, image, description }) => (
              <>
                <div
                  className="flex flex-col md:flex-row md:gap-6 mx-6 my-8 md:m-10 first:mt-12 md:first:mt-20"
                  key={address}
                >
                  <div className="md:basis-3/12">
                    <Image
                      src={image}
                      alt="Hero"
                      width={260}
                      height={175}
                      layout="responsive"
                    />
                  </div>
                  <div className="md:basis-3/12 md:flex md:flex-col md:justify-center mt-10 md:mt-0">
                    <h2 className="text-2xl font-medium leading-8 mb-4">
                      {name}
                    </h2>
                    <h3 className="text-transparent bg-clip-text bg-blue-gradient font-lg font-medium">
                      {formatRelative(new Date(startDate), new Date())} |{' '}
                      {formatDuration(
                        intervalToDuration({
                          start: new Date(startDate),
                          end: new Date(endDate),
                        })
                      )}
                    </h3>
                  </div>
                  <div className="md:basis-6/12 flex justify-center items-center">
                    <p className="text-neutral-600 leading-7 my-4">
                      {description}
                    </p>
                  </div>
                  <div className="md:hidden">
                    <Button className="w-full">View More</Button>
                  </div>
                </div>
                <Separator className="my-4" />
              </>
            )
          )}
        </TabsComponent.Content>
        <TabsComponent.Content className="" value="tab2">
          {pastDrops.map(
            ({ address, name, startDate, endDate, image, description }) => (
              <>
                <div
                  className="flex flex-col md:flex-row md:gap-6 mx-6 my-8 md:m-10 first:mt-12 md:first:mt-20"
                  key={address}
                >
                  <div className="md:basis-3/12">
                    <Image
                      src={image}
                      alt="Hero"
                      width={260}
                      height={175}
                      layout="responsive"
                    />
                  </div>
                  <div className="md:basis-3/12 md:flex md:flex-col md:justify-center mt-10 md:mt-0">
                    <h2 className="text-2xl font-medium leading-8 mb-4">
                      {name}
                    </h2>
                    <h3 className="text-transparent bg-clip-text bg-blue-gradient font-lg font-medium">
                      {formatRelative(new Date(startDate), new Date())} |{' '}
                      {formatDuration(
                        intervalToDuration({
                          start: new Date(startDate),
                          end: new Date(endDate),
                        })
                      )}
                    </h3>
                  </div>
                  <div className="md:basis-6/12 flex justify-center items-center">
                    <p className="text-neutral-600 leading-7 my-4">
                      {description}
                    </p>
                  </div>
                  <div className="md:hidden">
                    <Button className="w-full">View More</Button>
                  </div>
                </div>
                <Separator className="my-4" />
              </>
            )
          )}
        </TabsComponent.Content>
      </TabsComponent.Root>
    </section>
  )
}

'use client'

import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Wallet } from '../Navbar/Wallet'

type TeaserNavProps = {}

export const TeaserNav: FC<TeaserNavProps> = ({}) => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-end pt-[28px] px-6 mb-6">
      <NavigationMenu.List className="flex justify-end items-center gap-4">
        <NavigationMenu.Item asChild className="[&>div]:w-max">
          <Wallet />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

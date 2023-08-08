'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { OCSLogo } from '../icons/OCSLogo'
import { Close } from '../icons/Close'
import Link from 'next/link'
import { Hamburger } from '../icons/Hamburger'
import { NavListItems } from './MobileNavListItems'
import { Separator } from '../Separator'

type MobileProps = {}

export const Mobile: FC<MobileProps> = ({}) => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
  }

  return (
    <NavigationMenu.Root
      className={clsx(
        'z-40 flex w-screen lg:hidden [&>div]:w-full',
        hamburgerMenuOpen ? 'fixed bg-white' : 'relative'
      )}
    >
      <NavigationMenu.List
        className={clsx(
          'flex justify-between p-6 w-full items-center',
          hamburgerMenuOpen && 'pb-[40px]'
        )}
      >
        <NavigationMenu.Link asChild>
          <Link href="/">
            <OCSLogo />
          </Link>
        </NavigationMenu.Link>

        <NavigationMenu.Item className="flex items-center ">
          <NavigationMenu.Trigger
            className="group z-40 relative"
            onClick={toggleHamburgerMenu}
          >
            <div className="group-data-[state=open]:hidden">
              <Hamburger />
            </div>
            <span className="sr-only group-data-[state=open]:hidden">
              Open Menu
            </span>
            <div className="group-data-[state=closed]:hidden">
              <Close />
            </div>
            <span className="sr-only group-data-[state=closed]:hidden">
              Close Menu
            </span>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="bg-white fixed top-[90px] inset-0 max-w-[100vw] z-20 overscroll-contain">
            <Separator className="relative bottom-2" />
            <NavigationMenu.Sub
              orientation="vertical"
              className="h-full [&>div]:h-full"
            >
              <NavigationMenu.List className="flex flex-col items-center gap-4 h-full">
                <NavListItems />
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { HomeIcon } from '../HomeIcon'
import Link from 'next/link'
import { Hamburger } from '../icons/Hamburger'
import { NavListItems } from './NavListItems'

type MobileProps = {}

export const Mobile: FC<MobileProps> = ({}) => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen lg:hidden [&>div]:w-full">
      <NavigationMenu.List className="flex justify-between px-6 py-8 w-full items-center border-b border-black/10">
        <NavigationMenu.Link asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </NavigationMenu.Link>

        <NavigationMenu.Item className="flex items-center ">
          <NavigationMenu.Trigger className="group z-30 relative">
            <div className="group-data-[state=open]:hidden">
              <Hamburger />
            </div>
            <span className="sr-only group-data-[state=open]:hidden">
              Open Menu
            </span>
            <div className="group-data-[state=closed]:hidden">x</div>
            <span className="sr-only group-data-[state=closed]:hidden">
              Close Menu
            </span>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-white fixed top-[90px] inset-0 max-w-[100vw] px-6 py-8 z-20 overscroll-contain">
            <NavigationMenu.Sub orientation="vertical">
              <NavigationMenu.List className="flex flex-col items-center gap-4">
                <NavListItems />
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { HomeIcon } from './HomeIcon'
import Link from 'next/link'
import { NavListItems } from './NavListItems'

type DesktopProps = {}

export const Desktop: FC<DesktopProps> = ({}) => {
  return (
    <NavigationMenu.Root className="relative z-[1] hidden w-screen md:flex [&>div]:w-full">
      <NavigationMenu.List className="flex gap-10 justify-between px-20 py-[18px] w-full items-center">
        <NavigationMenu.Link asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </NavigationMenu.Link>
        <div className="ml-auto" />
        <NavListItems />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

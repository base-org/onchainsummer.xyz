import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { OCSLogo } from '../icons/OCSLogo'
import Link from 'next/link'
import { NavListItems } from './DesktopNavListItems'

type DesktopProps = {}

export const Desktop: FC<DesktopProps> = ({}) => {
  return (
    <NavigationMenu.Root className="relative z-[1] hidden w-screen lg:flex [&>div]:w-full px-20">
      <NavigationMenu.List className="flex basis-[10%] gap-[46px] justify-between  py-[18px] w-full items-center max-w-7xl mx-auto">
        <NavigationMenu.Link asChild>
          <Link href="/">
            <OCSLogo />
          </Link>
        </NavigationMenu.Link>
        <div className="basis-[90%]">
          <NavListItems />
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

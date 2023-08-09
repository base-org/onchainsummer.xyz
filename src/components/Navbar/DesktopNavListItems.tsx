import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { Wallet } from './Wallet'

type NavListItemsProps = {}

export const NavListItems: FC<NavListItemsProps> = ({}) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <NavigationMenu.List className="flex items-center gap-2.5">
        <NavigationMenu.Item className="my-2">
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="desktop-body uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/trending"
              className="desktop-body uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
            >
              Trending
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/community"
              className="desktop-body uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
            >
              Community
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List className="flex items-center gap-4 w-max">
        <p className="uppercase desktop-mono text-[#858585] whitespace-nowrap block min-[1184px]:block min-[1024px]:hidden">
          Get onchain this summer
        </p>
        <NavigationMenu.Item asChild>
          <Wallet />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </div>
  )
}

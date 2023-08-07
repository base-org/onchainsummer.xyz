import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { Wallet } from './Wallet'

type NavListItemsProps = {}

export const NavListItems: FC<NavListItemsProps> = ({}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6">
      <NavigationMenu.List className="flex flex-col lg:flex-row items-center gap-6 ">
        <NavigationMenu.Item className="my-2">
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-6 py-3"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/trending"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-6 py-3"
            >
              Trending
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/community"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-6 py-3"
            >
              Community
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-col lg:flex-row items-center gap-4 w-max">
        <p className="uppercase font-mono text-zinc-400 whitespace-nowrap block min-[1184px]:block min-[1024px]:hidden">
          Get onchain this summer
        </p>
        <NavigationMenu.Item asChild>
          <Wallet />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </div>
  )
}

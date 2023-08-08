import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { Wallet } from './Wallet'
import { Separator } from '../Separator'
type NavListItemsProps = {}

export const NavListItems: FC<NavListItemsProps> = ({}) => {
  return (
    <div className="flex flex-col items-start justify-between h-full w-full [&>div]:w-full">
      <NavigationMenu.List className="flex flex-col px-6 pt-8">
        <p className="uppercase font-mono text-zinc-400 whitespace-nowrap block min-[1184px]:block min-[1024px]:hidden mb-3">
          Get onchain this summer
        </p>
        <NavigationMenu.Item className="my-6">
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-6 py-3"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="my-6">
          <NavigationMenu.Link asChild>
            <Link
              href="/trending"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-6 py-3"
            >
              Trending
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="my-6">
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
      <NavigationMenu.List className="flex flex-col lg:flex-row items-center gap-4 w-full [&>div]:w-full">
        <Separator className="" />
        <div className="px-6 pb-4">
          <NavigationMenu.Item asChild className="w-full [&>button]:w-full ">
            <Wallet />
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </div>
  )
}

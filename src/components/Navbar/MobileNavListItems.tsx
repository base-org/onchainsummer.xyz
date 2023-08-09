import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { Wallet } from './Wallet'
import { Separator } from '../Separator'
type NavListItemsProps = {}

export const NavListItems: FC<NavListItemsProps> = ({}) => {
  return (
    <div className="flex flex-col items-start justify-between h-max w-full [&>div]:w-full px-6 py-10">
      <NavigationMenu.List className="flex flex-col gap-6">
        <p className="uppercase desktop-mono text-zinc-400 whitespace-nowrap block min-[1184px]:block min-[1024px]:hidden">
          Get onchain this summer
        </p>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/trending"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
            >
              Trending
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/community"
              className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
            >
              Community
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </div>
  )
}

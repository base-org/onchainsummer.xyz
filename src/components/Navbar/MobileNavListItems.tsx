import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { CBSubscribeDialog } from '@/components/CBSubscribeDialog'
import { Button } from '@/components/Button'

type NavListItemsProps = {}

export const NavListItems: FC<NavListItemsProps> = ({}) => {
  return (
    <div className="flex flex-col items-start justify-between h-max px-6 py-10">
      <NavigationMenu.List className="flex flex-col gap-6">
        <p className="uppercase desktop-mono text-zinc-400 whitespace-nowrap block">
          Get onchain this summer
        </p>
        <NavigationMenu.Item>
          <Dialog.Close asChild>
            <NavigationMenu.Link asChild>
              <Link
                href="/"
                className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
              >
                Home
              </Link>
            </NavigationMenu.Link>
          </Dialog.Close>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Dialog.Close asChild>
            <NavigationMenu.Link asChild>
              <Link
                href="/trending"
                className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
              >
                Trending
              </Link>
            </NavigationMenu.Link>
          </Dialog.Close>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Dialog.Close asChild>
            <NavigationMenu.Link asChild>
              <Link
                href="/community"
                className="font-sans uppercase bg-gray-200/80 hover:bg-gray-200/60 rounded-full px-4 py-1.5"
              >
                Community
              </Link>
            </NavigationMenu.Link>
          </Dialog.Close>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Dialog.Close asChild>
            <CBSubscribeDialog>
              <Button className="!w-auto" size="X-SMALL">
                Subscribe
              </Button>
            </CBSubscribeDialog>
          </Dialog.Close>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </div>
  )
}

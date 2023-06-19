import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { ConnectWalletButton } from '../client'

type NavListItemsProps = {}

export const NavListItems: FC<NavListItemsProps> = ({}) => {
  return (
    <>
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link href="/" className="font-medium">
            Home
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link href="/trending" className="font-medium">
            Trending
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item asChild>
        <ConnectWalletButton />
      </NavigationMenu.Item>
    </>
  )
}

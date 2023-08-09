'use client'

import clsx from 'clsx'
import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Dialog from '@radix-ui/react-dialog'
import { YellowDot } from '../icons/YellowDot'
import { OCS } from '../icons/OCS'
import { Close } from '../icons/Close'
import Link from 'next/link'
import { Hamburger } from '../icons/Hamburger'
import { Separator } from '../Separator'
import { NavListItems } from './MobileNavListItems'
import dialogClasses from '@/components/dialog.module.css'
import { useAccount } from 'wagmi'
import { ConnectDialog } from '../ConnectDialog'
import { WalletContent } from '../WalletDialog/WalletContent'

type MobileProps = {}

export const Mobile: FC<MobileProps> = ({}) => {
  const { address } = useAccount()
  return (
    <NavigationMenu.Root
      className={'z-40 flex w-screen lg:hidden [&>div]:w-full'}
    >
      <NavigationMenu.List className="flex justify-between px-6 py-3 w-full items-center">
        <NavigationMenu.Link asChild>
          <Link href="/">
            <YellowDot />
          </Link>
        </NavigationMenu.Link>

        <NavigationMenu.Link asChild>
          <Link href="/">
            <OCS />
          </Link>
        </NavigationMenu.Link>

        <NavigationMenu.Item className="flex items-center ">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="z-40" aria-label="open menu">
                <Hamburger />
                <span className="sr-only">Open Menu</span>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={dialogClasses.overlay} />
              <Dialog.Content
                className={clsx(
                  'fixed left-0 top-0 w-screen bg-white focus:outline-none z-40 h-max max-h-screen overflow-y-auto'
                )}
              >
                <div className="flex justify-between px-6 py-3 w-full items-center">
                  <YellowDot />
                  <OCS />
                  <Dialog.Close asChild>
                    <button aria-label="Close">
                      <Close height={24} width={24} />
                      <span className="sr-only">Close</span>
                    </button>
                  </Dialog.Close>
                </div>
                <Separator />

                <NavListItems />

                <Separator />
                {!address ? (
                  <div className="p-6">
                    <ConnectDialog inNavbar title="Connect" />
                  </div>
                ) : (
                  <WalletContent />
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

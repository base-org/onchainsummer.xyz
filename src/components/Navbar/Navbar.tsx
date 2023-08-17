'use client'

import { FC, useEffect } from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { WindowProvider, useConnect } from 'wagmi'

declare global {
  interface Window {
    ethereum?: WindowProvider
  }
}

interface CustomWindowProvider extends WindowProvider {
  isCoinbaseBrowser?: boolean
}

type NavbarProps = {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const { connect, connectors } = useConnect()

  useEffect(() => {
    const ethereum = window.ethereum as CustomWindowProvider | undefined
    if (ethereum?.isCoinbaseBrowser) {
      connect({
        connector: connectors.find((c) => c.name == 'Coinbase Wallet'),
      })
    }
  }, [connect, connectors])

  return (
    <>
      <Mobile />
      <Desktop />
    </>
  )
}

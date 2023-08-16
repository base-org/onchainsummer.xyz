'use client'

import { FC, useEffect } from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { WindowProvider, useConnect } from 'wagmi'
type NavbarProps = {}

declare global {
  interface Window {
    ethereum?: WindowProvider
  }
}

interface CustomWindowProvider extends WindowProvider {
  isCoinbaseBrowser?: boolean
}

export const Navbar: FC<NavbarProps> = ({}) => {
  const { connectors, connect } = useConnect()
  useEffect(() => {
    const ethereum = window.ethereum as CustomWindowProvider | undefined
    if (ethereum?.isCoinbaseBrowser) {
      // Find the Coinbase Wallet connector
      const connector = connectors.find((c) => c.name === 'Coinbase Wallet')
      if (connector) {
        connect({ connector })
      }
    }
  }, [])

  return (
    <>
      <Mobile />
      <Desktop />
    </>
  )
}

'use client'

import { FC, useEffect } from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { useConnect } from 'wagmi'
import { getIsCoinbaseBrowser } from '@/utils/getIsCoinbaseBrowser'
import { useConnectCBWallet } from '@/utils/useConnectCBWallet'

type NavbarProps = {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const connect = useConnectCBWallet()

  useEffect(() => {
    if (getIsCoinbaseBrowser()) {
      connect()
    }
  }, [connect])

  return (
    <>
      <Mobile />
      <Desktop />
    </>
  )
}

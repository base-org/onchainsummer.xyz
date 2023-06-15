'use client'

import { FC } from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'

type NavbarProps = {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <Mobile />
      <Desktop />
    </>
  )
}

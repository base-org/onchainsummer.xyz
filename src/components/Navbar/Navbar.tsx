'use client'

import { FC } from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { useNetworkMismatch } from '@thirdweb-dev/react'
import { useChain } from '@thirdweb-dev/react'

type NavbarProps = {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const isMismatched = useNetworkMismatch()

  const chain = useChain()

  return (
    <>
      <Mobile />
      <Desktop />
      {isMismatched && (
        <div className="w-full text-center p-2 bg-neutral-950 text-white text-xs">
          You&apos;re currently viewing data from the Base network, however,
          your wallet is connected to{' '}
          <span className="text-transparent bg-clip-text  bg-yellow-gradient">
            {chain?.name}
          </span>
          . Please switch to the{' '}
          <span className="text-transparent bg-clip-text bg-blue-gradient">
            Base Network.
          </span>
        </div>
      )}
    </>
  )
}

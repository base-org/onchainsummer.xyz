'use client'
import { ReactNode } from 'react'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Base, BaseGoerli } from '@thirdweb-dev/chains'
import { isProd } from '@/config/chain'

const l2 = isProd ? Base : BaseGoerli

interface ThirdWebProviderClientProps {
  children: ReactNode
}

export default function ThirdWebProviderClient({
  children,
}: ThirdWebProviderClientProps) {
  return (
    <ThirdwebProvider
      activeChain={l2}
      clientId={process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  )
}

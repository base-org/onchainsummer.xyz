'use client'
import { ReactNode } from 'react'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { BaseGoerli } from '@thirdweb-dev/chains'

interface ThirdWebProviderClientProps {
  children: ReactNode
}

export default function ThirdWebProviderClient({
  children,
}: ThirdWebProviderClientProps) {
  return (
    <ThirdwebProvider activeChain={BaseGoerli}>{children}</ThirdwebProvider>
  )
}

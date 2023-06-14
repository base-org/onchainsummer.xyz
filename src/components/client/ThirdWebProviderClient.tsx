'use client'
import { ReactNode } from 'react'
import { ThirdwebProvider } from '@thirdweb-dev/react'

interface ThirdWebProviderClientProps {
  children: ReactNode
}

export default function ThirdWebProviderClient({
  children,
}: ThirdWebProviderClientProps) {
  return <ThirdwebProvider activeChain="ethereum">{children}</ThirdwebProvider>
}

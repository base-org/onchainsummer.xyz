'use client'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface QueryClientProvider {
  children: ReactNode
}

const queryClient = new QueryClient()

export default function ThirdWebProviderClient({
  children,
}: QueryClientProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

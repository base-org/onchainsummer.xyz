import Link from 'next/link'
import { contracts } from '@/config/contracts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1>Contracts</h1>
      {contracts.map(({ address, name }) => (
        <Link key={address} href={`contracts/${address}`}>
          {name}
        </Link>
      ))}
      {children}
    </main>
  )
}

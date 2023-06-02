import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'On Chain Summer',
  description: 'Mint NFTs with OnChainSummer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="flex flex-col h-full">
      <body className={clsx(inter.className, 'flex flex-col h-full')}>
        <nav className="flex">
          <ul className="flex gap-4">
            <li>
              <Link href={'/'}>Big NAV</Link>
            </li>
            <li>
              <Link href={'contracts'}>Contracts</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

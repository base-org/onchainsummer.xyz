import Link from 'next/link'
import './globals.css'
import { DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

const satoshi = localFont({
  src: './Satoshi-Variable.ttf',
  variable: '--font-satoshi',
})

const dmMono = DM_Mono({
  weight: ['500', '400'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

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
      <body
        className={clsx(
          satoshi.className,
          dmMono.variable,
          satoshi.variable,
          'flex flex-col h-full'
        )}
      >
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

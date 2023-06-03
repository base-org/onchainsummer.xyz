import Link from 'next/link'
import './globals.css'
import { DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import {
  ConnectWalletButton,
  ThirdWebProviderClient,
} from '../../components/client'

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
    <ThirdWebProviderClient>
      <html lang="en" className="flex flex-col h-full">
        <body className={clsx('flex flex-col h-full')}>
          <nav className="flex">
            <ul className="flex gap-4">
              <li>
                <Link href={'/'}>Big NAV</Link>
              </li>
              <li>
                <Link href={'sub'}>Subz</Link>
              </li>
              <li>
                <ConnectWalletButton />
              </li>
              <li>
              <Link href={'contracts'}>Contracts</Link>
            </li>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    </ThirdWebProviderClient>
  )
}

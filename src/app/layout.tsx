import Link from 'next/link'
import './globals.css'
import localFont from 'next/font/local'
import clsx from 'clsx'
import {
  ConnectWalletButton,
  ThirdWebProviderClient,
} from '../components/client'

const coinbaseText = localFont({
  variable: '--font-coinbase-text',
  src: [
    {
      path: './fonts/Coinbase_Text-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Coinbase_Text-Regular_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Coinbase_Text-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Coinbase_Text-Medium_Italic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
})

const coinbaseSans = localFont({
  variable: '--font-coinbase-sans',
  src: [
    {
      path: './fonts/Coinbase_Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Coinbase_Sans-Regular_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Coinbase_Sans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Coinbase_Sans-Medium_Italic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
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
        <body
          className={clsx(
            'flex flex-col h-full',
            coinbaseSans.variable,
            coinbaseText.variable
          )}
        >
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

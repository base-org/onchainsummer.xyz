import './globals.css'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { ThirdWebProviderClient } from '../components/client'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

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
    {
      path: './fonts/Coinbase_Sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const coinbaseMono = localFont({
  variable: '--font-coinbase-mono',
  src: [
    {
      path: './fonts/Coinbase_Mono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Coinbase_Mono-Medium.woff2',
      weight: '500',
      style: 'normal',
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
            coinbaseText.variable,
            coinbaseMono.variable
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThirdWebProviderClient>
  )
}

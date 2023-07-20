import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { ThirdWebProviderClient } from '../components/client'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { QueryParamProvider } from '@/components/QueryParamProvider'
import { QueryClientProvider } from '../components/client'
import { cookies } from 'next/headers'
import { Password } from '@/components/Password/Password'
import { ChainChecker } from '@/components/ChainChecker/ChainChecker'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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

const coinbaseDisplay = localFont({
  variable: '--font-coinbase-display',
  src: [
    {
      path: './fonts/Coinbase_Display-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Coinbase_Display-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: 'Onchain Summer',
  description: 'Mint NFTs with OnChainSummer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const password = cookieStore.get('ocspw')

  if (!password) {
    return (
      <html lang="en" className="flex flex-col h-full">
        <body>
          <h1>Password</h1>
          <Password />
        </body>
      </html>
    )
  }

  return (
    <ThirdWebProviderClient>
      <html lang="en" className="flex flex-col h-full">
        <body
          className={clsx(
            'flex flex-col h-full',
            coinbaseSans.variable,
            coinbaseText.variable,
            coinbaseMono.variable,
            coinbaseDisplay.variable,
            inter.variable
          )}
        >
          <QueryClientProvider>
            <QueryParamProvider>
              <>
                <Navbar />
                <div className="flex justify-center items-center bg-subnav-background-gradient min-h-[135px] z-0">
                  <ChainChecker />
                </div>
                {children}
                <Footer />
              </>
            </QueryParamProvider>
          </QueryClientProvider>
        </body>
      </html>
    </ThirdWebProviderClient>
  )
}

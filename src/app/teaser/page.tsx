import '../globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { ThirdWebProviderClient } from '@/components/client'
import { QueryParamProvider } from '@/components/QueryParamProvider'
import { QueryClientProvider } from '@/components/client'
import { cookies } from 'next/headers'
import { Password } from '@/components/Password/Password'
import { website } from '@/config/website'
import { Teaser } from '@/components/Teaser/Teaser'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const coinbaseText = localFont({
  variable: '--font-coinbase-text',
  src: [
    {
      path: '../fonts/Coinbase_Text-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Coinbase_Text-Regular_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Coinbase_Text-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Coinbase_Text-Medium_Italic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
})

const coinbaseSans = localFont({
  variable: '--font-coinbase-sans',
  src: [
    {
      path: '../fonts/Coinbase_Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Coinbase_Sans-Regular_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Coinbase_Sans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Coinbase_Sans-Medium_Italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Coinbase_Sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const coinbaseMono = localFont({
  variable: '--font-coinbase-mono',
  src: [
    {
      path: '../fonts/Coinbase_Mono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Coinbase_Mono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const coinbaseDisplay = localFont({
  variable: '--font-coinbase-display',
  src: [
    {
      path: '../fonts/Coinbase_Display-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Coinbase_Display-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: {
    template: `%s | ${website.siteName}`,
    default: website.siteName, // a default is required when creating a template
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
  applicationName: website.siteName,
  referrer: 'origin-when-cross-origin',
  keywords: website.keywords,
  description: website.description,
  themeColor: website.themeColor,
  openGraph: {
    title: website.title,
    description: website.title,
    url: 'https://onchainsummer.xyz',
    siteName: website.siteName,
    images: [website.logo],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: website.title,
    description: website.description,
    site: website.twitter.site,
    creator: website.twitter.creator,
    images: [website.logo.url],
  },
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
              <div className="bg-teaser-gradient h-fit flex-grow">
                <Teaser />
              </div>
            </QueryParamProvider>
          </QueryClientProvider>
        </body>
      </html>
    </ThirdWebProviderClient>
  )
}

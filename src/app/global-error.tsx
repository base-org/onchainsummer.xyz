'use client'

import { Button } from '@/components/Button'
import { events } from '@/utils/analytics'
import { useLogEvent } from '@/utils/useLogEvent'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { useEffect } from 'react'

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

export default function GlobalError({ reset }: { reset: () => void }) {
  const logEvent = useLogEvent()

  useEffect(() => {
    logEvent?.(events.clientError)
  }, [logEvent])

  return (
    <html>
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
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <div className="w-auto flex flex-col items-center space-y-4 bg-red">
            <h2 className="text-center text-2xl">Something went wrong...</h2>
            <span className="text-center text-ocs-gray">
              Please try again later.
            </span>
            <Button size="SMALL" className="w-full" onClick={reset}>
              Go to home
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

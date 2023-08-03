'use client'

import clsx from 'clsx'
import * as Dialog from '@radix-ui/react-dialog'
import { FC, PropsWithChildren } from 'react'
import { Close } from '../icons/Close'
import dialogClasses from '@/components/dialog.module.css'
import { CoinbaseWallet } from '@/components/icons/CoinbaseWallet'
import { QRCode } from '@/components/icons/QRCode'
import { Button } from '../Button'

export interface CBSubscribeDialogProps {}

export const CBSubscribeDialog: FC<
  PropsWithChildren<CBSubscribeDialogProps>
> = ({ children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogClasses.overlay} />
        <Dialog.Content
          className={clsx(
            'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-[450px] lg:max-w-[874px] translate-x-[-50%] translate-y-[-50%] rounded-[24px] p-5 shadow-large bg-white focus:outline-none z-40 lg:px-16 lg:py-20 overflow-auto lg:h-auto lg:overflow-hidden'
          )}
        >
          <Dialog.Close asChild>
            <button
              className="inline-flex absolute top-10 right-10 h-[24px] w-[24px] appearance-none items-center justify-center focus:shadow-[0_0_0_1px] focus:outline-none"
              aria-label="Close"
            >
              <Close />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="block lg:hidden py-8">
                <CoinbaseWallet width={40} height={40} />
              </div>
              <h2 className="text-[32px] leading-[120%] mb-4 lg:mb-10 font-normal font-display">
                Say “gm” and get Onchain Summer updates straight to your wallet
              </h2>
              <ol className="text-base font-display text-[#444]">
                <li className="mb-4">
                  <span className="hidden lg:block">
                    1. Scan the QR code with your mobile device
                  </span>
                  <span className="lg:hidden">1. Tap “Subscribe in app”</span>
                </li>
                <li className="mb-4">
                  2. Message <b className="font-[500]">“gm”</b> to{' '}
                  <b className="font-[500]">onchainsummer.eth</b> using
                  Coinbase Wallet’s messaging feature
                </li>
                <li className="mb-6">
                  3. Get daily updates on Onchain Summer mints
                </li>
              </ol>
              <div className="block lg:hidden">
                <Button
                  href="https://go.cb-w.com/onchain-summer-subscribe"
                  external
                >
                  SUBSCRIBE IN APP
                </Button>
              </div>
            </div>
            <div className="flex-1 max-w-[356px] hidden lg:block">
              <QRCode />
            </div>
          </div>
          <p className="text-[#858585] font-mono text-[14px] text-center mt-4">
            Wallet messaging is powered by XMTP. You can can use Coinbase Wallet
            to access these messages, or another client like{' '}
            <a href="https://xmtp.chat/" target="_blank" className="underline">
              the XMTP web client
            </a>{' '}
            or{' '}
            <a
              href="https://getconverse.app/"
              target="_blank"
              className="underline"
            >
              Converse
            </a>
            . More wallets and apps coming soon.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

'use client'

import clsx from 'clsx'
import * as Dialog from '@radix-ui/react-dialog'
import { FC, useState, PropsWithChildren } from 'react'
import { Close } from '../icons/Close'
import dialogClasses from '@/components/dialog.module.css'
import { Coinbase } from '@/components/icons/Coinbase'
import { QRCode } from '@/components/icons/QRCode'
import { Button } from '../Button'

export interface CBSubscribeDialogProps {}

export const CBSubscribeDialog: FC<
  PropsWithChildren<CBSubscribeDialogProps>
> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogClasses.overlay} />
        <Dialog.Content
          className={clsx(
            'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-[450px] lg:max-w-[75vw] translate-x-[-50%] translate-y-[-50%] rounded-[24px] p-5 shadow-large bg-white focus:outline-none z-40 lg:px-16 lg:py-20 overflow-auto lg:h-auto lg:overflow-hidden'
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
                <Coinbase />
              </div>
              <h2 className="text-2xl mb-4 font-normal">
                Subscribe for daily updates on Coinbase Wallet
              </h2>
              <p className="text-base text-[#5B616E]">
                <span>
                  Turn on encrypted messaging in Coinbase Wallet’s mobile app to
                  get updates on Onchain Summer drops. Coinbase Wallet is the
                  only wallet with built-in messaging, powered by XMTP. Securely
                  import your keys to Coinbase Wallet today to give it a try.
                </span>
                <br />
                <br />
                <span className="hidden lg:block">
                  To get started, scan the QR code or download on
                  <a
                    href="https://play.google.com/store/apps/details?id=org.toshi"
                    className="text-ocs-blue mx-1"
                  >
                    Android
                  </a>
                  or
                  <a
                    href="https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455"
                    className="text-ocs-blue ml-1"
                  >
                    iOS
                  </a>
                  .
                </span>
              </p>
              <div className="block lg:hidden">
                <Button href="https://go.cb-w.com/messaging?address=0x97b4AfF7aa20C3136c9D3c52d3b3Bfb103Dc48c3">
                  SUBSCRIBE IN APP
                </Button>
              </div>
            </div>
            <div className="flex-1 max-w-[356px] hidden lg:block">
              <QRCode />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

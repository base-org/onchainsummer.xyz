import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Close } from '../icons/Close'
import { Button } from '../Button'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'
import {
  useConnect,
  metamaskWallet,
  coinbaseWallet,
  trustWallet,
  walletConnect,
} from '@thirdweb-dev/react'
import { Coinbase } from '../icons/Coinbase'
import { WalletConnect } from '../icons/WalletConnect'
import { MetaMask } from '../icons/MetaMask'
import { Trust } from '../icons/Trust'
import clsx from 'clsx'

import dialogClasses from '@/components/dialog.module.css'

type ConnectDialogProps = {
  title?: React.ReactNode
  inNavbar?: boolean
}

const coinbase = coinbaseWallet({ qrmodal: 'coinbase' })
coinbase.meta.name = 'Onchain Summer'

const wallets: Record<
  'metamask' | 'coinbase' | 'wallet-connect',
  {
    slug: string
    title: string
    icon: React.ReactNode
    config: ReturnType<typeof metamaskWallet>
    createLink: string
  }
> = {
  metamask: {
    slug: 'metamask',
    title: 'Metamask',
    icon: <MetaMask />,
    config: metamaskWallet(),
    createLink: 'https://metamask.io/download/',
  },
  coinbase: {
    slug: 'coinbase',
    title: 'Coinbase',
    icon: <Coinbase />,
    // @ts-expect-error
    config: coinbase,
    createLink: 'https://go.cb-w.com/',
  },
  // Rainbow wallet is not supported yet, they are currently working on a browswr extension.
  // rainbow: {
  //   slug: 'rainbow',
  //   title: 'Rainbow Wallet',
  //   icon: <Rainbow />,
  //   config: rainbowWallet(),
  // },
  trust: {
    slug: 'trust',
    title: 'Trust Wallet',
    icon: <Trust />,
    config: trustWallet(),
    createLink: 'https://trustwallet.com/browser-extension/',
  },
  'wallet-connect': {
    slug: 'wallet-connect',
    title: 'Wallet Connect',
    icon: <WalletConnect />,
    // @ts-expect-error
    config: walletConnect(),
    createLink: 'https://go.cb-w.com/',
  },
}

const buttonClassName =
  'py-4 px-6 rounded-[100px] flex items-center gap-3 font-medium w-full hover:bg-[#EFEFEF] leading-[24px]'

export const ConnectDialog: FC<ConnectDialogProps> = ({
  title = <div className="flex gap-2.5 items-center px-3">Connect Wallet</div>,
  inNavbar = false,
}) => {
  const connect = useConnect()
  const [pw] = useQueryParam('pw', withDefault(StringParam, 'coinbase'))

  const walletKey = wallets[pw as keyof typeof wallets] ? pw : 'coinbase'

  const preferredWallet = wallets[walletKey as keyof typeof wallets]
  const otherWallets = Object.values(wallets).filter(
    (wallet) => wallet.slug !== preferredWallet.slug
  )

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={clsx({ 'rounded-lg !py-2 !px-3': inNavbar })}>
          {title}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogClasses.overlay} />
        <Dialog.Content
          className={clsx(
            'fixed data-[state=open]:animate-contentShow',
            'top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-xl translate-x-[-50%] translate-y-[-50%]',
            'rounded-[20px] p-16 bg-white focus:outline-none z-40 lg:shadow-large'
          )}
        >
          <div className="flex flex-col w-full">
            <Dialog.Title className={clsx(dialogClasses.title, 'mb-6')}>
              Connect a wallet
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-black absolute top-10 right-10 inline-flex h-6 w-6 appearance-none items-center justify-center focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Close />
              </button>
            </Dialog.Close>
          </div>
          <button
            className={clsx(buttonClassName, 'bg-[#EFEFEF] hover:bg-[#DFDFDF]')}
            onClick={async () => {
              await connect(preferredWallet.config)
            }}
          >
            {preferredWallet.icon}
            <span className="flex flex-col items-start">
              <span>{preferredWallet.title}</span>
              <span className="text-sm font-mono font-normal leading-snug">
                Recommended
              </span>
            </span>
          </button>
          <div className="flex flex-col w-full">
            {otherWallets.map((wallet) => (
              <button
                key={wallet.slug}
                className={clsx(buttonClassName)}
                onClick={async () => {
                  await connect(wallet.config)
                }}
              >
                {wallet.icon} <span>{wallet.title}</span>
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

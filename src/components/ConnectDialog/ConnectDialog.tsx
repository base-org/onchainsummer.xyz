import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Close } from '../icons/Close'
import { Button } from '../Button'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'
import {
  useConnect,
  metamaskWallet,
  coinbaseWallet,
  rainbowWallet,
  trustWallet,
  walletConnect,
} from '@thirdweb-dev/react'
import { Separator } from '../Separator'
import { Coinbase } from '../icons/Coinbase'
import { WalletConnect } from '../icons/WalletConnect'
import { MetaMask } from '../icons/MetaMask'
import { Trust } from '../icons/Trust'
import { Rainbow } from '../icons/Rainbow'

import clsx from 'clsx'

type ConnectDialogProps = {
  title?: React.ReactNode
  inNavbar?: boolean
}

const wallets: Record<
  'metamask' | 'coinbase' | 'wallet-connect',
  {
    slug: string
    title: string
    icon: React.ReactNode
    config: ReturnType<typeof metamaskWallet>
  }
> = {
  metamask: {
    slug: 'metamask',
    title: 'MetaMask',
    icon: <MetaMask />,
    config: metamaskWallet(),
  },
  coinbase: {
    slug: 'coinbase',
    title: 'CB Wallet',
    icon: <Coinbase />,
    // @ts-expect-error
    config: coinbaseWallet(),
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
  },
  'wallet-connect': {
    slug: 'wallet-connect',
    title: 'Wallet Connect',
    icon: <WalletConnect />,
    // @ts-expect-error
    config: walletConnect(),
  },
}

export const ConnectDialog: FC<ConnectDialogProps> = ({
  title = (
    <div className="flex gap-2.5 items-center">
      <div className="bg bg-timer-active h-2 w-2 rounded-full" /> Connect Wallet
    </div>
  ),
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
        <Dialog.Overlay className="bg-black/40 backdrop-blur-[6px] data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg px-6 py-8 bg-white focus:outline-none z-40">
          <div className="relative flex flex-col w-full items-center">
            <Dialog.Title className="text-neutral-900 m-0 text-2xl font-medium">
              Connect Your Wallet
            </Dialog.Title>
            <Dialog.Description className="text-black/50 gap-2 font-text font-medium">
              Don&apos;t have a wallet?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#309FA7] via-[#9060FF] to-[#0052FF]">
                Create one here.
              </span>
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="text-black absolute top-[50%] translate-y-[-50%] right-0 inline-flex h-[32px] w-[24px] appearance-none items-center justify-center focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Close />
              </button>
            </Dialog.Close>
          </div>
          <Separator className="my-6" />
          <Button
            variant="SECONDARY"
            className="!flex text-black text-lg font-medium w-full justify-between rounded-lg"
            onClick={async () => {
              await connect(preferredWallet.config)
            }}
          >
            <span>{preferredWallet.title}</span> {preferredWallet.icon}
          </Button>
          <Separator className="my-6" />
          <div className="flex flex-col gap-4 w-full">
            {otherWallets.map((wallet) => (
              <Button
                key={wallet.slug}
                variant="SECONDARY"
                className="!flex text-black text-lg font-medium w-full justify-between rounded-lg !border !border-neutral-100 !bg-white"
                onClick={async () => {
                  await connect(wallet.config)
                }}
              >
                <span>{wallet.title}</span> {wallet.icon}
              </Button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

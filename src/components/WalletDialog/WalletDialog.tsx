import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import clsx from 'clsx'
import { shortenAddress } from '@/utils/address'

import { useEns } from '@/utils/useEns'

import dialogClasses from '@/components/dialog.module.css'
import { useAccount, useNetwork } from 'wagmi'
import { WalletContent } from './WalletContent'

interface WalletDialogProps {}

export const WalletDialog: FC<WalletDialogProps> = ({}) => {
  const { address } = useAccount()
  const { name, avatar } = useEns()

  const { chain } = useNetwork()

  if (!address || !chain) {
    return null
  }

  const shortenedAddress = shortenAddress(address)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={'rounded-lg !py-1.5 !px-4 !lowercase !gap-2'}>
          {avatar ? (
            <div
              className="h-5 w-5 bg-black rounded-full bg-cover relative"
              style={{ backgroundImage: `url(${avatar})` }}
            />
          ) : null}

          <span className="leading-[140%]">{name || shortenedAddress}</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={clsx(dialogClasses.overlay, 'lg:hidden')} />
        <Dialog.Content
          className={clsx(
            'fixed',
            'top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-xs translate-x-[-50%] translate-y-[-50%]',
            'lg:top-[4.5rem] lg:left-[unset] lg:right-10 lg:translate-x-0 lg:translate-y-0',
            'rounded-[20px] bg-white focus:outline-none z-40 lg:shadow-large'
          )}
        >
          <WalletContent />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

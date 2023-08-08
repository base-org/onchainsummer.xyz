import { FC, useMemo } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import clsx from 'clsx'
import { shortenAddress } from '@/utils/address'
import { ChainSwitch } from '../icons/ChainSwitch'
import useBalances from '@/utils/useBalances'
import { formatEther } from 'ethers/lib/utils'
import { Eth } from '../icons/Eth'
import { Separator } from '../Separator'
import { Base } from '../icons/Base'
import { ArrowRight } from '../icons/ArrowRight'
import { baseGoerli } from 'wagmi/chains'
import { useEns } from '@/utils/useEns'
import { Loading } from '../icons/Loading'
import dialogClasses from '@/components/dialog.module.css'
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { useIsMisMatched } from '@/utils/useIsMismatched'
import { l2 } from '@/config/chain'

interface WalletDialogProps {}

export const WalletDialog: FC<WalletDialogProps> = ({}) => {
  const { address } = useAccount()
  const { name, avatar, isLoading: isLoadingEns } = useEns()
  const { switchNetwork } = useSwitchNetwork()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()
  const { l1Balance, l2Balance, isLoading: isLoadingBalance } = useBalances()
  const isMismatched = useIsMisMatched()

  if (!address || !chain) {
    return null
  }

  const shortenedAddress = shortenAddress(address)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={'rounded-lg !py-[13px] !px-4 !lowercase !gap-2'}>
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
            'rounded-[20px] p-6 bg-white focus:outline-none z-40 lg:shadow-large'
          )}
        >
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              <div
                className={clsx(
                  'h-10 w-10 bg-black rounded-full bg-cover relative',
                  { 'animate-spin': isLoadingEns }
                )}
                style={{ backgroundImage: `url(${avatar})` }}
              >
                {isLoadingEns ? (
                  <Loading
                    height={16}
                    width={16}
                    color="white"
                    className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
                  />
                ) : null}
              </div>
              <div className="flex flex-col ">
                <span className="font-medium">
                  {isLoadingEns ? '...' : name}
                </span>
                <span className="font-mono text-sm">{shortenedAddress}</span>
              </div>
            </div>

            <div className="text-button-dark-hover-bg font-medium">
              Current Network
            </div>

            <div className="flex flex-col gap-4">
              <span className="flex gap-2 items-center font-medium font-mono text-sm uppercase">
                {/* TODO find a way to get iconURL from RainbowKit, WAGMI doesn't have */}
                {/* {chain ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://ipfs.io/ipfs/${chain.icon.url.slice(7)}`}
                    className="h-4 w-4 rounded-full"
                    alt=""
                  />
                ) : null} */}
                {chain.name}
              </span>
              {isMismatched && switchNetwork ? (
                <Button
                  className="flex items-center gap-2 !justify-between w-full"
                  size="SMALL"
                  onClick={() => switchNetwork(l2.id)}
                >
                  Switch to Base
                  <ChainSwitch color="white" />
                </Button>
              ) : null}
            </div>

            <div className="text-button-dark-hover-bg font-medium">Balance</div>

            <div className="flex flex-col gap-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <Eth />{' '}
                {isLoadingBalance ? '...' : formatEther(l1Balance).slice(0, 10)}{' '}
                ETH
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <Base />{' '}
                {isLoadingBalance ? '...' : formatEther(l2Balance).slice(0, 10)}{' '}
                ETH
              </div>
            </div>

            <Button
              className="flex items-center gap-2 !justify-between w-full"
              variant="LIGHT"
              size="SMALL"
              onClick={() => disconnect()}
            >
              Disconnect Wallet{' '}
              <ArrowRight height={16} width={16} color={'#151515'} />
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

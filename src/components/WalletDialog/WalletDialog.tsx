import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import clsx from 'clsx'
import {
  useAddress,
  useChain,
  useDisconnect,
  useNetworkMismatch,
  useSwitchChain,
} from '@thirdweb-dev/react'
import { shortenAddress } from '@/utils/address'
import { ChainSwitch } from '../icons/ChainSwitch'
import useBalances from '@/utils/useBalances'
import { formatEther } from 'ethers/lib/utils'
import { Eth } from '../icons/Eth'
import { Separator } from '../Separator'
import { Base } from '../icons/Base'
import { ArrowRight } from '../icons/ArrowRight'
import { BaseGoerli } from '@thirdweb-dev/chains'
import { useEns } from '@/utils/useEns'
import { Loading } from '../icons/Loading'

interface WalletDialogProps {}

export const WalletDialog: FC<WalletDialogProps> = ({}) => {
  const address = useAddress()
  const { name, avatar, isLoading: isLoadingEns } = useEns()
  const isMismatched = useNetworkMismatch()
  const switchChain = useSwitchChain()
  const chain = useChain()
  const disconnect = useDisconnect()
  const { l1Balance, l2Balance } = useBalances()

  if (!address || !chain) {
    return null
  }

  const shortenedAddress = shortenAddress(address)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={'rounded-lg !py-2 !px-3'}>
          {name || shortenedAddress}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 backdrop-blur-[6px] data-[state=open]:animate-overlayShow fixed inset-0 z-40 lg:hidden" />
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
                {chain.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://ipfs.io/ipfs/${chain.icon.url.slice(7)}`}
                    className="h-4 w-4 rounded-full"
                    alt=""
                  />
                ) : null}
                {chain.title || chain.name}
              </span>
              {isMismatched ? (
                <Button
                  className="flex items-center gap-2 !justify-between w-full"
                  size="SMALL"
                  onClick={() => switchChain(BaseGoerli.chainId)}
                >
                  Switch to Base
                  <ChainSwitch color="white" />
                </Button>
              ) : null}
            </div>

            <div className="text-button-dark-hover-bg font-medium">Balance</div>

            <div className="flex flex-col gap-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <Eth /> {formatEther(l1Balance).slice(0, 10)} ETH
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <Base /> {formatEther(l2Balance).slice(0, 10)} Base ETH
              </div>
            </div>

            <Button
              className="flex items-center gap-2 !justify-between w-full"
              variant="LIGHT"
              size="SMALL"
              onClick={disconnect}
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

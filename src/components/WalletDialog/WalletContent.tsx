import { FC } from 'react'
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
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { useIsMisMatched } from '@/utils/useIsMismatched'

interface WalletContentProps {}

export const WalletContent: FC<WalletContentProps> = ({}) => {
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
    <div className="flex flex-col gap-6 p-6">
      <div className="flex gap-3">
        <div
          className={clsx('h-10 w-10 bg-black rounded-full bg-cover relative', {
            'animate-spin': isLoadingEns,
          })}
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
          <span className="desktop-headline">
            {isLoadingEns ? '...' : name}
          </span>
          <span className="desktop-label-2 text-[#444]">
            {shortenedAddress}
          </span>
        </div>
      </div>

      <div className="text-button-dark-hover-bg desktop-headline">
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
          <Button size="SMALL" onClick={() => switchNetwork(baseGoerli.id)}>
            Switch to Base
            <ChainSwitch color="white" className="ml-auto" />
          </Button>
        ) : null}
      </div>

      <div className="text-button-dark-hover-bg desktop-headline">Balance</div>

      <div className="flex flex-col gap-4 desktop-label-2">
        <div className="flex justify-between items-center">
          <Eth />{' '}
          {isLoadingBalance ? '...' : formatEther(l1Balance).slice(0, 10)} ETH
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <Base />{' '}
          {isLoadingBalance ? '...' : formatEther(l2Balance).slice(0, 10)} ETH
        </div>
      </div>

      <Button variant="LIGHT" size="SMALL" onClick={() => disconnect()}>
        Disconnect Wallet{' '}
        <ArrowRight
          height={16}
          width={16}
          color={'#151515'}
          className="ml-auto"
        />
      </Button>
    </div>
  )
}

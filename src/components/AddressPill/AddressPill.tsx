'use client'
import { shortenAddress } from '@/utils/address'
import { useEns } from '@/utils/useEns'
import clsx from 'clsx'
import { FC } from 'react'
import { Address } from 'viem'

interface AddressPillProps {
  address: Address
}

export const AddressPill: FC<AddressPillProps> = ({ address }) => {
  const { avatar, name } = useEns(address)
  return (
    <a
      className={clsx(
        'max-w-full overflow-hidden rounded-[58px] bg-ocs-blue text-white p-1 pr-2 w-max flex gap-2 items-center text-sm leading-none font-mono',
        { 'pl-2': !avatar }
      )}
      href={`https://profile.coinbase.com/${name || address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {avatar ? (
        <div
          className="h-5 w-5 bg-black rounded-full bg-cover relative"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      ) : null}

      <span className="desktop-label-2 text-white">
        {name || shortenAddress(address)}
      </span>
    </a>
  )
}

'use client'
import { shortenAddress } from '@/utils/address'
import { useEns } from '@/utils/useEns'
import clsx from 'clsx'
import { FC } from 'react'
import { Address } from 'viem'

interface AddressPillProps {
  address: Address
  className?: string
}

export const AddressPill: FC<AddressPillProps> = ({
  address,
  className = '',
}) => {
  const { avatar, name } = useEns(address)
  return (
    <a
      className={clsx(
        'max-w-full overflow-hidden rounded-[58px] bg-ocs-blue text-white p-1 pr-2 w-max flex gap-2 items-center desktop-label-2',
        { 'pl-2': !avatar },
        className
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

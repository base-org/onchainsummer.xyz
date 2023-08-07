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
    <span
      className={clsx(
        'max-w-full overflow-hidden rounded-[58px] bg-ocs-gray text-white p-1 pr-2 w-max flex gap-2 items-center text-sm leading-none font-mono',
        { 'pl-2': !avatar },
        className
      )}
    >
      {avatar ? (
        <div
          className="h-5 w-5 bg-black rounded-full bg-cover relative"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      ) : null}

      <span className="leading-[140%]">{name || shortenAddress(address)}</span>
    </span>
  )
}

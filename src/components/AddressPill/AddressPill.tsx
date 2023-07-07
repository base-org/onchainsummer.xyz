import { shortenAddress } from '@/utils/address'
import clsx from 'clsx'
import { FC } from 'react'

interface AddressPillProps {
  address: string
  className?: string
}

export const AddressPill: FC<AddressPillProps> = ({
  address,
  className = '',
}) => {
  return (
    <span
      className={clsx(
        'max-w-full overflow-hidden rounded-[58px] bg-ocs-pink p-1 pr-2 w-max flex gap-2 items-center text-sm leading-none mb-4',
        className
      )}
    >
      <div className="h-4 w-4 aspect-square rounded-[58px] bg-ocs-black" />
      {shortenAddress(address)}
    </span>
  )
}

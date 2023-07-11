import { Loading } from '@/components/icons/Loading'
import clsx from 'clsx'
import { FC } from 'react'

interface PendingProps {
  isPending: boolean
}

export const Pending: FC<PendingProps> = ({ isPending }) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-6 items-center w-full my-20 lg:h-full lg:my-0 lg:justify-center',
        {
          hidden: !isPending,
        }
      )}
    >
      <Loading className="animate-spin" />
      <span className="text-2xl">Loading Transaction</span>
    </div>
  )
}

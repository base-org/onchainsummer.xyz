import clsx from 'clsx'
import { FC } from 'react'

interface PendingProps {
  isPending: boolean
}

export const Pending: FC<PendingProps> = ({ isPending }) => {
  return (
    <div
      className={clsx('flex flex-col gap-6 items-center w-full', {
        hidden: !isPending,
      })}
    >
      <p>Minting...</p>
    </div>
  )
}

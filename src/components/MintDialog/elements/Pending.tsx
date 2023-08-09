import clsx from 'clsx'
import { FC } from 'react'
import { ViewOnExplorer } from './ViewOnExplorer'

interface PendingProps {
  isPendingConfirmation: boolean
  isPendingTx: boolean
  txHash?: string
}

export const Pending: FC<PendingProps> = ({
  isPendingConfirmation,
  isPendingTx,
  txHash,
}) => {
  const isPending = isPendingConfirmation || isPendingTx
  return (
    <div
      className={clsx(
        'flex flex-col gap-6 w-full lg:h-full lg:justify-center',
        {
          hidden: !isPending,
        }
      )}
    >
      <h2 className="desktop-h2">
        {isPendingTx
          ? 'Transaction processing...'
          : 'Waiting for wallet confirmation...'}
      </h2>
      <p className="desktop-body">
        {isPendingTx
          ? 'Your transaction is published, but we are waiting for it to be included in a block.'
          : 'Please confirm the transaction on your wallet.'}
      </p>
      <ViewOnExplorer txHash={txHash} />
    </div>
  )
}

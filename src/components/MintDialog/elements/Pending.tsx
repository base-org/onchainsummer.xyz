import { Button } from '@/components/Button'
import { Loading } from '@/components/icons/Loading'
import { isProd } from '@/config/chain'
import clsx from 'clsx'
import { FC } from 'react'

interface PendingProps {
  isPending: boolean
  txHash?: string
}

export const Pending: FC<PendingProps> = ({ isPending, txHash }) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-6 items-center w-full my-20 lg:h-full lg:my-0 lg:justify-center',
        {
          hidden: !isPending,
        }
      )}
    >
      <h2 className="text-[32px] font-display">Transaction Processing...</h2>
      <p>
        Your transaction is published, but we are waiting for it to be included
        in the block.
      </p>
      {txHash ? (
        <Button
          external
          href={`https://${isProd ? '' : 'goerli.'}basescan.org/tx/${txHash}`}
        >
          View on Explorer
        </Button>
      ) : null}
    </div>
  )
}

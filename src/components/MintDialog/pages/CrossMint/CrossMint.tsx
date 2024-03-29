import { FC } from 'react'
import { MintType, ModalPage } from '../../types'
import { useCrossmintEvents } from '@crossmint/client-sdk-react-ui'
import { isProd } from '@/config/chain'
import {
  isTransactionFulfillmentFailedPayload,
  isTransactionFulfillmentPayload,
} from './helpers'
import { CrossMintForm } from './CrossMintForm'
import clsx from 'clsx'
import { Pending } from '../../elements/Pending'
import { TxDetails } from '../../MintDialog'
import { useLogEvent } from '@/utils/useLogEvent'
import { events } from '@/utils/analytics'

interface CrossMintProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  quantity: number
  totalPrice: string
  orderIdentifier: string
  setOrderIdentifier: React.Dispatch<string>
  setTxDetails: React.Dispatch<TxDetails | null>
}

export const CrossMint: FC<CrossMintProps> = ({
  setPage,
  page,
  quantity,
  totalPrice,
  orderIdentifier,
  setOrderIdentifier,
  setTxDetails,
}) => {
  const { listenToMintingEvents } = useCrossmintEvents({
    environment: isProd ? 'production' : 'staging',
  }) // Specifying the environment is optional. It defaults to "production"
  const logEvent = useLogEvent()

  if (orderIdentifier) {
    listenToMintingEvents({ orderIdentifier }, (event) => {
      switch (event.type) {
        case 'order:process.started':
          break
        case 'order:process.finished':
          break
        case 'transaction:fulfillment.succeeded':
          if (isTransactionFulfillmentPayload(event.payload)) {
            const { contractAddress, tokenIds, txId } = event.payload
            setTxDetails({
              hash: txId,
            })
            logEvent?.(events.crossMintSuccess)
            setPage(ModalPage.MINT_SUCCESS)
          }
          break
        case 'transaction:fulfillment.failed':
          if (isTransactionFulfillmentFailedPayload(event.payload)) {
            const { orderIdentifier } = event.payload
            // TODO: Get txhash from crossmint
          }
          setPage(ModalPage.MINT_ERROR)
          break
        default:
          break
      }
    })
  }

  const isPending = page === ModalPage.CROSS_MINT_PENDING

  return (
    <>
      <Pending isPendingTx={isPending} isPendingConfirmation={false} />
      <div className={clsx({ hidden: isPending }, 'flex flex-col w-full')}>
        <CrossMintForm
          page={page}
          orderIdentifier={orderIdentifier}
          setOrderIdentifier={setOrderIdentifier}
          setPage={setPage}
          quantity={quantity}
          totalPrice={totalPrice}
        />
      </div>
    </>
  )
}

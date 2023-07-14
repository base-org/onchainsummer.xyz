import {
  CheckoutEventMap,
  CheckoutEvents,
  CrossmintCheckoutEvent,
} from '@crossmint/client-sdk-react-ui'

export interface TransactionFulfillmentPayload {
  contractAddress: string
  tokenIds: string[]
  txId: string
}

export function isTransactionFulfillmentPayload(
  payload: unknown
): payload is TransactionFulfillmentPayload {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'contractAddress' in payload &&
    'tokenIds' in payload &&
    'txId' in payload
  )
}

export function isTransactionFulfillmentFailedPayload(
  payload: unknown
): payload is CheckoutEventMap['payment:process.succeeded'] {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    typeof (payload as CheckoutEventMap['payment:process.succeeded'])
      .orderIdentifier === 'string'
  )
}

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

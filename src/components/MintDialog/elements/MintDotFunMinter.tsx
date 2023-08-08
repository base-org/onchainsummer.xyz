import { FC } from 'react'
import { Button } from '../../Button'
import { getClients } from '@/config/viem'
import { base, baseGoerli } from 'viem/chains'
import { isProd } from '@/config/chain'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { ModalPage } from '../types'
import { TxDetails } from '../MintDialog'
import { events } from '@/utils/analytics'
import { useLogEvent } from '@/utils/useLogEvent'

interface MintDotFunMinterProps {
  setPage: React.Dispatch<ModalPage>
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  totalPrice: string
}

export const MintDotFunMinter: FC<MintDotFunMinterProps> = ({
  setPage,
  setTxDetails,
  totalPrice,
}) => {
  const { mintDotFunStatus } = useMintDialogContext()
  const logEvent = useLogEvent()

  if (!mintDotFunStatus) {
    // TODO: This should never happen. Maybe a toast?
    return null
  }

  return (
    <Button
      onClick={async () => {
        const clients = await getClients()
        if (!clients) {
          return null
        }

        const { publicClient, walletClient } = clients

        const [account] = await walletClient.getAddresses()

        setPage(ModalPage.NATIVE_MINT_PENDING_CONFIRMATION)
        const hash = await walletClient.sendTransaction({
          account,
          to: mintDotFunStatus.tx.to,
          value: BigInt(mintDotFunStatus.tx.value),
          chain: isProd ? base : baseGoerli,
          // @ts-expect-error
          data: mintDotFunStatus.tx.data,
        })
        setPage(ModalPage.NATIVE_MINTING_PENDING_TX)

        setTxDetails({
          hash,
        })

        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        })

        if (transaction.status === 'success') {
          logEvent?.(events.mintDotFunSuccess)
          setPage(ModalPage.MINT_SUCCESS)
        } else {
          setPage(ModalPage.MINT_ERROR)
        }
      }}
    >
      Mint ({totalPrice} ETH)
    </Button>
  )
}

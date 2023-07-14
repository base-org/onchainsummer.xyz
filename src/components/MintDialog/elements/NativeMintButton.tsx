import { FC } from 'react'
import { Button } from '../../Button'
import { ModalPage } from '../types'
import { useAddress, useClaimNFT, useContract } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { TxDetails } from '../MintDialog'
import { useMintDialogContext } from '../Context/useMintDialogContext'

interface NativeMintButtonProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  quantity: number
  totalPrice: string
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  setMintError: React.Dispatch<React.SetStateAction<any | null>>
}

export const NativeMintButton: FC<NativeMintButtonProps> = ({
  page,
  setPage,
  quantity,
  totalPrice,
  setTxDetails,
  setMintError,
}) => {
  const isPending =
    page === ModalPage.NATIVE_MINTING_PENDING_TX ||
    page === ModalPage.NATIVE_MINT_PENDING_CONFIRMATION
  const { address } = useMintDialogContext()
  const userAddress = useAddress()
  const { data: contract, isLoading } = useContract(address)

  return (
    <Button
      className="!flex text-black text-lg font-medium w-full justify-between rounded-lg"
      disabled={isPending || isLoading}
      onClick={async () => {
        if (!contract) {
          return
        }
        try {
          const tx = await contract.erc721.claim.prepare(quantity)

          setPage(ModalPage.NATIVE_MINT_PENDING_CONFIRMATION)
          // just submit the tx
          const sentTransaction = await tx.send()

          const hash = sentTransaction.hash
          setTxDetails({ hash })
          setPage(ModalPage.NATIVE_MINTING_PENDING_TX)

          // wait for confirmation
          const receipt = await sentTransaction.wait()

          if (receipt.status === 1) {
            setPage(ModalPage.MINT_SUCCESS)
          } else {
            setPage(ModalPage.MINT_ERROR)
          }
        } catch (e) {
          // @ts-expect-error
          if (e.reason === 'user rejected transaction') {
            setPage(ModalPage.NATIVE_MINT)
            return
          }
          // TODO: Inform error
          setMintError(e)
          setPage(ModalPage.MINT_ERROR)
        }
      }}
    >
      <span>Mint ({totalPrice} ETH)</span>
    </Button>
  )
}

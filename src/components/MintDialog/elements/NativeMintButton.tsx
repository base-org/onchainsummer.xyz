import { FC } from 'react'
import { Button } from '../../Button'
import { ModalPage } from '../types'
import { useAddress, useClaimNFT, useContract } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { TxDetails } from '../MintDialog'

interface NativeMintButtonProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  address: string
  quantity: number
  totalPrice: string
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  setMintError: React.Dispatch<React.SetStateAction<any | null>>
}

export const NativeMintButton: FC<NativeMintButtonProps> = ({
  page,
  setPage,
  address,
  quantity,
  totalPrice,
  setTxDetails,
  setMintError,
}) => {
  const userAddress = useAddress()
  const { data: contract } = useContract(address)
  const { mutateAsync: claimNft, isLoading } = useClaimNFT(contract)

  const isPending = isLoading

  return (
    <Button
      className="!flex text-black text-lg font-medium w-full justify-between rounded-lg"
      disabled={isPending}
      onClick={async () => {
        setPage(ModalPage.NATIVE_MINTING_PENDING)

        try {
          const result = await claimNft({
            to: userAddress,
            quantity,
          })
          // @ts-expect-error
          const data = result[0] as {
            id: BigNumber
            receipt: { transactionHash: string }
          }

          const id = BigNumber.from(data?.id)

          const tokenId = id.toString()
          setTxDetails((prev) => ({
            hash: data?.receipt?.transactionHash,
            nft: { address, tokenIds: [tokenId] },
          }))

          setPage(ModalPage.MINT_SUCCESS)
        } catch (e) {
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

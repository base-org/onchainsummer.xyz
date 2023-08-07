import { FC, useEffect, useMemo, useState } from 'react'
import { Button } from '../../Button'
import { MintType, ModalPage } from '../types'
import { TxDetails } from '../MintDialog'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { useTw721Claim, writeTw721, writeZora721 } from '../../../../generated/contracts'
import { l2 } from '@/config/chain'
import { Address, useAccount, useWaitForTransaction } from 'wagmi'
import { BaseError, TransactionExecutionError, parseEther } from 'viem'

interface NativeMintButtonProps {
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  quantity: number
  totalPrice: string
  setTxDetails: React.Dispatch<React.SetStateAction<TxDetails | null>>
  setMintError: React.Dispatch<React.SetStateAction<any | null>>
  mintType: MintType
}

export const NativeMintButton: FC<NativeMintButtonProps> = ({
  page,
  setPage,
  quantity,
  totalPrice,
  setTxDetails,
  setMintError,
  mintType
}) => {
  const { address } = useMintDialogContext()
  const [hash, setHash] = useState<`0x${string}` | undefined>(undefined);
  const {address: account} = useAccount();
  const {data: txReceipt} = useWaitForTransaction({chainId: l2.id, hash: hash})
  const price = parseEther(totalPrice);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(Error);

  const isPending = useMemo(() => {
    return page === ModalPage.NATIVE_MINTING_PENDING_TX ||
    page === ModalPage.NATIVE_MINT_PENDING_CONFIRMATION
  }, [page])

  const mint = useMemo(() => {
    switch (mintType) {
      case MintType.Zora:
        return () => writeZora721({address: address, functionName: 'purchaseWithComment', args: [BigInt(quantity), 'Onchain Summer!'], value: price})
      case MintType.ThirdWeb:
        return () => writeTw721({address: address as Address, functionName: 'claim', chainId: l2.id, args: [account || '0x0', BigInt(quantity), '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', price / BigInt(quantity), { proof: [], quantityLimitPerWallet: 2n ** 256n - 1n, pricePerToken: price / BigInt(quantity), currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' }, '0x0'], value: price})
      default: 
        console.log(`invalid mint type ${mintType} for native mint`)
        setPage(ModalPage.MINT_ERROR)
    }
  }, [mintType, quantity, price, l2])

  useEffect(() => {
    if (!txReceipt) return;
    // TODO consider case where tx succeeded but mint failed 
    setPage(ModalPage.MINT_SUCCESS)
  }, [txReceipt, setPage])

  useEffect(() => {
    if (isLoading) {
      setPage(ModalPage.NATIVE_MINT_PENDING_CONFIRMATION)
      return
    } else if (isSuccess) {
      setPage(ModalPage.NATIVE_MINTING_PENDING_TX)
      return
    } else if (isError) {
      if ((error as TransactionExecutionError).cause.name == 'UserRejectedRequestError') {
        setPage(ModalPage.NATIVE_MINT)
        return
      }
      setPage(ModalPage.MINT_ERROR)
      return
    }
  }, [isLoading, isSuccess, isError, setPage])
  return (
    <Button
      className="!flex text-black text-lg font-medium w-full justify-between rounded-lg"
      disabled={isPending || isLoading}
      onClick={async () => {
        try {
          if (!mint) {
            return
          }

          setIsLoading(true)
          const data = await mint()
          setHash(data.hash)
          setTxDetails({hash: data.hash})
          setIsLoading(false)
          setIsSuccess(true)
          
        } catch (e) {
          setIsLoading(false)
          // TODO: Inform error
          setError(e as TransactionExecutionError)
          setIsError(true)
          setMintError(e)
          console.log(e)
        }
      }}
    >
      <span>Mint ({totalPrice} ETH)</span>
    </Button>
  )
}

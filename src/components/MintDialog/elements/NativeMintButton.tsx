import { FC, useEffect, useMemo, useState } from 'react'
import { Button } from '../../Button'
import { ModalPage } from '../types'
import { TxDetails } from '../MintDialog'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { useTw721Claim } from '../../../../generated/contracts'
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
}

export const NativeMintButton: FC<NativeMintButtonProps> = ({
  page,
  setPage,
  quantity,
  totalPrice,
  setTxDetails,
  setMintError,
}) => {
  const { address } = useMintDialogContext()
  const [hash, setHash] = useState<`0x${string}` | undefined>(undefined);
  const {address: account} = useAccount();
  const {data: txReceipt} = useWaitForTransaction({chainId: l2.id, hash: hash})
  const price = parseEther(totalPrice);
  
  const {isLoading, write, data, isSuccess, isError, error} = useTw721Claim({address: address as Address, chainId: l2.id, args: [account || '0x0', BigInt(quantity), '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', price / BigInt(quantity), { proof: [], quantityLimitPerWallet: 2n ** 256n - 1n, pricePerToken: price / BigInt(quantity), currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' }, '0x0'], value: price})
  const isPending = useMemo(() => {
    return page === ModalPage.NATIVE_MINTING_PENDING_TX ||
    page === ModalPage.NATIVE_MINT_PENDING_CONFIRMATION
  }, [page])

  useEffect(() => {
    if (!txReceipt) return;
    // TODO consider case where tx succeeded but mint failed 
    setPage(ModalPage.MINT_SUCCESS)
  }, [txReceipt, setPage])

  useEffect(() => {
    if (!data) return;
    // could clean up and pas txDetails to this button
    setHash(data.hash)
    setTxDetails({ hash: data?.hash})
  }, [data, setHash, setTxDetails])

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
        if (!write) return
        try {
          write();
        } catch (e) {
          // @ts-expect-error
          if (e.reason === 'user rejected transaction') {
            setPage(ModalPage.NATIVE_MINT)
            return
          }
          // TODO: Inform error
          setMintError(e)
          console.log(e)
          setPage(ModalPage.MINT_ERROR)
        }
      }}
    >
      <span>Mint ({totalPrice} ETH)</span>
    </Button>
  )
}

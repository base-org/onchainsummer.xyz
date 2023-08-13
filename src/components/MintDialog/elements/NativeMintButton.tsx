import { FC, useEffect, useMemo, useState } from 'react'
import { Button } from '../../Button'
import { MintType, ModalPage, siteDataSuffix } from '../types'
import { TxDetails } from '../MintDialog'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { tw721ABI, writeTw721, writeZora721 } from '../../../../generated/contracts'
import { l2 } from '@/config/chain'
import { Address, useAccount, usePublicClient, useWaitForTransaction, useWalletClient } from 'wagmi'
import { TransactionExecutionError, getAddress, parseEther } from 'viem'
import { useLogEvent } from '@/utils/useLogEvent'
import { events } from '@/utils/analytics'

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
  const { info: {address, mintType, creatorAddress, dataSuffix} } = useMintDialogContext()
  const [hash, setHash] = useState<`0x${string}` | undefined>(undefined)
  const { address: account } = useAccount()
  const { data: txReceipt } = useWaitForTransaction({
    chainId: l2.id,
    hash: hash,
  })
  const price = parseEther(totalPrice)

  const {data: walletClient} = useWalletClient({chainId: l2.id});
  const publicClient = usePublicClient({chainId: l2.id});

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(Error)
  const logEvent = useLogEvent()

  const isPending = useMemo(() => {
    return (
      page === ModalPage.NATIVE_MINTING_PENDING_TX ||
      page === ModalPage.NATIVE_MINT_PENDING_CONFIRMATION
    )
  }, [page])

  const mint = useMemo(() => {
    switch (mintType) {
      case MintType.Zora:
        return async () => {
          if (!account) {
            setPage(ModalPage.MINT_ERROR)
            return
          }
          return (await writeZora721({
            address: address,
            functionName: 'mintWithRewards',
            args: [account, BigInt(quantity), '', getAddress(creatorAddress)],
            value: price,
          })).hash
        }
      case MintType.ThirdWeb:
        return async () => {
          if (!account || !walletClient || !publicClient) {
            setPage(ModalPage.MINT_ERROR)
            return
          }
          const {request} = await publicClient.simulateContract({
            abi: tw721ABI,
              address: address as Address,
              functionName: 'claim',
              args: [
                account,
                BigInt(quantity),
                '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
                price / BigInt(quantity),
                {
                  proof: [],
                  quantityLimitPerWallet: 2n ** 256n - 1n,
                  pricePerToken: price / BigInt(quantity),
                  currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
                },
                '0x0',
              ],
              value: price,
              dataSuffix: dataSuffix
            })
            return walletClient.writeContract(request)
        }
      default:
        console.log(`invalid mint type ${mintType} for native mint`)
        setPage(ModalPage.MINT_ERROR)
    }
  }, [mintType, setPage, account, address, quantity, creatorAddress, price, publicClient, walletClient, dataSuffix])

  useEffect(() => {
    if (!txReceipt) return
    // TODO consider case where tx succeeded but mint failed
    logEvent?.(events.nativeMintSuccess)
    setPage(ModalPage.MINT_SUCCESS)
  }, [txReceipt, setPage, logEvent])

  useEffect(() => {
    if (isLoading) {
      setPage(ModalPage.NATIVE_MINT_PENDING_CONFIRMATION)
      return
    } else if (isSuccess) {
      setPage(ModalPage.NATIVE_MINTING_PENDING_TX)
      return
    } else if (isError) {
      if (
        (error as TransactionExecutionError).cause.name ==
        'UserRejectedRequestError'
      ) {
        setPage(ModalPage.NATIVE_MINT)
        return
      }
      setPage(ModalPage.MINT_ERROR)
      return
    }
  }, [isLoading, isSuccess, isError, setPage, error])

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
          if (!data) {
            setPage(ModalPage.MINT_ERROR)
            return
          }
          setHash(data)
          setTxDetails({ hash: data })
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

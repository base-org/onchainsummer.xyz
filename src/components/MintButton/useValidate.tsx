import { readZora721, readTw721 } from '../../../generated/contracts'
import { Address, useAccount } from 'wagmi'
import { useMemo, useCallback, useState, useEffect } from 'react'
import { MintType } from '@/components/MintDialog/types'
import { MintStatus as MintDotFunStatus } from '@/utils/mintDotFunTypes'
import { formatEther, parseEther } from 'viem'
import { l2 } from '@/config/chain'
import { Checkmark } from '../icons/Checkmark'

export type Validation = {
  valid: boolean
  message: React.ReactNode
  isValidating: boolean
  price: string
  mintStatus: MintStatus
  maxClaimablePerWallet?: string
}

type ValidationLocal = {
  status: MintStatus
  price: bigint
  maxPerAddress?: bigint
}

export enum MintStatus {
  Mintable,
  NotStarted,
  Ended,
  MintedOut,
  UserMintedMax,
  // catch all for mint.fun
  NotMintable,
}

export const useValidate = (
  address: Address,
  mintType: MintType,
  passedPrice: string,
  mintDotFunStatus?: MintDotFunStatus
): Validation => {
  const { address: account } = useAccount()
  const [isLoading, setIsLoading] = useState(true)
  const [validation, setValidation] = useState<ValidationLocal>({
    status: MintStatus.Mintable,
    price: 0n,
  })

  const fetchStatus = useCallback(async () => {
    if (!account || address == '0x0') return
    switch (mintType) {
      case MintType.MintDotFun:
        setValidation(validateMintDotFun(mintDotFunStatus))
        break
      case MintType.ThirdWeb:
        setValidation(await validateThirdWeb(address, account))
        break
      case MintType.Zora:
        setValidation(await validateZora(address, account))
        break
      case MintType.External:
        // TODO, need to filter on dates from file
        setValidation({
          status: MintStatus.Mintable,
          price: parseEther(passedPrice),
        })
        break
      default:
        console.error(`error: could not match type ${mintType}`)
    }
    setIsLoading(false)
  }, [account, address, mintType, mintDotFunStatus, passedPrice])

  const message: React.ReactNode = useMemo(() => {
    switch (validation.status) {
      case MintStatus.Ended:
        return 'Mint Ended'
      case MintStatus.NotStarted:
        return 'Mint has not started'
      case MintStatus.MintedOut:
        return 'All NFTs have been claimed'
      case MintStatus.UserMintedMax:
        return (
          <>
            NFT Minted
            <Checkmark className="ml-auto" />
          </>
        )
    }
  }, [validation])

  useEffect(() => {
    fetchStatus()
  }, [address, account, mintType, mintDotFunStatus, fetchStatus])

  return {
    valid: validation.status == MintStatus.Mintable,
    isValidating: isLoading,
    message: message || '',
    price: formatEther(validation.price),
    maxClaimablePerWallet: validation.maxPerAddress?.toString(),
    mintStatus: validation.status,
  }
}

function validateMintDotFun(
  mintDotFunStatus: MintDotFunStatus | undefined
): ValidationLocal {
  return {
    status: mintDotFunStatus?.isMintable
      ? MintStatus.Mintable
      : MintStatus.NotMintable,
    price: BigInt(mintDotFunStatus?.price || 0),
  }
}

async function validateZora(
  address: Address,
  account: Address
): Promise<ValidationLocal> {
  const saleDetails = await readZora721({
    address: address,
    functionName: 'saleDetails',
    chainId: l2.id,
  })
  const fee = await readZora721({
    address: address,
    functionName: 'zoraFeeForAmount',
    chainId: l2.id,
    args: [1n],
  })
  const price = fee[1] + saleDetails.publicSalePrice
  const now = Date.now() / 1000

  if (now < saleDetails.publicSaleStart) {
    return {
      status: MintStatus.NotStarted,
      maxPerAddress: saleDetails.maxSalePurchasePerAddress,
      price: price,
    }
  }

  if (now > saleDetails.publicSaleEnd) {
    return {
      status: MintStatus.Ended,
      maxPerAddress: saleDetails.maxSalePurchasePerAddress,
      price: price,
    }
  }

  const accountMinted = await readZora721({
    address: address,
    functionName: 'mintedPerAddress',
    args: [account],
    chainId: l2.id,
  })
  if (accountMinted.publicMints > saleDetails.maxSalePurchasePerAddress) {
    return {
      status: MintStatus.UserMintedMax,
      maxPerAddress: saleDetails.maxSalePurchasePerAddress,
      price: price,
    }
  }

  const config = await readZora721({
    address: address,
    functionName: 'config',
    chainId: l2.id,
  })
  const totalMinted = await readZora721({
    address: address,
    functionName: 'totalSupply',
    chainId: l2.id,
  })

  if (totalMinted >= config[1]) {
    return {
      status: MintStatus.MintedOut,
      maxPerAddress: saleDetails.maxSalePurchasePerAddress,
      price: price,
    }
  }

  return {
    status: MintStatus.Mintable,
    maxPerAddress: saleDetails.maxSalePurchasePerAddress,
    price: price,
  }
}

async function validateThirdWeb(
  address: Address,
  account: Address
): Promise<ValidationLocal> {
  const activeId = await readTw721({
    address: address,
    functionName: 'getActiveClaimConditionId',
    chainId: l2.id,
  })
  const condition = await readTw721({
    address: address,
    functionName: 'getClaimConditionById',
    args: [activeId],
    chainId: l2.id,
  })
  const now = Date.now() / 1000

  if (now < condition.startTimestamp) {
    return { status: MintStatus.NotStarted, price: condition.pricePerToken }
  }

  if (condition.supplyClaimed >= condition.maxClaimableSupply) {
    return { status: MintStatus.MintedOut, price: condition.pricePerToken }
  }

  const userMints = await readTw721({
    address: address,
    functionName: 'getSupplyClaimedByWallet',
    args: [activeId, account],
    chainId: l2.id,
  })

  if (userMints >= condition.quantityLimitPerWallet) {
    return {
      status: MintStatus.UserMintedMax,
      maxPerAddress: condition.quantityLimitPerWallet,
      price: condition.pricePerToken,
    }
  }

  return { status: MintStatus.Mintable, price: condition.pricePerToken }
}

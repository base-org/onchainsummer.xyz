
import { readZora721, readTw721 } from '../../../generated/contracts'
import { Address, useAccount } from 'wagmi'
import { useMemo, useCallback, useState, useEffect } from 'react'
import { MintType } from '@/components/MintDialog/types'
import { MintStatus as MintDotFunStatus } from '@/utils/mintDotFunTypes'

export type Validation = {
  valid: boolean
  message: string
  isValidating: boolean
  maxClaimablePerWallet?: string
}

type ValidationLocal = {
  status: MintStatus,
  maxPerAddress?: bigint
}

enum MintStatus {
  Mintable,
  NotStarted,
  Ended,
  MintedOut, 
  UserMintedMax, 
  // catch all for mint.fun
  NotMintable
}

export const useValidate = (address: Address, mintType: MintType, mintDotFunStatus?: MintDotFunStatus): Validation => {
  const {address: account} = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [validation, setValidation] = useState<ValidationLocal>({status: MintStatus.Mintable})

  const fetchStatus = useCallback(async () => {
    if (!account || address == '0x0') return
    switch (mintType) {
      case MintType.MintDotFun:
        setValidation(validateMintDotFun(mintDotFunStatus));
        break;
      case MintType.ThirdWeb:
        setValidation(await validateThirdWeb(address, account));
        break;
      case MintType.Zora:
        setValidation(await validateZora(address, account));
        break;
      case MintType.External:
        // TODO, need to filter on dates from file
        setValidation({status: MintStatus.Mintable})
        break;
      default: 
      console.log(`error: could not match type ${mintType}`)
    }
    setIsLoading(false)
      
  }, [address, account, mintType, mintDotFunStatus]);

  const message = useMemo(() => {
    switch (validation.status) {
      case MintStatus.Ended: 
        return 'Mint Ended';
      case MintStatus.NotStarted:
        return 'Mint has not started'
      case MintStatus.MintedOut: 
        return 'All NFTs have been claimed'
      case MintStatus.UserMintedMax:
        return validation.maxPerAddress ? `NFT Minted (${validation.maxPerAddress} per address)` : 'NFT Minted'
    }
  }, [validation])

  useEffect(() => {
    fetchStatus();
  }, [address, account, mintType, mintDotFunStatus])

  return {valid: validation.status == MintStatus.Mintable, isValidating: isLoading, message: message || '', maxClaimablePerWallet: validation.maxPerAddress?.toString()}
}

function validateMintDotFun(mintDotFunStatus: MintDotFunStatus | undefined): ValidationLocal {
  return {status: mintDotFunStatus?.isMintable ? MintStatus.Mintable : MintStatus.NotMintable}
}

async function validateZora(address: Address, account: Address) : Promise<ValidationLocal> {
  const saleDetails = await readZora721({address: address, functionName: 'saleDetails'})
  const now = Date.now() / 1000

  if (now < saleDetails.publicSaleStart) {
    return {status: MintStatus.NotStarted}
  }

  if (now > saleDetails.publicSaleEnd) {
    return {status: MintStatus.Ended}
  }

  const accountMinted = await readZora721({address: address, functionName: 'mintedPerAddress', args: [account]})
  if (accountMinted.publicMints > saleDetails.maxSalePurchasePerAddress) {
    return {status: MintStatus.UserMintedMax, maxPerAddress: saleDetails.maxSalePurchasePerAddress}
  }
  
  const config = await readZora721({address: address, functionName: 'config'})
  const totalMinted = await readZora721({address: address, functionName: 'totalSupply'})

  if (totalMinted >= config[1]) {
    return {status: MintStatus.MintedOut}
  }

  return {status: MintStatus.Mintable}
}

async function validateThirdWeb(address: Address, account: Address) : Promise<ValidationLocal> {
  const activeId = await readTw721({address: address, functionName: 'getActiveClaimConditionId'})
  const condition = await readTw721({address: address, functionName: 'getClaimConditionById', args: [activeId]})
  const now = Date.now() / 1000

  if (now < condition.startTimestamp) {
    return {status: MintStatus.NotStarted}
  }

  if (condition.supplyClaimed >= condition.maxClaimableSupply) {
    return {status: MintStatus.MintedOut}
  }

  const userMints = await readTw721({address: address, functionName: 'getSupplyClaimedByWallet', args: [activeId, account]})

  if (userMints >= condition.quantityLimitPerWallet) {
    return {status: MintStatus.UserMintedMax, maxPerAddress: condition.quantityLimitPerWallet}
  }

  return {status: MintStatus.Mintable}
}
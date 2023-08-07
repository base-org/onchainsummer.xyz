import { MintStatus } from '@/utils/mintDotFunTypes'
import {
  useTw721GetClaimConditionById,
  useTw721GetActiveClaimConditionId,
  useTw721GetSupplyClaimedByWallet,
} from '../../../generated/tw721'
import { Address, useAccount } from 'wagmi'
import { l2 } from '@/config/chain'
import { Checkmark } from '../icons/Checkmark'

type Validation = {
  valid: boolean
  message: React.ReactNode
  isValidating: boolean
  maxClaimablePerWallet?: string
}

export const useValidate = (
  address: string,
  mintDotFunStatus?: MintStatus
): Validation => {
  const { address: account } = useAccount()
  const { data: activeId, isLoading: isLoadingActiveId } =
    useTw721GetActiveClaimConditionId({
      address: address as Address,
      chainId: l2.id,
    })
  const { data: condition, isLoading: isLoadingCondition } =
    useTw721GetClaimConditionById({
      address: address as Address,
      chainId: l2.id,
      args: [activeId || BigInt(0)],
    })
  const { data: userMints, isLoading: isLoadingMints } =
    useTw721GetSupplyClaimedByWallet({
      address: address as Address,
      chainId: l2.id,
      args: [activeId || BigInt(0), account || '0x0'],
    })

  if (mintDotFunStatus) {
    return {
      valid: mintDotFunStatus.isMintable,
      message: mintDotFunStatus.isMintable ? '' : 'Mint not Available',
      isValidating: false,
    }
  }

  const maxSupply = condition?.maxClaimableSupply || 2n ** 256n - 1n
  const isLimitedSupply =
    condition?.maxClaimableSupply && maxSupply < 2n ** 256n
  const soldOut = isLimitedSupply && condition?.supplyClaimed == maxSupply
  const startTime = condition?.startTimestamp
  const now = Date.now() / 1000
  const maxClaimablePerWallet: bigint =
    condition?.quantityLimitPerWallet || BigInt(0)

  if (maxClaimablePerWallet > 0) {
    if (userMints && userMints == maxClaimablePerWallet) {
      return {
        valid: false,
        message: (
          <>
            NFT Minted <Checkmark />
          </>
        ),
        isValidating: false,
        maxClaimablePerWallet: maxClaimablePerWallet.toString(),
      }
    }
  }

  const hasStarted = startTime ? startTime < now : false

  const message = soldOut
    ? 'All NFTs have been claimed'
    : !hasStarted
    ? 'Minting has not started'
    : ''

  return {
    valid: !soldOut && hasStarted,
    message: message,
    isValidating: isLoadingActiveId || isLoadingCondition || isLoadingMints,
    maxClaimablePerWallet: maxClaimablePerWallet.toString(),
  }
}

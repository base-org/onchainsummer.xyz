import { useClaimConditions, useContract } from '@thirdweb-dev/react'
import { is } from 'date-fns/locale'
import { BigNumber, constants } from 'ethers'

type Validation = {
  valid: boolean
  message: string
  isValidating: boolean
}

export const useValidate = (address: string): Validation => {
  const { contract } = useContract(address)
  const { data, isLoading } = useClaimConditions(contract)

  const availableSupply = data?.[0].availableSupply ?? constants.Zero
  const available = BigNumber.from(availableSupply).gt(constants.Zero) ?? false
  const startTime = data?.[0].startTime
  const now = Date.now()

  const hasStarted = startTime ? new Date(startTime).getTime() < now : false

  const message = !available
    ? 'No tokens available'
    : !hasStarted
    ? 'Minting has not started'
    : ''

  return {
    valid: available && hasStarted,
    message: message,
    isValidating: isLoading,
  }
}

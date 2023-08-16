import { useMintDialogContext } from '@/components/MintDialog/Context/useMintDialogContext'
import { parseEther } from 'viem'

export const l2GasToMint = parseEther('0.0006')
export const l1GasToBridge = parseEther('0.01')

export function useMintThresholds() {
  const {
    info: { price },
  } = useMintDialogContext()
  const priceWei = parseEther(price)

  return {
    minL1BalanceWei: l1GasToBridge + priceWei,
    minL2BalanceWei: l2GasToMint + priceWei,
  }
}

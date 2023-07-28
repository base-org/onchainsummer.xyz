import { parseEther } from 'ethers/lib/utils'

export const getGasData = async () => {
  return {
    l2GasEstimate: parseEther('0.0006'),
    l1GasToBridge: parseEther('0.1'),
  }
}

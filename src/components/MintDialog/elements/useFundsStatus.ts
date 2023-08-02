import { useEffect, useState } from 'react'
import { checkBalances } from './checkBalances'
import { ModalPage } from '../types'
import { useAccount } from 'wagmi'

type FundsStatus = 'insufficient' | 'sufficient' | 'bridge'

export const useFundsStatus = (
  totalPrice: string,
  open: boolean,
  page?: ModalPage
) => {
  const {address} = useAccount()

  const [fundsStatus, setFundsStatus] = useState<FundsStatus>('sufficient')

  useEffect(() => {
    const getFundsStatus = async () => {
      if (
        !address ||
        !open ||
        (page !== ModalPage.NATIVE_MINT && page !== ModalPage.BRIDGE_SUCCESS)
      )
        return

      const status = await checkBalances(address, totalPrice)

      setFundsStatus(status)
    }
    getFundsStatus()
  }, [address, open, totalPrice, page])

  return {
    fundsStatus,
  }
}

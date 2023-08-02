import { useInterval } from '@/utils/useInterval'
import { useCallback } from 'react'
import { ModalPage } from '../../types'
import { checkBalances } from '../../elements/checkBalances'
import { useAccount } from 'wagmi'

export const usePollBalance = (
  setPage: React.Dispatch<ModalPage>,
  totalPrice: string
) => {
  const {address} = useAccount()
  const cb = useCallback(async () => {
    if (!address) return

    const status = await checkBalances(address, totalPrice)

    if (status === 'sufficient') {
      setPage(ModalPage.NATIVE_MINT)
    } else if (status === 'bridge') {
      setPage(ModalPage.BRIDGE)
    }
  }, [address, setPage, totalPrice])

  useInterval(cb, 1000)
}

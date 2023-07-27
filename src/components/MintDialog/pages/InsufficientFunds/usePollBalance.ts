import { useInterval } from '@/utils/useInterval'
import { useAddress } from '@thirdweb-dev/react'
import { useCallback } from 'react'
import { ModalPage } from '../../types'
import { checkBalances } from '../../elements/checkBalances'

export const usePollBalance = (
  setPage: React.Dispatch<ModalPage>,
  totalPrice: string
) => {
  const address = useAddress()
  const cb = useCallback(async () => {
    if (!address) return

    const status = await checkBalances(address, totalPrice)

    console.log('status', status)

    if (status === 'sufficient') {
      setPage(ModalPage.NATIVE_MINT)
    } else if (status === 'bridge') {
      setPage(ModalPage.BRIDGE)
    }
  }, [address, setPage, totalPrice])

  useInterval(cb, 1000)
}

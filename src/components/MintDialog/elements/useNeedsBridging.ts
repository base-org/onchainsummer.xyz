import { useBalance } from '@thirdweb-dev/react'
import { constants } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import { useState } from 'react'

export const useNeedsBridging = (totalPrice: string, open: boolean) => {
  const { data } = useBalance()
  const [needsBriding, setNeedsBridging] = useState<boolean | undefined>(
    undefined
  )

  const diff = parseEther(totalPrice).sub(data?.value || constants.Zero)

  if (!open) {
    return { needsBriding: false }
  }

  if (typeof needsBriding === 'boolean') {
    return { needsBriding }
  }

  const result = confirm('To bridge or not to bridge?')
  setNeedsBridging(result)
  return {
    needsBriding: result,
  }
}

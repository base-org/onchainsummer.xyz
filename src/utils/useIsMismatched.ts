import { l2 } from '@/config/chain'
import { useMemo } from 'react'
import { useNetwork } from 'wagmi'

export function useIsMisMatched(): boolean {
  const { chain } = useNetwork()

  const isMismatched = useMemo(() => {
    if (!chain) return false
    return chain.id != l2.id
  }, [chain])

  return isMismatched
}

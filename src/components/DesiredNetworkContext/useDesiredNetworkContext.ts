import { useContext } from 'react'
import { DesiredNetworkContext } from './DesiredNetworkContext'

export const useDesiredNetworkContext = () => {
  const context = useContext(DesiredNetworkContext)

  if (!context) {
    throw new Error('DesiredNetworkContext not found')
  }

  return context
}

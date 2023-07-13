import { useContext } from 'react'
import { MintDialogContext } from './Context'

export const useMintDialogContext = () => {
  const context = useContext(MintDialogContext)

  if (!context) {
    throw new Error('MintDialogContext not found')
  }

  return context
}

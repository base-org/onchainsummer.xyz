import { FC } from 'react'
import { MintDialogContext, MintDialogContextType } from './Context'

interface MintDialogProviderProps extends MintDialogContextType {
  children: React.ReactNode
}

export const Provider: FC<MintDialogProviderProps> = ({
  children,
  ...context
}) => {
  return (
    <MintDialogContext.Provider value={context}>
      {children}
    </MintDialogContext.Provider>
  )
}

import { FC, useState } from 'react'
import { MintDialogContext, MintDialogInfo } from './Context'

interface MintDialogProviderProps extends MintDialogInfo {
  children: React.ReactNode
}

export const Provider: FC<MintDialogProviderProps> = ({
  children,
  ...context
}) => {
  const [info, setInfo] = useState<MintDialogInfo>(context)

  return (
    <MintDialogContext.Provider value={{ info, setInfo }}>
      {children}
    </MintDialogContext.Provider>
  )
}

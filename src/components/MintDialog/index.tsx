import { MintDialog } from './MintDialog'
import { MintDialogContextType } from './Context/Context'
import { Provider } from './Context/Provider'
import { FC } from 'react'

const Wrapper: FC<MintDialogContextType> = ({ ...context }) => {
  return (
    <Provider {...context}>
      <MintDialog />
    </Provider>
  )
}

export { Wrapper as MintDialog }

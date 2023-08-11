import { MintDialog } from './MintDialog'
import { MintDialogInfo } from './Context/Context'
import { Provider } from './Context/Provider'
import { FC } from 'react'
import { ButtonProps } from '../Button'

const Wrapper: FC<MintDialogInfo & { size?: ButtonProps['size'] }> = ({
  size,
  ...context
}) => {
  return (
    <Provider {...context}>
      <MintDialog size={size} />
    </Provider>
  )
}

export { Wrapper as MintDialog }

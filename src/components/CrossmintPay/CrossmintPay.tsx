import { FC } from 'react'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'

interface CrossmintPayButtonProps {
  clientId: string
}

export const CrossmintPay: FC<CrossmintPayButtonProps> = ({ clientId }) => {
  return (
    <CrossmintPayButton
      clientId={clientId}
      environment="staging"
      mintConfig={{
        type: 'erc-721',
        totalPrice: '0.0001',
        _quantity: 1,
      }}
    />
  )
}

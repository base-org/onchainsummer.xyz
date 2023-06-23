import { FC, useState } from 'react'
import { CrossmintPaymentElement } from '@crossmint/client-sdk-react-ui'
import { useAddress } from '@thirdweb-dev/react'

interface CrossMintFormProps {
  clientId: string
  price: string
}

const environment =
  process.env.NODE_ENV === 'production' ? 'production' : 'staging'

export const CrossMintForm: FC<CrossMintFormProps> = ({ clientId, price }) => {
  const walletAddress = useAddress()
  const [email, setEmail] = useState('')
  console.log(environment)
  console.log(clientId)
  console.log(price)
  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CrossmintPaymentElement
        clientId={clientId}
        environment={environment}
        recipient={{
          email: email,
          wallet: walletAddress,
        }}
        currency="USD" // TODO: Do we support EUR?
        locale="en-US" // TODO: Do we support es-ES?
        mintConfig={{
          type: 'erc-721',
          quantity: '1',
          totalPrice: price,
          // your custom minting arguments...
        }}
        //@ts-expect-error
        onEvent={function onEvent(event) {
          console.log(event)
          switch (event.type) {
            case 'payment:preparation.succeeded':
              console.log('payment:preparation.succeeded')
              // Triggered when checkout is ready for payment.
              break
            case 'payment:process.started':
              console.log('payment:process.started')
              // Triggered when the user has finished entering their card details and clicked Pay.
              break
            case 'quote:status.changed':
              console.log('quote:status.changed')
              // Triggered when the price is calculated or if the price changes.
              break
            case 'payment:process.succeeded':
              // Triggered when payment has been successfully captured.
              console.log('payment:process.succeeded')
              break
            case 'payment:process.rejected':
              // Triggered if a user's card has been rejected.
              console.log('payment:process.rejected')
              break
            case 'payment:preparation.failed':
              // Triggered if a failure has occurred after checkout.
              console.log('payment:preparation.failed')
              break
          }
        }}
      />
    </>
  )
}

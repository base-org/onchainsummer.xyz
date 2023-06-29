import { FC, useState } from 'react'
import {
  CrossmintPaymentElement,
  CheckoutEventMap,
} from '@crossmint/client-sdk-react-ui'
import { useAddress } from '@thirdweb-dev/react'
import { MintState } from './MintDialog'
import { isProd } from '@/config/chain'
import { DropType } from '@/config/partners/types'

function isPaymentProcessedPayload(
  payload: unknown
): payload is CheckoutEventMap['payment:process.succeeded'] {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    typeof (payload as CheckoutEventMap['payment:process.succeeded'])
      .orderIdentifier === 'string'
  )
}

interface CrossMintFormProps {
  clientId: string
  type: DropType
  price: string
  mintState: MintState
  setMintState: React.Dispatch<MintState>
  orderIdentifier: string
  setOrderIdentifier: React.Dispatch<string>
}

const environment = isProd ? 'production' : 'staging'

export const CrossMintForm: FC<CrossMintFormProps> = ({
  clientId,
  price,
  mintState,
  setMintState,
  orderIdentifier,
  setOrderIdentifier,
  type,
}) => {
  const paymentProcessing = mintState === MintState.PROCESSING
  const walletAddress = useAddress()
  const [email, setEmail] = useState('')

  return (
    <>
      <h3 className="my-2 font-medium text-lg">Mint with Credit Card</h3>
      {mintState === MintState.PREPARED_CM ? (
        <div className="w-full max-w-[300px] flex flex-col gap-1 mb-2.5 font-inter mt-0.5 ml-0.5 mr-0.5 px-0.5">
          <label
            htmlFor="crossmint-email"
            className="text-sm font-medium leading-[1.15] text-black"
          >
            Email
          </label>
          <input
            id="crossmint-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-[#e6e6e6] rounded-[4px] text-[16px] leading-[18.8px] outline-none shadow-crossMintEmail focus:border-[hsla(210,96%,45%,50%)] focus:shadow-crossMintEmailFocus transition-[background_0.15s_ease,border_0.15s_ease,box-shadow_0.15s_ease,color_0.15s_ease]"
          />
        </div>
      ) : null}
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
          type,
          quantity: '1',
          totalPrice: price,
        }}
        uiConfig={{
          fontSizeBase: '1rem',
          spacingUnit: '0.25rem',
          borderRadius: '0.25rem',
        }}
        //@ts-expect-error
        onEvent={function onEvent(event) {
          switch (event.type) {
            case 'payment:preparation.succeeded':
              if (!paymentProcessing) {
                setMintState(MintState.PREPARED_CM)
              }
              break
            case 'payment:process.started':
              // Triggered when the user has finished entering their card details and clicked Pay.
              setMintState(MintState.PROCESSING)
              break
            case 'quote:status.changed':
              if (!paymentProcessing) {
                setMintState(MintState.PREPARED_CM)
              }
              // Triggered when the price is calculated or if the price changes.
              break
            case 'payment:process.succeeded':
              if (isPaymentProcessedPayload(event.payload)) {
                const { orderIdentifier: payloadOrderIdentifier } =
                  event.payload

                if (orderIdentifier !== payloadOrderIdentifier) {
                  setOrderIdentifier(payloadOrderIdentifier)
                }
              }
              // Triggered when payment has been successfully captured.
              break
            case 'payment:process.rejected':
              // Triggered if a user's card has been rejected.
              setMintState(MintState.REJECTED)
              break
            case 'payment:preparation.failed':
              // Triggered if a failure has occurred after checkout.
              setMintState(MintState.ERROR)
              break
          }
        }}
      />
    </>
  )
}

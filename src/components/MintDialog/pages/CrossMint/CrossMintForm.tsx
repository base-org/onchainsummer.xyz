import { FC, useState } from 'react'
import {
  CrossmintPaymentElement,
  CheckoutEventMap,
} from '@crossmint/client-sdk-react-ui'
import { isProd } from '@/config/chain'
import { MintType, ModalPage } from '../../types'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { useAccount } from 'wagmi'

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
  page: ModalPage
  setPage: React.Dispatch<ModalPage>
  orderIdentifier: string
  setOrderIdentifier: React.Dispatch<string>
  quantity: number
  totalPrice: string
  mintType: MintType
}

const environment = isProd ? 'production' : 'staging'

export const CrossMintForm: FC<CrossMintFormProps> = ({
  clientId,
  page,
  setPage,
  orderIdentifier,
  setOrderIdentifier,
  quantity,
  totalPrice,
  mintType
}) => {
  const [prepared, setPrepared] = useState(false)
  const paymentProcessing = page === ModalPage.CROSS_MINT_PENDING
  const { address: walletAddress } = useAccount()
  const [email, setEmail] = useState('')

  return (
    <div className="flex flex-col w-full h-full items-center overflow-scroll hide-scrollbar">
      <h3 className="my-2 font-medium text-lg">Mint with Credit Card</h3>
      {prepared ? (
        <div className="w-full max-w-[294px] flex flex-col gap-1 mb-2.5 font-inter mt-0.5 ml-0.5 mr-0.5 px-0.5">
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
            className="p-3 border border-[#e6e6e6] rounded-[100px] text-[16px] leading-[18.8px] outline-none shadow-crossMintEmail focus:border-[hsla(210,96%,45%,50%)] focus:shadow-crossMintEmailFocus transition-[background_0.15s_ease,border_0.15s_ease,box-shadow_0.15s_ease,color_0.15s_ease]"
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
        mintConfig={mintType == MintType.Zora ?  {
          quantity: quantity,
          totalPrice: totalPrice,
          comment: "Onchain Summer!"
        } : {
          quantity,
          totalPrice,
        }}
        uiConfig={{
          fontSizeBase: '1rem',
          spacingUnit: '0.25rem',
          borderRadius: '100px',
          fontWeightSecondary: '500',
        }}
        // @ts-expect-error
        onEvent={function onEvent(event) {
          switch (event.type) {
            case 'payment:preparation.succeeded':
              if (!paymentProcessing) {
                setPrepared(true)
              }
              break
            case 'payment:process.started':
              // Triggered when the user has finished entering their card details and clicked Pay.
              break
            case 'quote:status.changed':
              if (!paymentProcessing) {
                setPrepared(true)
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
                setPage(ModalPage.CROSS_MINT_PENDING)
              }
              // Triggered when payment has been successfully captured.
              break
            case 'payment:process.rejected':
              // Triggered if a user's card has been rejected.
              setPage(ModalPage.CROSS_MINT_PAYMENT_FAILED)
              break
            case 'payment:preparation.failed':
              // TODO: Inform error
              setPage(ModalPage.MINT_ERROR)
              break
            default: 
              console.log(`Unmatched crossmint ${event}`)
          }
        }}
      />
      {prepared && (
        <>
          <Button
            variant="LIGHT"
            className={clsx(
              'w-full max-w-[294px] flex flex-col gap-1 mb-4 !font-inter !py-2 !capitalize z-50',
              { '-mt-5': prepared }
            )}
            onClick={() => {
              setPage(ModalPage.NATIVE_MINT)
            }}
          >
            Go Back
          </Button>
          <p className="w-full max-w-[294px] text-xs text-center">
            By paying, you accept{' '}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.crossmint.com/legal/terms-of-service"
            >
              Crossmint&apos;s Terms
            </a>
          </p>
        </>
      )}
    </div>
  )
}

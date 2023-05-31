'use client'
import { NextPage } from 'next'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'

const clientId = process.env.NEXT_PUBLIC_CROSS_MINT_CLIENT_ID

if (!clientId) {
  throw new Error('need cross mint env')
}

const Page: NextPage = () => {
  return (
    <main>
      <h1>Cross Mint Test</h1>
      <CrossmintPayButton
        clientId={clientId}
        environment="staging"
        mintConfig={{
          type: 'erc-721',
          totalPrice: '0.001',
          _quantity: '1',
          _currency: 'CAD',
          _pricePerToken: '1',
          _proofs: ['1'],
          _proofMaxQuantityPerTransaction: '0',
        }}
      />
    </main>
  )
}

export default Page

'use client'

import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'
import { contracts } from '@/config/contracts'

const Page = ({ params }: { params: { address: `0x${string}` } }) => {
  const contract = contracts.find(
    (contract) => contract.address === params.address
  )

  if (!contract) {
    return null
  }

  return (
    <main>
      <h1>Cross Mint Test</h1>
      <CrossmintPayButton
        clientId={contract.crossMintClientId}
        environment="staging"
        mintConfig={{
          type: 'erc-721',
          totalPrice: '0.0001',
          _quantity: 1,
        }}
      />
    </main>
  )
}

export default Page

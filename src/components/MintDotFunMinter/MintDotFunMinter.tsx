import { FC } from 'react'
import { Button } from '../Button'
import { useAddress } from '@thirdweb-dev/react'
import { ConnectDialog } from '../ConnectDialog'
import { getWalletClient } from '@/config/viem'
import { mainnet, goerli } from 'viem/chains'
import { isProd } from '@/config/chain'

type MintDotFunMinterProps = {
  mintStatus: {
    price: string
    isMintable: boolean
    tx: {
      data: string
      quantity: string
      to: `0x${string}`
      tokenId: string
      value: string
    }
  }
}

export const MintDotFunMinter: FC<MintDotFunMinterProps> = ({ mintStatus }) => {
  const userAddress = useAddress()

  if (!userAddress) {
    return <ConnectDialog title="Mint" />
  }

  return (
    <Button
      size="SMALL"
      className="mx-0 lg:ml-2 lg:mx-2 grow lg:grow-0"
      onClick={async () => {
        const walletClient = await getWalletClient()
        if (!walletClient) {
          return null
        }
        const [account] = await walletClient.getAddresses()

        const hash = await walletClient.sendTransaction({
          account,
          to: mintStatus.tx.to,
          value: BigInt(mintStatus.tx.value),
          chain: isProd ? mainnet : goerli,
          // @ts-expect-error
          data: mintStatus.tx.data,
        })

        // TODO: Handle success/failure state. Maybe a toast?
      }}
    >
      Mint
    </Button>
  )
}

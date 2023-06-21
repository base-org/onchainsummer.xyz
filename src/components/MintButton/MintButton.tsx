'use client'

import { FC } from 'react'
import {
  useContract,
  useClaimNFT,
  useAddress,
  useConnect,
  metamaskWallet,
} from '@thirdweb-dev/react'
import { Button } from '../Button'
import { ConnectDialog } from '../ConnectDialog/ConnectDialog'

type MintButtonProps = {
  price: string
}

const metamaskConfig = metamaskWallet()

export const MintButton: FC<MintButtonProps> = ({ price }) => {
  const address = useAddress()
  const connect = useConnect()

  const { data: contract } = useContract(
    '0x93E83744B06Df9EA97846D03330E706c9Ab1221B'
  )

  const { mutate: claimNft, isLoading } = useClaimNFT(contract)

  if (!address) {
    return (
      <ConnectDialog />
      // <Button
      //   onClick={async () => {
      //     const wallet = await connect(metamaskConfig)
      //     console.log('connected to ', wallet)
      //   }}
      // >
      //   Mint {price} ETH
      // </Button>
    )
  }

  return (
    <Button
      disabled={isLoading}
      onClick={() =>
        claimNft({
          to: address,
          quantity: 1,
        })
      }
    >
      Mint {price} ETH
    </Button>
  )
}

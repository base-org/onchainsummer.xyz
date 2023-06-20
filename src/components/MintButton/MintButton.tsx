'use client'

import { FC } from 'react'
import { useContract, useClaimNFT, useAddress } from '@thirdweb-dev/react'
import { Button } from '../Button'

type MintButtonProps = {
  price: string
}

export const MintButton: FC<MintButtonProps> = ({ price }) => {
  const address = useAddress()
  const { data: contract } = useContract(
    '0x93E83744B06Df9EA97846D03330E706c9Ab1221B'
  )

  const { mutate: claimNft, isLoading } = useClaimNFT(contract)

  return (
    <div className="flex flex-col w-full gap-2">
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
    </div>
  )
}

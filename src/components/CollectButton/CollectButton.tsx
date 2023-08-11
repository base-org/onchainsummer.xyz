import { FC } from 'react'
import { Button, ButtonProps } from '../Button'
import { RightArrow } from '../icons/RightArrow'

interface CollectButtonProps {
  size?: ButtonProps['size']
  address: string
  openSeaLink?: string
}

export const CollectButton: FC<CollectButtonProps> = ({
  size,
  address,
  openSeaLink,
}) => {
  const href =
    openSeaLink || `https://nft.coinbase.com/collection/base/${address}`
  return (
    <Button size={size} href={href} external>
      <>
        Collect <RightArrow fill="white" className="ml-auto" />
      </>
    </Button>
  )
}

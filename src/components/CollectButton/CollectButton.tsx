import { FC, useState } from 'react'
import { Button, ButtonProps } from '../Button'
import { RightArrow } from '../icons/RightArrow'
import { CollectModal, FloorAsk } from '@reservoir0x/reservoir-kit-ui'
import { useAccount, useSwitchNetwork } from 'wagmi'
import { ConnectDialog } from '@/components/ConnectDialog'
import { useIsMisMatched } from '@/utils/useIsMismatched'
import { l2 } from '@/config/chain'

interface CollectButtonProps {
  size?: ButtonProps['size']
  address: string
  floorAsk?: FloorAsk
}

export const CollectButton: FC<CollectButtonProps> = ({
  size,
  address,
  floorAsk,
}) => {
  const [collectOpen, setCollectOpen] = useState(false)
  const { address: account } = useAccount()
  const { switchNetworkAsync } = useSwitchNetwork()
  const isMisMatched = useIsMisMatched()

  let message = floorAsk?.price?.amount?.decimal
    ? `Collect (${floorAsk.price?.amount?.decimal} ${
        floorAsk.price?.currency?.symbol || 'ETH'
      })`
    : 'Collect'
  if (!account) {
    return (
      <ConnectDialog
        title={<div className="flex gap-2.5 items-center px-3">{message}</div>}
      />
    )
  }

  if (isMisMatched) {
    return (
      <Button
        size={size}
        onClick={() => {
          if (switchNetworkAsync) {
            switchNetworkAsync(l2.id).then((chain) => {
              if (chain.id === l2.id) {
                setCollectOpen(true)
              }
            })
          }
        }}
      >
        <>
          {message} <RightArrow fill="white" className="ml-auto" />
        </>
      </Button>
    )
  }

  return (
    <CollectModal
      trigger={
        <Button size={size}>
          <>
            {message} <RightArrow fill="white" className="ml-auto" />
          </>
        </Button>
      }
      collectionId={address}
      copyOverrides={{
        sweepCtaBuy: 'Collect',
        sweepTitle: 'Collect',
      }}
      openState={[collectOpen, setCollectOpen]}
    />
  )
}

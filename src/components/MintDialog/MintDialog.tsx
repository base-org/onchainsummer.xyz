import { Address } from '@thirdweb-dev/sdk'
import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'
import { Button } from '../Button'
import { Close } from '../icons/Close'

import { useClaimNFT, useContract } from '@thirdweb-dev/react'
import { Separator } from '../Separator'
import { CrossMintForm } from './CrossMintForm'

type MintDialogProps = {
  address: Address
  crossMintClientId: string
  price: string
}

export const MintDialog: FC<MintDialogProps> = ({
  price,
  address,
  crossMintClientId,
}) => {
  const { data: contract } = useContract(address)

  const { mutate: claimNft, isLoading } = useClaimNFT(contract)

  const isDisabled = isLoading

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Mint {price} ETH</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 backdrop-blur-[6px] data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg px-6 py-8 bg-white focus:outline-none z-40 overflow-auto">
          <div className="relative flex flex-col w-full items-center">
            <Dialog.Title className="text-neutral-900 m-0 text-2xl font-medium">
              Mint
            </Dialog.Title>
            <Dialog.Description className="text-black/50 gap-2 font-text font-medium">
              Either Mint with ETH or your credit card below.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="text-black absolute top-[50%] translate-y-[-50%] right-0 inline-flex h-[32px] w-[24px] appearance-none items-center justify-center focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Close />
              </button>
            </Dialog.Close>
          </div>
          <Separator className="my-6" />
          <Button
            variant="SECONDARY"
            className="!flex text-black text-lg font-medium w-full justify-between rounded-lg"
            disabled={isDisabled}
            onClick={() =>
              claimNft({
                to: address,
                quantity: 1,
              })
            }
          >
            <span>MINT WITH ETH</span>
          </Button>
          <Separator className="my-6" />
          <div className="flex flex-col items-center justify-start">
            <CrossMintForm clientId={crossMintClientId} price={price} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

import { Button } from '@/components/Button'

import { FC, useMemo } from 'react'
import { ModalPage } from '../../types'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight } from '@/components/icons/ArrowRight'
import { useAddress, useBalance } from '@thirdweb-dev/react'
import { useDifference } from '../../elements/useDifference'
import { Copy } from '@/components/icons/Copy'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { PartnerInfo } from '../../elements/PartnerInfo'
import { ViewOnExplorer } from '../../elements/ViewOnExplorer'

interface MintErrorProps {
  setPage: React.Dispatch<ModalPage>
  setCrossMintOrderIdentifier: React.Dispatch<string>
  mintError: any | null
  totalPrice: string
  txHash: string
}

export const MintError: FC<MintErrorProps> = ({
  setPage,
  mintError,
  totalPrice,
  txHash,
}) => {
  const { dropImage, dropName, partnerIcon, partnerName } =
    useMintDialogContext()

  const reason = mintError?.reason
  const { data: balance } = useBalance()
  const address = useAddress()

  const { display: difference } = useDifference(totalPrice)

  const title = useMemo(() => {
    switch (reason) {
      case '!Tokens':
        return 'Oops, the mint sold out!'
      default:
        return 'Something went wrong'
    }
  }, [reason])

  const content = useMemo(() => {
    switch (reason) {
      case '!Tokens':
        return (
          <>
            <span>
              Unfortunately, your transaction didn’t go through because the mint
              sold out. Feel free to check out our upcoming mints.
            </span>
          </>
        )
      default:
        return (
          <span>
            Unfortunately, your transaction didn’t go through. Check your
            transaction for more details or <b>contact the Base team</b>.
          </span>
        )
    }
  }, [reason])

  const actions = useMemo(() => {
    switch (reason) {
      case '!Tokens':
        return (
          <>
            <Dialog.Close asChild>
              <Button>Go to Home</Button>
            </Dialog.Close>
          </>
        )
      default:
        return (
          <>
            <ViewOnExplorer txHash={txHash} />
            <Dialog.Close asChild>
              <Button
                variant="LIGHT"
                onClick={() => setPage(ModalPage.NATIVE_MINT)}
              >
                Close
              </Button>
            </Dialog.Close>
          </>
        )
    }
  }, [reason, setPage, txHash])

  return (
    <>
      <PartnerInfo />

      <Dialog.Title className="text-[32px] lg:mt-4 font-display">
        {title}
      </Dialog.Title>
      <Dialog.Description className="flex flex-col w-full gap-4">
        {content}
      </Dialog.Description>
      {actions}
    </>
  )
}

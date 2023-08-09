import { Button } from '@/components/Button'

import { FC } from 'react'
import { ModalPage } from '../../types'
import * as Dialog from '@radix-ui/react-dialog'
import { PartnerInfo } from '../../elements/PartnerInfo'
import { ViewOnExplorer } from '../../elements/ViewOnExplorer'
import dialogClasses from '@/components/dialog.module.css'
import clsx from 'clsx'
import { RightArrow } from '@/components/icons/RightArrow'

interface BridgeErrorProps {
  setPage: React.Dispatch<ModalPage>
  l1TxHash: string
  l2TxHash: string
}

export const BridgeError: FC<BridgeErrorProps> = ({
  setPage,
  l1TxHash,
  l2TxHash,
}) => {
  return (
    <>
      <PartnerInfo />

      <Dialog.Title className={clsx('desktop-h2', 'lg:mt-4')}>
        Bridge Error
      </Dialog.Title>
      <Dialog.Description className="flex flex-col w-full gap-4">
        <span className="desktop-body">
          Unfortunately, your transaction didn’t go through. Check your
          transaction for more details or{' '}
          <a href="https://base.org/discord">
            <b className="desktop-headline">contact the Base team</b>
          </a>
          .
        </span>
      </Dialog.Description>
      {l1TxHash ? (
        <ViewOnExplorer
          txHash={l1TxHash}
          isl1
          title={
            <>
              View l1 tx <RightArrow />
            </>
          }
        />
      ) : null}
      {l2TxHash ? (
        <ViewOnExplorer
          txHash={l2TxHash}
          title={
            <>
              View l2 tx <RightArrow />
            </>
          }
        />
      ) : null}
      <Dialog.Close asChild>
        <Button variant="LIGHT" onClick={() => setPage(ModalPage.NATIVE_MINT)}>
          Close
        </Button>
      </Dialog.Close>
    </>
  )
}

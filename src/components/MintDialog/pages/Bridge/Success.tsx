import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { EthBase } from '@/components/icons/EthBase'
import { Button } from '@/components/Button'
import { ModalPage } from '../../types'
import { scanUrl } from '@/utils/scanUrl'
import dialogClasses from '@/components/dialog.module.css'
interface SuccessProps {
  setPage: React.Dispatch<ModalPage>
  amount: string
  l2TxHash: string
}

export const Success: FC<SuccessProps> = ({ amount, l2TxHash, setPage }) => {
  return (
    <div className="flex flex-col md:my-auto gap-6 md:gap-8">
      <EthBase height={68} width={68} />
      <Dialog.Title className={'desktop-h2'}>
        Awesome! You’ve bridged {amount} ETH onto Base.
      </Dialog.Title>

      <div className="flex flex-col gap-4">
        <Button onClick={() => setPage(ModalPage.NATIVE_MINT)}>Mint NFT</Button>
        <Button href={scanUrl(false, l2TxHash)} external variant="LIGHT">
          View on explorer
        </Button>
      </div>
    </div>
  )
}

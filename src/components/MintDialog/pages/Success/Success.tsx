import { MintSuccess } from '@/components/icons/MintSuccess'
import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalPage } from '../../types'
import { Button } from '@/components/Button'

interface SuccessProps {
  setPage: React.Dispatch<ModalPage>
  setCrossMintOrderIdentifier: React.Dispatch<string>
}

export const Success: FC<SuccessProps> = ({
  setPage,
  setCrossMintOrderIdentifier,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <MintSuccess />
      <Dialog.Close asChild>
        <Button
          className="!rounded-lg w-full"
          onClick={() => {
            setPage(ModalPage.NATIVE_MINT)
            // setNftDetails(null)
            setCrossMintOrderIdentifier('')
          }}
        >
          Return
        </Button>
      </Dialog.Close>
    </div>
  )
}

// {nftDetails ? (
//   <div className="flex flex-col gap-2">
//     <p className="text-sm">Your NFT is ready:</p>
//     <div>
//       <b>Address :</b> {nftDetails.address}
//     </div>
//     <div>
//       <b>Token IDs :</b>{' '}
//       {nftDetails.tokenIds.map((id) => id).join(', ')}
//     </div>
//     {/* <a
//       className="text-sm text-blue-500"
//       href={`https://opensea.io/assets/${nftDetails.address}/${nftDetails.tokenId}`}
//       target="_blank"
//       rel="noreferrer"
//     >
//       View on OpenSea
//     </a> */}
//   </div>
// ) : null}

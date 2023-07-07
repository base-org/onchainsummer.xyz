import { Button } from '@/components/Button'
import { MintFailure } from '@/components/icons/MintFailure'
import { FC } from 'react'
import { ModalPage } from '../../types'

interface MintErrorProps {
  setPage: React.Dispatch<ModalPage>
  setCrossMintOrderIdentifier: React.Dispatch<string>
}

export const MintError: FC<MintErrorProps> = ({
  setPage,
  setCrossMintOrderIdentifier,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <MintFailure />
      <Button
        onClick={() => {
          setPage(ModalPage.NATIVE_MINT)
          // setNftDetails(null)
          setCrossMintOrderIdentifier('')
        }}
        className="!rounded-lg w-full"
      >
        Try again
      </Button>
    </div>
  )
}

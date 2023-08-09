import { FC } from 'react'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import Image from 'next/image'

export const PartnerInfo: FC = () => {
  const { partnerIcon, partnerName, mintDotFunStatus } = useMintDialogContext()

  if (!!mintDotFunStatus) {
    return null
  }

  return (
    <div className="flex gap-2">
      <div className="relative z-20 h-6 w-6">
        <Image
          src={partnerIcon}
          alt={`${partnerName} Icon`}
          fill
          className="!object-top"
        />
      </div>
      <span className="font-medium">{partnerName}</span>
    </div>
  )
}

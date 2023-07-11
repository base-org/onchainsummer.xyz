import Image from 'next/image'
import { FC } from 'react'
import { useMintDialogContext } from '../Context/useMintDialogContext'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { dropImage, dropName } = useMintDialogContext()
  return (
    <div className="relative flex flex-col w-full gap-4">
      <div className="relative z-20 w-full aspect-video mb-1">
        <Image
          src={dropImage}
          alt={dropName}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {children}
    </div>
  )
}

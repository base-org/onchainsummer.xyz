import Image from 'next/image'
import { FC } from 'react'
import { useMintDialogContext } from '../Context/useMintDialogContext'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { dropImage, dropName } = useMintDialogContext()
  return (
    <div className="relative grid gap-4 lg:grid-cols-2 lg:gap-16 h-full">
      <div className="relative z-20 w-full aspect-video lg:aspect-square mb-1 lg:mb-0">
        <Image
          src={dropImage}
          alt={dropName}
          fill
          className="object-cover rounded-lg md:rounded-[20px]"
        />
      </div>
      <div className="flex flex-col w-full gap-4 h-full overflow-scroll">
        {children}
      </div>
    </div>
  )
}

import { FC } from 'react'

type HomeIconProps = {}

export const HomeIcon: FC<HomeIconProps> = ({}) => {
  return (
    <div className="flex items-center font-sans text-lg leading-none tracking-normal">
      <span className="flex flex-col items-center uppercase">
        <b className="font-medium">onchain</b>
        <div>
          <span className="w-[10px] h-[10px] inline-block bg-yellow-gradient rounded-full mx-1"></span>
          <b className="font-medium">summer</b>
        </div>
      </span>
    </div>
  )
}

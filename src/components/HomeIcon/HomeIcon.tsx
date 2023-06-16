import { FC } from 'react'

type HomeIconProps = {}

export const HomeIcon: FC<HomeIconProps> = ({}) => {
  return (
    <div className="flex items-center font-mono text-lg leading-none">
      <span className="flex items-center uppercase">
        <b>onchain</b>
        <span className="w-[10px] h-[10px] inline-block bg-yellow-gradient rounded-full mx-1"></span>
        <b className="text-transparent bg-clip-text bg-blue-gradient">summer</b>
      </span>
    </div>
  )
}

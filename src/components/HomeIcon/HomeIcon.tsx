import { FC } from 'react'

type HomeIconProps = {}

export const HomeIcon: FC<HomeIconProps> = ({}) => {
  return (
    <div className="flex gap-2 items-center font-mono text-lg leading-none">
      <span>🟡</span>
      <span>
        <b>onchain</b>summer
      </span>
    </div>
  )
}

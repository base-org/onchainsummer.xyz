import { FC } from 'react'
import { IconProps } from './type'

export const MirrorLogo: FC<IconProps> = ({
  height = 24,
  width = 24,
  fill = '#151515',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.79688 9.10145C2.79688 4.07486 6.87173 0 11.8983 0V0C16.9249 0 20.9998 4.07486 20.9998 9.10145V22.2222C20.9998 23.2041 20.2038 24 19.222 24H4.57465C3.59282 24 2.79688 23.2041 2.79688 22.2222V9.10145Z"
        fill={fill}
      />
    </svg>
  )
}

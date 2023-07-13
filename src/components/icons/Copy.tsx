import { FC } from 'react'
import { IconProps } from './type'

export const Copy: FC<IconProps> = ({
  width = 16,
  height = 17,
  className = '',
  color = '#858585',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      className={className}
    >
      <path fill={color} d="M4.5.5v3h2v-1h7v8h-1v2h3V.5h-11Z" />
      <path fill={color} d="M9.5 6.5v8h-7v-8h7Zm2-2H.5v12h11v-12Z" />
    </svg>
  )
}

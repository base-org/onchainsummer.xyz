import { FC } from 'react'
import { IconProps } from './type'

export const Hamburger: FC<IconProps> = ({
  height = 24,
  width = 24,
  color = '#141414',
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 5.75h14.5M4.75 18.25h14.5M4.75 12h14.5"
      />
    </svg>
  )
}

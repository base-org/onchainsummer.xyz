import { FC } from 'react'
import { IconProps } from './type'

export const YellowDot: FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3)">
        <path
          d="M7.62 15.24C11.8284 15.24 15.24 11.8284 15.24 7.62C15.24 3.41159 11.8284 0 7.62 0C3.41159 0 0 3.41159 0 7.62C0 11.8284 3.41159 15.24 7.62 15.24Z"
          fill="#FCD22D"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="15.24" height="15.24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

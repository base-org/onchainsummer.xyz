import { FC } from 'react'
import { IconProps } from './type'

export const Eth: FC<IconProps> = ({
  height = 17,
  width = 16,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 17"
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <g fill="#858585" clip-path="url(#a)">
        <path d="M8 .5 3 8.833l5 2.334 5-2.334L8 .5Z" />
        <path d="m3 10.5 5 6 5-6-5 2.333L3 10.5Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

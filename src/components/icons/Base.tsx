import { FC } from 'react'
import { IconProps } from './type'

export const Base: FC<IconProps> = ({
  height = 16,
  width = 16,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <g clip-path="url(#a)">
        <path fill="#0052FF" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M7.981 13.635a5.634 5.634 0 1 0-5.614-6.108h8.36v.938h-8.36a5.634 5.634 0 0 0 5.614 5.17Z"
          clip-rule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

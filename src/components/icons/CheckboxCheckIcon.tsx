import { FC } from 'react'
import { IconProps } from './type'

export const CheckboxCheckIcon: FC<IconProps> = ({
  width = 13,
  height = 12,
  className = '',
  fill = '#FFF',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      className={className}
    >
      <path
        fill={fill}
        d="m12.787 2.545-8 8.633L.613 6.674l1.174-1.088 3 3.238 6.826-7.367 1.174 1.088Z"
      />
    </svg>
  )
}

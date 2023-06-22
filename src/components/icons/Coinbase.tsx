import { FC } from 'react'
import { IconProps } from './type'

export const Coinbase: FC<IconProps> = ({
  height = 32,
  width = 32,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#0052FF" rx="16" />
      <path
        fill="#fff"
        d="M16.006 21.35a5.349 5.349 0 0 1-5.35-5.35 5.349 5.349 0 0 1 10.62-.892h5.39c-.454-5.493-5.05-9.808-10.66-9.808-5.907 0-10.7 4.792-10.7 10.7 0 5.908 4.793 10.7 10.7 10.7 5.61 0 10.206-4.315 10.66-9.808h-5.394a5.344 5.344 0 0 1-5.266 4.458Z"
      />
    </svg>
  )
}

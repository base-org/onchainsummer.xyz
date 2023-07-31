import { FC } from 'react'
import { IconProps } from './type'

export const CoinbaseWallet: FC<IconProps> = ({
  height = 32,
  width = 32,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 41"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 20.5C0 31.5457 8.95428 40.5 20 40.5C31.0457 40.5 40 31.5457 40 20.5C40 9.45428 31.0457 0.5 20 0.5C8.95428 0.5 0 9.45428 0 20.5ZM14.8889 14.0556C14.1525 14.0556 13.5556 14.6525 13.5556 15.3889V25.6111C13.5556 26.3475 14.1525 26.9444 14.8889 26.9444H25.1111C25.8475 26.9444 26.4444 26.3475 26.4444 25.6111V15.3889C26.4444 14.6525 25.8475 14.0556 25.1111 14.0556H14.8889Z"
        fill="#0052FF"
      />
    </svg>
  )
}

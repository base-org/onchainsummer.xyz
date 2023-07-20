import { FC } from 'react'
import { IconProps } from './type'

export const EthBase: FC<IconProps> = ({
  width = 28,
  height = 28,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <path
        fill="#627EEA"
        d="M12 25c6.627 0 12-5.373 12-12S18.627 1 12 1 0 6.373 0 13s5.373 12 12 12Z"
      />
      <path
        fill="#fff"
        fillOpacity=".602"
        d="M11.999 4v6.377l5.248 2.408L11.999 4Z"
      />
      <path fill="#fff" d="M11.999 4 6.75 12.785l5.249-2.408V4Z" />
      <path
        fill="#fff"
        fillOpacity=".602"
        d="M11.999 16.918v4.332l5.251-7.46L12 16.917Z"
      />
      <path fill="#fff" d="M11.999 21.25v-4.333L6.75 13.789l5.249 7.461Z" />
      <path
        fill="#fff"
        fillOpacity=".2"
        d="m11.999 15.915 5.248-3.13-5.248-2.406v5.536Z"
      />
      <path
        fill="#fff"
        fillOpacity=".602"
        d="m6.75 12.786 5.249 3.13v-5.537L6.75 12.786Z"
      />
      <g clipPath="url(#a)">
        <path fill="#0052FF" d="M22 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M21.986 24.224a4.225 4.225 0 1 0-4.21-4.58h6.27v.703h-6.271a4.226 4.226 0 0 0 4.21 3.877Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M16 14h12v12H16z" />
        </clipPath>
      </defs>
    </svg>
  )
}

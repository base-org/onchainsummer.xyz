import { FC } from 'react'

export const MintFailure: FC = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="81"
      fill="none"
      viewBox="0 0 80 81"
    >
      <g clipPath="url(#a)">
        <path fill="#fff" d="M0 .5h80v80H0z" />
        <path
          fill="url(#b)"
          d="M50.353 1.87C71.695 7.577 84.337 29.512 78.63 50.853 72.923 72.195 50.987 84.838 29.646 79.13 8.324 73.423-4.338 51.488 1.369 30.147 7.076 8.805 29.012-3.837 50.353 1.87Z"
        />
        <path
          fill="#fff"
          d="M40.319 37.138 51.456 26l3.182 3.181L43.501 40.32l11.137 11.137-3.181 3.182-11.138-11.137-11.138 11.137L26 51.457l11.138-11.138L26 29.181 29.181 26 40.32 37.138Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="125.514"
          x2="19.325"
          y1="237.554"
          y2="-7.187"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".34" stopColor="#FF2C2C" />
          <stop offset="1" stopColor="#FF922D" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h80v80H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

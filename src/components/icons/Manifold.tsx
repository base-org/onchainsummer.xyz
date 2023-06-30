import { FC } from 'react'

interface ManifoldProps {}

export const Manifold: FC<ManifoldProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165.42 165.42"
      width="32"
      height="32"
    >
      <g>
        <g>
          <path
            d="M134.38 44.77H11.73L34 69.56h78.76L89 93.27 78.65 82.91H43.6l37.74 37.74h35.05l-15.73-15.73h14.62l38.4-38.41Z"
            style={{ fill: '#2a2b2d ', fillRule: 'evenodd' }}
          />
          <path d="M0 0h165.42v165.42H0z" style={{ fill: 'none' }} />
        </g>
      </g>
    </svg>
  )
}

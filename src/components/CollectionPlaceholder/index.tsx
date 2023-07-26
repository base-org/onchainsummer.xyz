import ContentLoader from 'react-content-loader'
import { FC } from 'react'

interface CollectionPlaceholderProps {
  height?: number
  foregroundColor?: string
  backgroundColor?: string
}

export const CollectionPlaceholder: FC<CollectionPlaceholderProps> = ({
  height,
  foregroundColor = '#ecebeb',
  backgroundColor = 'white',
}) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={height}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    className="rounded-2xl my-6 first:mt-0 last:mb-0"
  >
    <rect
      x="0"
      y="0"
      width="100%"
      height={height}
      className="rounded-2xl my-6 first:mt-0 last:mb-0"
    />
  </ContentLoader>
)

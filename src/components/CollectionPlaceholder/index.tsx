import ContentLoader from 'react-content-loader'

export const CollectionPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'214px'}
    backgroundColor="white"
    foregroundColor="#ecebeb"
    className="rounded-2xl my-6 first:mt-0 last:mb-0"
  >
    <rect x="0" y="0" width="100%" height="214" />
  </ContentLoader>
)

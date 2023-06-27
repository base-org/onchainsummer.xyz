import ContentLoader from 'react-content-loader'

export const CollectionPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="20" height="20" />
    <rect x="30" y="0" rx="5" ry="5" width="200" height="20" />
    <rect x="30" y="30" rx="5" ry="5" width="500" height="20" />
    <rect x="960" y="0" rx="5" ry="5" width="100" height="40" />
    <rect x="1080" y="0" rx="5" ry="5" width="100" height="40" />
    <rect x="30" y="70" rx="5" ry="5" width="50" height="50" />
    <rect x="90" y="70" rx="5" ry="5" width="50" height="50" />
    <rect x="150" y="70" rx="5" ry="5" width="50" height="50" />
  </ContentLoader>
)

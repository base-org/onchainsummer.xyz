import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const manifold: Partner = {
  slug: 'manifold',
  name: 'Manifold',
  url: 'https://studio.manifold.xyz/',
  description:
    'Manifold is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/manifold/icon.png',
  banner: '/partners/manifold/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@manifold_labs',
  drops: [
    {
      image: '/partners/manifold/drops/drop.jpeg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Manifold Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default manifold

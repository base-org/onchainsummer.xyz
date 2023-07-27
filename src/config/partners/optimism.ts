import { Partner } from './types'
import { unlimited } from '../test-contracts'

const optimism: Partner = {
  slug: 'optimism',
  name: 'Optimism',
  url: 'https://www.optimism.io/',
  description:
    'optimism is a community owned platform for creators to monetize their digital work.',
  brandColor: 'rgb(216,46,42)',
  icon: '/partners/optimism/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@optimismFND',
  drops: [
    {
      image: '/partners/optimism/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Optimism Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 24, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 25, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default optimism

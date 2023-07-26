import { Partner } from './types'
import { unlimited, limited } from '../test-contracts'

const pixelmon: Partner = {
  slug: 'pixelmon',
  name: 'Pixelmon',
  url: 'https://www.pixelmon.ai/',
  description:
    'Pixelmon is a community owned platform for creators to monetize their digital work.',
  brandColor: '#F2E6E0',
  icon: '/partners/pixelmon/icon.jpg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@Pixelmon',
  drops: [
    {
      image: '/partners/pixelmon/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Pixelmon Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 17, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 18, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default pixelmon

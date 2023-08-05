import { Partner } from './types'
import { unlimited } from '../test-contracts'

const blackbird: Partner = {
  slug: 'blackbird',
  name: 'Blackbird',
  url: 'https://www.blackbird.xyz/',
  description:
    'Blackbird is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/blackbird/icon.png',
  banner: '/partners/blackbird/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@blackbird_xyz',
  drops: [
    {
      image: '/partners/blackbird/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Blackbird Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 22, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 23, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default blackbird

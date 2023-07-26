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
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@blackbird_xyz',
  drops: [
    {
      image: '/partners/blackbird/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Blackbird Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: new Date('2023-08-22').getTime(),
      endDate: new Date('2023-08-23').getTime(),
      price: '0.0001',
    },
  ],
}

export default blackbird

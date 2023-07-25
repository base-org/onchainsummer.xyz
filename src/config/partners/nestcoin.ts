import { Partner } from './types'
import { unlimited } from '../test-contracts'

const nestcoin: Partner = {
  slug: 'nestcoin',
  name: 'Nestcoin',
  url: 'https://nestcoin.com/',
  description:
    'Nestcoin is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/nestcoin/icon.jpg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@nestcoin',
  drops: [
    {
      image: '/partners/nestcoin/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Nestcoin Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: new Date('2023-08-23').getTime(),
      endDate: new Date('2023-08-24').getTime(),
      price: '0.0001',
    },
  ],
}

export default nestcoin

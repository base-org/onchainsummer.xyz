import { Partner } from './types'
import { unlimited } from '../test-contracts'

const zora: Partner = {
  slug: 'zora',
  name: 'Zora',
  url: 'https://zora.co/',
  description:
    'Zora is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/zora/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@lo',
  drops: [
    {
      image: '/partners/zora/drops/drop.gif',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Zora Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 16, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 17, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default zora

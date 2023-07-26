import { Partner } from './types'
import { unlimited } from '../test-contracts'

const indelible: Partner = {
  slug: 'indelible',
  name: 'Indelible Labs',
  url: 'https://indelible.xyz/',
  description:
    'Indelible Labs is a community owned platform for creators to monetize their digital work.',
  brandColor: 'rgb(0, 224, 191)',
  icon: '/partners/indelible/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@indelible_labs',
  drops: [
    {
      image: '/partners/indelible/drops/drop.svg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Indelible Labs Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 20, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 21, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default indelible

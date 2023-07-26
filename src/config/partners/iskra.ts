import { Partner } from './types'
import { limited } from '../test-contracts'

const iskra: Partner = {
  slug: 'iskra',
  name: 'Iskra',
  url: 'https://iskra.world/',
  description:
    'Iskra is a community owned platform for creators to monetize their digital work.',
  brandColor: '#007aff',
  icon: '/partners/iskra/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@iskra_world',
  drops: [
    {
      image: '/partners/iskra/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Iskra Drop',
      ...limited,
      type: 'erc-721',
      startDate: new Date('2023-08-27').getTime(),
      endDate: new Date('2023-08-28').getTime(),
      price: '0.0001',
    },
  ],
}

export default iskra

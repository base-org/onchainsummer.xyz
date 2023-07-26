import { Partner } from './types'
import { limited } from '../test-contracts'

const fwbBonfire: Partner = {
  slug: 'fwb-bonfire',
  name: 'FWB x Bonfire',
  url: 'https://www.bonfiretoken.co/',
  description:
    'FWBxBonfire is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/fwb-bonfire/icon.png',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@bonfire',
  drops: [
    {
      image: '/partners/fwb-bonfire/drops/drop.jpg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'fwb x bonfire Drop',
      ...limited,
      type: 'erc-721',
      startDate: new Date('2023-08-28').getTime(),
      endDate: new Date('2023-08-29').getTime(),
      price: '0.0001',
    },
  ],
}

export default fwbBonfire

import { Partner } from './types'
import { limited } from '../test-contracts'

const oak: Partner = {
  slug: 'oak',
  name: 'oak',
  url: 'https://oak.tech/',
  description:
    'Oak is a community owned platform for creators to monetize their digital work.',
  brandColor: '#95098b',
  icon: '/partners/oak/icon.png',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@oak_network',
  drops: [
    {
      image: '/partners/oak/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Oak Drop',
      ...limited,
      type: 'erc-721',
      startDate: new Date('2023-08-28').getTime(),
      endDate: new Date('2023-08-29').getTime(),
      price: '0.0001',
    },
  ],
}

export default oak

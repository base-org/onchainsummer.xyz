import { Partner } from './types'
import { unlimited } from '../test-contracts'

const atari: Partner = {
  slug: 'atari',
  name: 'Atari',
  url: 'https://atari.com/pages/atari-x',
  description:
    'Atari is a community owned platform for creators to monetize their digital work.',
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/atari/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@atari',
  drops: [
    {
      image: '/partners/atari/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Atari Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 25, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 26, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default atari

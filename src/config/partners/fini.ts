import { Partner } from './types'
import { limited } from '../test-contracts'

const fini: Partner = {
  slug: 'fini',
  name: 'fini',
  url: 'https://fini.world/',
  description:
    'fini is a community owned platform for creators to monetize their digital work.',
  brandColor: 'rgb(255, 121, 121)',
  icon: '/partners/fini/icon.png',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@finiliar',
  drops: [
    {
      image: '/partners/fini/drops/drop.gif',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'fini Drop',
      ...limited,
      type: 'erc-721',
      startDate: new Date('2023-08-31').getTime(),
      endDate: new Date('2023-09-01').getTime(),
      price: '0.0001',
    },
  ],
}

export default fini
import { Partner } from './types'
import { unlimited, limited } from '../test-contracts'

const showtime: Partner = {
  slug: 'showtime',
  name: 'Showtime',
  url: 'https://showtime.xyz/',
  description:
    'Showtime is a community owned platform for creators to monetize their digital work.',
  brandColor: 'rgb(231, 171, 67)',
  icon: '/partners/showtime/icon.jpg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@Showtime_xyz',
  drops: [
    {
      image: '/partners/showtime/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'showtime Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: new Date('2023-08-18').getTime(),
      endDate: new Date('2023-08-19').getTime(),
      price: '0.0001',
    },
  ],
}

export default showtime

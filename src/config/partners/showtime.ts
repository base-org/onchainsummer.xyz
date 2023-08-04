import { Partner } from './types'
import { unlimited, limited } from '../test-contracts'

const showtime: Partner = {
  slug: 'showtime',
  name: 'Showtime',
  url: 'https://showtime.xyz/',
  description:
    'Showtime is a community owned platform for creators to monetize their digital work.',
  brandColor: 'rgb(231, 171, 67)',
  icon: '/partners/showtime/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@Showtime_xyz',
  drops: [
    {
      image: '/partners/showtime/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'showtime Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 6, 26, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 6, 27, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default showtime

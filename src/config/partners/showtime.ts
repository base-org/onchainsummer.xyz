import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const showtime: Partner = {
  slug: 'showtime',
  name: 'Showtime',
  url: 'https://showtime.xyz/',
  description:
    'Showtime is making digital collectibles useful, social, and accessible to all. Collect drops to unlock exclusive creator channels.',
  brandColor: 'rgb(231, 171, 67)',
  icon: '/partners/showtime/icon.png',
  banner: '/partners/showtime/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@Showtime_xyz',
  drops: [
    {
      image: '/partners/showtime/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'showtime Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default showtime

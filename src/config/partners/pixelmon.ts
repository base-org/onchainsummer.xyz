import { Partner } from './types'
import { limited2 } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const pixelmon: Partner = {
  slug: 'kevin',
  name: 'Pixelmon',
  url: 'https://www.pixelmon.ai/',
  description:
    'Pixelmon is a multiplayer open world adventure and monster combat arena.',
  brandColor: '#F2E6E0',
  icon: '/partners/pixelmon/icon.png',
  banner: '/partners/pixelmon/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@Pixelmon',
  drops: [
    {
      image: '/partners/pixelmon/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Pixelmon Drop',
      ...limited2,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default pixelmon

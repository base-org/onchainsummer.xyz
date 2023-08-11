import { Partner } from './types'
import { limited2 } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const pixelmon: Partner = {
  slug: 'kevin',
  name: 'Pixelmon',
  url: 'https://www.pixelmon.ai/',
  description:
    'Join and experience the Pixelmon multiplayer open world adventure....and meet Kevin.',
  brandColor: '#F2E6E0',
  icon: '/partners/pixelmon/icon.png',
  banner: '/partners/pixelmon/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@Pixelmon',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...limited2,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default pixelmon

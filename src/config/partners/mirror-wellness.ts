import { Partner } from './types'
import { limited2 } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const mirrorWellness: Partner = {
  slug: 'mirrorswellnessclub',
  name: 'Mirrors Wellness Club',
  url: 'https://www.mirror.co/',
  description:
    'Join a community centered around onchain and IRL wellness with the Mirror Wellness Club.',
  brandColor: '#000000',
  icon: '/partners/mirror-wellness/icon.png',
  banner: '/partners/mirror-wellness/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@lululemonstudio',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...limited2,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default mirrorWellness

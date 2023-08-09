import { Partner } from './types'
import { limited2 } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const mirrorWellness: Partner = {
  slug: 'mirrorswellnessclub',
  name: 'Mirrors Wellness Club',
  url: 'https://www.mirror.co/',
  description:
    'Mirrors Wellness Club aims to build a community centered around wellness in web3 and IRL spaces.',
  brandColor: '#000000',
  icon: '/partners/mirror-wellness/icon.png',
  banner: '/partners/mirror-wellness/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@lululemonstudio',
  drops: [
    {
      image: '/partners/mirror-wellness/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Mirror Wellness Drop',
      ...limited2,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default mirrorWellness

import { Partner } from './types'
import { zora } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const fwb: Partner = {
  slug: 'fwb',
  name: 'FWB',
  url: 'https://www.fwb.help/',
  description:
    'Friends With Benefits (FWB) is a community of builders, creatives, and investors who believe in the power of social tokens and the communities they create.',
  brandColor: '#000000',
  icon: '/partners/fwb/icon.png',
  banner: '/partners/fwb/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@FWBtweets',
  drops: [
    {
      image: '/partners/fwb/drops/fwbBlack.jpg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Friends With Benefits',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 10, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
      ...zora,
    },
  ],
}

export default fwb

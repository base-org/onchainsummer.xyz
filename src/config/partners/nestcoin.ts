import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const nestcoin: Partner = {
  slug: 'onboard',
  name: 'Onboard',
  url: 'https://nestcoin.com/',
  description:
    'Onboard is democratizing access to economic opportunity for everyday people in frontier markets',
  brandColor: '#000000',
  icon: '/partners/nestcoin/icon.png',
  banner: '/partners/nestcoin/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@nestcoin',
  drops: [
    {
      image: '/partners/nestcoin/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Onboard Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default nestcoin

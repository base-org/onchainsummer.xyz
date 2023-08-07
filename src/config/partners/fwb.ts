import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const fwb: Partner = {
  slug: 'fwb',
  name: 'Friends With Benefits',
  url: 'https://www.fwb.help/',
  description:
    'Friends With Benefits is a community of builders, creatives, and investors who believe in the power of social tokens and the communities they create. We are a decentralized autonomous organization (DAO) that supports the growth of the social token ecosystem through community grants, educational initiatives, and community events.',
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
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 10, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
      address: '0x2f6f5ef163ed71e32d92666a69190c79a784130f',
      mintType: MintType.Zora,
      crossMintClientId: '44b4116a-4135-438e-99b5-d040cc1ea1c5'
    },
  ],
}

export default fwb

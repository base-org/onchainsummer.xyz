import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const highlight: Partner = {
  slug: 'highlight',
  name: 'Highlight',
  url: 'https://highlight.xyz/',
  description:
    'Highlight is a community driven, decentralized finance (DeFi) platform that lets you trade, earn and borrow crypto assets.',
  brandColor: '#000000',
  icon: '/partners/highlight/icon.png',
  banner: '/partners/highlight/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@Highlight_xyz',
  drops: [
    {
      image: '/partners/highlight/drops/drop.svg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Highlight Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default highlight

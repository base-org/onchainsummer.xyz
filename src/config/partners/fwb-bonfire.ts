import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const fwbBonfire: Partner = {
  slug: 'bonfire',
  name: 'Bonfire',
  url: 'https://www.bonfiretoken.co/',
  description:
    "Get token-gated content from artists on Bonfire's platforms that lets creative visions flourish.",
  brandColor: '#000000',
  icon: '/partners/fwb-bonfire/icon.png',
  banner: '/partners/fwb-bonfire/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@bonfire',
  drops: [
    {
      image: '/partners/fwb-bonfire/drops/drop.jpg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'fwb x bonfire Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default fwbBonfire

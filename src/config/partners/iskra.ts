import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const iskra: Partner = {
  slug: 'iskra',
  name: 'Iskra',
  url: 'https://iskra.world/',
  description:
    'Play and earn with onchain games where everybody wins with Iskra.',
  brandColor: '#007aff',
  icon: '/partners/iskra/icon.png',
  banner: '/partners/iskra/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@iskra_world',
  drops: [
    {
      image: '/partners/iskra/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Iskra Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default iskra

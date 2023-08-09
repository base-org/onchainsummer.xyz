import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const oak: Partner = {
  slug: 'oak',
  name: 'Oak',
  url: 'https://oak.tech/',
  description:
    'Oak is a community currency for the people of Oakland.',
  brandColor: '#95098b',
  icon: '/partners/oak/icon.png',
  banner: '/partners/oak/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@oak_network',
  drops: [
    {
      image: '/partners/oak/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Oak Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default oak

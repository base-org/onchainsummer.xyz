import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const parallel: Partner = {
  slug: 'parallel',
  name: 'Parallel',
  url: 'https://parallel.fi/',
  description: 'Choose your faction, join the battle for Earth! Learn more about the sci-fi world of Parallel soon.',
  brandColor: '#0c3ee3',
  icon: '/partners/parallel/icon.png',
  banner: '/partners/parallel/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@ParallelFi',
  drops: [
    {
      image: '/partners/parallel/drops/drop.svg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Parallel Finance',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 12, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default parallel

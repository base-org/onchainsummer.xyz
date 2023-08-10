import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const optimism: Partner = {
  slug: 'optimism',
  name: 'Optimism',
  url: 'https://www.optimism.io/',
  description:
    'Collect onchain art from Optimism that represents our interconnected Superchain where people are empowered by the new internet they use to coordinate.',
  brandColor: 'rgb(234,52,49)',
  icon: '/partners/optimism/icon.png',
  banner: '/partners/optimism/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@optimismFND',
  drops: [
    {
      image: '/partners/optimism/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Optimism Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default optimism

import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const parallel: Partner = {
  slug: 'parallel',
  name: 'Parallel',
  url: 'https://parallel.life/',
  description:
    'A limited-edition Starter Deck available for the Parallel trading card game, including access to the highly anticipated Parallel Beta. Unlock your starter pack and dive into the Parallel universe.',
  brandColor: '#0c3ee3',
  icon: '/partners/parallel/icon.png',
  banner: '/partners/parallel/banner-icon.svg',
  aarweaveDigest: 'lSB4sNKGgntaVI9RqsR_Ak54BD8NrEBjXN5sYJ_LyPM',
  twitter: '@ParallelTCG',
  drops: [
    {
      image: '/partners/parallel/drops/parallelGeneric.png',
      creator: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      name: 'Parallel',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 12, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default parallel

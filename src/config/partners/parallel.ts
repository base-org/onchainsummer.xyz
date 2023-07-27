import { Partner } from './types'
import { unlimited, limited } from '../test-contracts'

const parallel: Partner = {
  slug: 'parallel',
  name: 'Parallel',
  url: 'https://parallel.fi/',
  description:
    'Parallel is a decentralized finance (DeFi) platform that combines traditional and crypto finance to create a new and exciting hybrid ecosystem. Parallel is a decentralized finance (DeFi) platform that combines traditional and crypto finance to create a new and exciting hybrid ecosystem. Parallel is a decentralized finance (DeFi) platform that combines traditional and crypto finance to create a new and exciting hybrid ecosystem. Parallel is a decentralized finance (DeFi) platform that combines traditional and crypto finance to create a new and exciting hybrid ecosystem. Parallel is a decentralized finance (DeFi) platform that combines traditional and crypto finance to create a new and exciting hybrid ecosystem. Parallel is a decentralized finance (DeFi) platform that combines traditional and crypto finance to create a new and exciting hybrid ecosystem.',
  brandColor: '#0c3ee3',
  icon: '/partners/parallel/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@ParallelFi',
  drops: [
    {
      image: '/partners/parallel/drops/drop.svg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Parallel Finance',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 12, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default parallel

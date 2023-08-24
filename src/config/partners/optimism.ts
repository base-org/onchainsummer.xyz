import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const optimism: Partner = {
  slug: 'optimism',
  name: 'Optimism',
  url: 'https://www.optimism.io/',
  description:
    'Collect onchain art from Optimism that represents our interconnected Superchain where people are empowered by the new internet they use to coordinate.',
  brandColor: 'rgb(234,52,49)',
  icon: '/partners/optimism/icon.png',
  banner: '/partners/optimism/banner-icon.svg',
  aarweaveDigest: 'l-aLggk2ekxjQgNkBVuczKfTZkNbtX9fteJggkTjolE',
  twitter: '@optimismFND',
  drops: [
    {
      image:
        'https://assets.onchainsummer.xyz/FINAL_ART-Onchain-and-Optimistic.jpg',
      creator: '0x10373C24796a5f51DFa94bC9b849e6ea8187fe8f',
      name: 'Onchain + Optimistic',
      description: `Onchain + Optimistic, an artwork by Ryan Hawthorne, is an ode to the continued growth of onchain communities, creators, and collectors.

The art nods to an interconnected Superchain future built on the open-source OP Stack where people are empowered by the new internet they use to coordinate.`,
      address: '0x6f4168C0207df6561527af1059D788BB0b09beB1',
      crossMintClientId: 'cade7062-967d-4e00-b18b-620dd75ee0f7',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.001',
    },
  ],
}

export default optimism

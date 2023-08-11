import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const openSeaConfig: Partner = {
  slug: 'opensea',
  name: 'OpenSea',
  url: 'https://opensea.io/',
  description:
    'Collect onchain art from incredible artists, curated by OpenSea, the largest NFT marketplace.',
  brandColor: '#2081E2',
  icon: '/partners/open-sea/icon.png',
  banner: '/partners/open-sea/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@opensea',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default openSeaConfig

import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const zora: Partner = {
  slug: 'zora',
  name: 'Zora',
  url: 'https://zora.co/',
  description:
    "Zora is bringing the world's imagination onchain. Imagine, mint and enjoy.",
  brandColor: '#000000',
  icon: '/partners/zora/icon.png',
  banner: '/partners/zora/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@lo',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default zora

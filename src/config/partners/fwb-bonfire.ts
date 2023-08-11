import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const fwbBonfire: Partner = {
  slug: 'bonfire',
  name: 'Bonfire',
  url: 'https://www.bonfiretoken.co/',
  description:
    'Create a custom branded and web3-native home for your community with no code. Import your collections, design custom mint pages, and grow and engage your community through gated content, contests, and more.',
  brandColor: '#000000',
  icon: '/partners/fwb-bonfire/icon.png',
  banner: '/partners/fwb-bonfire/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@bonfire',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default fwbBonfire

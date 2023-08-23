import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

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
      image: 'https://assets.onchainsummer.xyz/',
      creator: '',
      name: '',
      description: ``,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.Zora,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
      externalLink: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/',
      creator: '',
      name: '',
      description: ``,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
      externalLink: 'https://www.bonfiretoken.co/',
    },
  ],
}

export default fwbBonfire

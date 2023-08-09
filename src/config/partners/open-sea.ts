import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const openSeaConfig: Partner = {
  slug: 'opensea',
  name: 'OpenSea',
  url: 'https://opensea.io/',
  description:
    "OpenSea is the world's first and largest web3 marketplace for NFTs and crypto collectibles.",
  brandColor: '#2081E2',
  icon: '/partners/open-sea/icon.png',
  banner: '/partners/open-sea/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@opensea',
  drops: [
    {
      image: '/partners/open-sea/drop/main.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Space Light Dark',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/1.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Closer to the Sun',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Runaway',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Yu-Gi-Oh!',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Number 1',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
  ],
}

export default openSeaConfig

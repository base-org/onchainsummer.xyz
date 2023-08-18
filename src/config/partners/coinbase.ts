import { MintType } from '@/components/MintDialog/types'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const base: Partner = {
  slug: 'coinbase',
  name: 'Coinbase',
  url: 'https://www.coinbase.com/',
  description:
    'Get exclusive benefits by using Coinbase and Coinbase Wallet, including weekly free mints, no cost funding on Base, and 60 days free of Coinbase One for any Onchain Summer NFT minted.',
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/coinbase/icon.png',
  banner: '/partners/coinbase/banner-icon.jpg',
  aarweaveDigest: '',
  twitter: '@coinbase',
  drops: [
    {
      image: '/partners/coinbase/drop/drop-1.gif',
      creator: '0x97b4AfF7aa20C3136c9D3c52d3b3Bfb103Dc48c3',
      name: 'Coinbase',
      description:
        'Use your Coinbase or Coinbase Wallet app each week during Onchain Summer to collect a free, limited drop.',
      type: 'external',
      startDate: Date.UTC(2023, 7, 8, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
      externalLink: 'http://coinbase.com/crypto-rundown?index=1',
    },
    {
      image: '/partners/coinbase/drop/drop-2.gif',
      creator: '0x97b4AfF7aa20C3136c9D3c52d3b3Bfb103Dc48c3',
      name: 'Coinbase Wallet',
      description:
        'Evolve your "Based" collectible by minting on the Coinbase Wallet challenge',
      type: 'external',
      startDate: Date.UTC(2023, 7, 8, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
      externalLink: 'cbwallet://buyAndMint/explore',
    },
    {
      image: '/partners/coinbase/drop/drop-3.gif',
      creator: '0x97b4AfF7aa20C3136c9D3c52d3b3Bfb103Dc48c3',
      name: 'Coinbase One',
      description:
        'Redeem 60 days of free Coinbase One with any Onchain Summer NFT',
      type: 'external',
      startDate: Date.UTC(2023, 7, 8, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
      externalLink: 'http://cb1.onchainsummer.xyz/',
    },
  ],
}

export default base

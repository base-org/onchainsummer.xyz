import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const pixelmon: Partner = {
  slug: 'kevin',
  name: 'Pixelmon',
  url: 'https://www.pixelmon.ai/',
  description:
    'Join and experience the Pixelmon multiplayer open world adventure....and meet Kevin.',
  brandColor: '#F2E6E0',
  icon: '/partners/pixelmon/icon.png',
  banner: '/partners/pixelmon/banner-icon.svg',
  aarweaveDigest: 'HgQGkyssikDTid90XB8kEKd_-Q5cLBEcStL-UnwjXOY',
  twitter: '@Pixelmon',
  drops: [
    {
      image:
        '/partners/pixelmon/drops/FINAL_ART-Kevin-Nanoblock-Illustration-NFT-Manfred Ho.jpg',
      creator: '0xF0A72A215636930c369e220c9fF69861E721103A',
      name: 'Summer Kevin',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.001',
      description: 'Fun Fact: Do you know that Kevin cannot swim?',
      address: '0x9d9c0C4e764117FccD2bc3548f0E95c806e6F996',
      mintType: MintType.ThirdWeb,
      crossMintClientId: '03579467-b595-42d9-b413-98ab69ac0d41',
      interactWithNFTLink: {
        url: 'https://pixelmonshop.myshopify.com/products/kevin-nanoblock',
        label: 'Shop',
      },
    },
    {
      image: '/partners/pixelmon/drops/Toy.png',
      creator: '0xF0A72A215636930c369e220c9fF69861E721103A',
      name: 'Kevin Buildoor Block Set',
      externalLink:
        'https://pixelmonshop.myshopify.com/products/kevin-nanoblock',
      type: 'external',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: '',
      address: '0x',
      mintType: MintType.External,
      crossMintClientId: '',
      buttonText: 'Shop',
    },
  ],
}

export default pixelmon

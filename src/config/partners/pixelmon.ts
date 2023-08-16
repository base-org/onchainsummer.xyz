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
      creator: '0xCe0d48718F195aa0Ee14121ED40AE52F0EA55159',
      name: 'Summer Kevin',
      externalLink: 'https://www.pixelmon.ai/kevin-nanoblock',
      type: 'external',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: 'Fun Fact: Do you know that Kevin cannot swim?',
      address: '0x',
      mintType: MintType.External,
      crossMintClientId: '',
    },
  ],
}

export default pixelmon

import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const mirrorWellness: Partner = {
  slug: 'mirrorswellnessclub',
  name: 'Mirrors Wellness Club',
  url: 'https://mirrorswellnessclub.io',
  description:
    'Join a community centered around onchain and IRL wellness with the Mirror Wellness Club.',
  brandColor: '#000000',
  icon: '/partners/mirror-wellness/icon.png',
  banner: '/partners/mirror-wellness/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@lululemonstudio',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/mirror-drop-1.mp4',
      creator: '0x1EbA9Bb7c60353a2cA0a57C8B1A6DF3b206e2c34',
      name: 'The Wellness Card',
      description:
        'The Wellness Card is a NFT membership to Mirrors Wellness Club',
      mintType: MintType.ThirdWeb,
      address: '0x0',
      crossMintClientId: '',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2024, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
    },
  ],
}

export default mirrorWellness

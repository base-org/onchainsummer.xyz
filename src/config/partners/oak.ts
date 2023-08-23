import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const oak: Partner = {
  slug: 'oak',
  name: 'Oak',
  url: 'https://oak.tech/',
  description:
    'Support OAK, the first onchain local community currency in the United States.',
  brandColor: '#95098b',
  icon: '/partners/oak/icon.png',
  banner: '/partners/oak/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@oak_network',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/',
      creator: '',
      name: '',
      description: ``,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '10',
      externalLink: '',
    },
  ],
}

export default oak

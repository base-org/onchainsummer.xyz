import { MintType } from '@/components/MintDialog/types'
import { isProd } from '../chain'
import { zora } from '../test-contracts'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const base: Partner = {
  slug: 'bridge-to-base',
  name: 'Base',
  url: '',
  description: `Base mainnet opens for everyone on August 9 with Onchain Summer, a multi-week festival of onchain art, music, gaming, & more.

Bridge today to get ready and mint an NFT that commemorates you being early, one of the first to teleport to the new internet.
`,
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/base/icon.png',
  banner: '/partners/base/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@BuildonBase',
  drops: [
    {
      image: '/partners/base/drop/giphy.gif',
      creator: '0x9652721d02b9db43f4311102820158aBb4ecc95B',
      name: 'Bridge to Base',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      ...(isProd
        ? {
            address: '0xEa2a41c02fA86A4901826615F9796e603C6a4491',
            crossMintClientId: '',
            mintType: MintType.ThirdWeb,
          }
        : zora),
    },
  ],
}

export default base

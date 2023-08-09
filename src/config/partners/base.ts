import { MintType } from '@/components/MintDialog/types'
import { isProd } from '../chain'
import { unlimited, zora } from '../test-contracts'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const base: Partner = {
  slug: 'base',
  name: 'Base Day One',
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
      image: '/partners/base/drop/asset.gif',
      creator: 'ecfacd7b-9664-41cf-8109-ed2354ad7ee6',
      name: 'Bridge to Base',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      ...(isProd
        ? {
            address: '0x173749fB7a78015e92Ee623cf450Abfa670C8259',
            crossMintClientId: 'fdb56336-4b32-48d1-bf14-afcdecab4880',
            mintType: MintType.Zora,
          }
        : zora),
    },
  ],
}

export default base

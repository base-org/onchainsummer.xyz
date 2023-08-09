import { MintType } from '@/components/MintDialog/types'
import { isProd } from '../chain'
import { unlimited, zora } from '../test-contracts'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const base: Partner = {
  slug: 'base',
  name: 'Base Day One',
  url: '',
  description: `Base Day One commemorates the first day of Base.

  It will evolve as more people come onchain and collectively create our story.
  
  Get onchain at onchainsummer.xyz and mint to join us.
  
  Any proceeds will support the next generation of builders on Base.
  
  *In no event does the Base Day One NFT include any rewards or contents subject to regulated financial activities, including that entitle owners to financial rewards or that may represent securities or derivatives under applicable law.*
  `,
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/base/icon.png',
  banner: '/partners/base/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@BuildonBase',
  drops: [
    {
      image: '/partners/base/drop/asset.gif',
      creator: '0x9652721d02b9db43f4311102820158aBb4ecc95B',
      name: 'Base Day One',
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

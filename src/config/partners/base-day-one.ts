import { MintType } from '@/components/MintDialog/types'
import { isProd } from '../chain'
import { zora } from '../test-contracts'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const base: Partner = {
  slug: 'base',
  name: 'Base Day One',
  url: '',
  description: `Base Day One commemorates the first day of Base.

  Watch it evolve as more people come onchain and collectively create our story.
  
  All proceeds will support the next generation of builders on Base; this does not confer any other rights.
  
  GET ONCHAIN at onchainsummer.xyz and mint to join us.`,
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/base/icon.png',
  banner: '/partners/base/banner-icon.svg',
  aarweaveDigest: 'h028XVTdP7QtZZfWAHuJ9OYmMNs0Fyi4e4fJZH_5ik4',
  twitter: '@BuildonBase',
  drops: [
    {
      image: '/partners/base/drop/asset.gif',
      creator: '0x9652721d02b9db43f4311102820158aBb4ecc95B',
      name: 'Base Day One',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 9, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      ...(isProd
        ? {
            address: '0x173749fB7a78015e92Ee623cf450Abfa670C8259',
            crossMintClientId: 'ecfacd7b-9664-41cf-8109-ed2354ad7ee6',
            mintType: MintType.Zora,
          }
        : zora),
    },
  ],
}

export default base
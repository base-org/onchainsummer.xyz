import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const iskra: Partner = {
  slug: 'iskra',
  name: 'Iskra',
  url: 'https://iskra.world/',
  description:
    'Play and earn with onchain games where everybody wins with Iskra.',
  brandColor: '#007aff',
  icon: '/partners/iskra/icon.png',
  banner: '/partners/iskra/banner-icon.svg',
  aarweaveDigest: 'UljUffgdatOSkox9nGIt8WbCm-8ZZ5ih049Yc0u-LuE',
  twitter: '@iskra_world',
  drops: [
    {
      image:
        'https://assets.onchainsummer.xyz/FINALART--[NFT]_BASE_MysteryBox-TaekyungYoun.mp4',
      creator: '0x792EF9312e62E9ef3d92Db050F3ca3436c287a7D',
      name: 'ClashMon Game NFT Mystery Box',
      description: `Fun to play and easy to access through any web browser.

Build and Actually ‘own’ your team of Clashmons for trading, collecting, battling or … fishing?  

The Collectible Battle RPG comes alive with fast-paced RPG-style monster battles, high-stakes tournament rounds and a soothing fishing mode to gather resources for gear or other enhancements.`,
      address: '0x75ed58e1D029853231A9e9825F0035E0449FBAfa',
      crossMintClientId: '',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 3, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
  ],
}

export default iskra

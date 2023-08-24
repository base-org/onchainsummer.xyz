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
      creator: '0x5C69C4141EAB0c3852eba4983B572ffBAf742278',
      name: 'ClashMon Game NFT Mystery Box',
      description: `ClashMon is one of the many accessible onchain games from the Iskra game platform that provides of digital ownership through play, trading, collecting, crafting and competition. 

Players are able to build and ‘own’ their team of Clashmons for trading, collecting and fishing (resource farming). The Collectible Battle RPG comes alive with fast-paced RPG-style monster fights and high-stakes tournament rounds, but balances out the pacing with a soothing fishing mode where players can gather resources for gear or pursue other enhancements`,
      address: '0x75ed58e1D029853231A9e9825F0035E0449FBAfa',
      crossMintClientId: '521f028e-b728-491a-9336-e2f5a904d3cf',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 3, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
    {
      image: 'https://assets.onchainsummer.xyz/',
      creator: '0x5C69C4141EAB0c3852eba4983B572ffBAf742278',
      name: 'Learn About Clashmon',
      description: ``,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 3, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://go.iskra.world/clashmon-onchainsummer/',
      buttonText: 'Learn More',
    },
    {
      image: 'https://assets.onchainsummer.xyz/',
      creator: '0x5C69C4141EAB0c3852eba4983B572ffBAf742278',
      name: 'What’s inside the Mystery Box',
      description: ``,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 3, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://iskra.world/clashmon_reveal',
      buttonText: 'Reveal Now',
    },
    {
      image: 'https://assets.onchainsummer.xyz/',
      creator: '0x5C69C4141EAB0c3852eba4983B572ffBAf742278',
      name: 'Learn more about Iskra',
      description: ``,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 3, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: 'Free (gas fee only)',
      externalLink: 'https://iskra.world/',
      buttonText: 'Learn More',
    },
  ],
}

export default iskra

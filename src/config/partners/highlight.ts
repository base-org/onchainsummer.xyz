import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const highlight: Partner = {
  slug: 'highlight',
  name: 'Highlight',
  url: 'https://highlight.xyz/',
  description:
    'Highlight, in partnership with four brilliant artists and Fingerprints DAO, is bringing generative art to Base. Discover and collect art supported by Highlight’s generative art toolkit.',
  brandColor: '#000000',
  icon: '/partners/highlight/icon.png',
  banner: '/partners/highlight/banner-icon.svg',
  aarweaveDigest: 'jq_oAd33v0lSB8N9oHzHjyoNE08_gEe7Cfk-XOV81iE',
  twitter: '@Highlight_xyz',
  drops: [
    {
      image:
        'https://assets.onchainsummer.xyz/final_art-highlight-ocs-artists.m4v',
      creator: '0x168FEB2E7de2aC0c37a239261D3F9e1b396F22a2',
      name: 'Generative Summer',
      description: `
Highlight and Fingerprints DAO are teaming up with world-renowned artists Melissa Wiederrecht, James Merrill, Holger Lippmann, and Leander Herzog to bring generative art to Base.

Collections feature generative artwork where each NFT is dynamically created through code at the moment of mint, unique to the owner.

Each collection expresses different themes and generative techniques. Lippmann blends structure and chaos, Merrill pushes the edges of algorithmic diversity, Wiederrecht breaks all the crypto art rules, and Herzog imagines an immersive, interactive garden.

All collections will be accessible open editions, available to mint for one week on Highlight. Credit cards supported, self-custodied wallets encouraged but not required.
      `,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://highlight.xyz/',
      type: 'external',
      startDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
    {
      image: 'https://assets.onchainsummer.xyz/final_art-leander-herzog.m4v',
      creator: '0xAE487e1cF3A74fBC1AA157e13a41Dc0295CA8684',
      name: '1,000 True Fans by Leander Herzog',
      description: ``,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://highlight.xyz/1000truefans',
      type: 'external',
      startDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0042',
    },
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-holger-lippmann.m4v',
      creator: '0x236676cc4E112D9dE66221aFABBD43B03663474e',
      name: 'Fractal Tapestries by Holger Lippmann',
      description: ``,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://highlight.xyz/fractaltapestries',
      type: 'external',
      startDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0042',
    },
    {
      image: 'https://assets.onchainsummer.xyz/final_art-james-merrill.m4v',
      creator: '0xB3B212da1F50DE8eCDE59C932e36DF7aFb6319cB',
      name: 'RUNAWAY by James Merrill',
      description: ``,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://highlight.xyz/runaway',
      type: 'external',
      startDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0042',
    },
    {
      image:
        'https://assets.onchainsummer.xyz/final_art-melissa-wiederrecht.m4v',
      creator: '0x4bED1D532b7c7bd148eB43C8473DcA3685Fd271d',
      name: 'Crypto-Native by Melissa Wiederrecht',
      description: ``,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://highlight.xyz/cryptonative',
      type: 'external',
      startDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0042',
    },
  ],
}

export default highlight

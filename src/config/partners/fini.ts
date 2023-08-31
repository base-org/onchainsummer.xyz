import { Partner } from './types'

import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const fini: Partner = {
  slug: 'fini',
  name: 'Fini',
  url: 'https://fini.world/',
  description:
    'Join the Base Wars with an adorable Fini that responds to your onchain activity.',
  brandColor: 'rgb(255, 121, 121)',
  icon: '/partners/fini/icon.png',
  banner: '/partners/fini/banner-icon.svg',
  aarweaveDigest: 'BKqxrl0WP_Obyrq8G4aeQBVwRRJJmZTiwWny115n0hI',
  twitter: '@finiliar',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-Fini.png',
      creator: '0x8Bdd0535D3971C3aB09C7F1e35266e047Fe972cE',
      name: 'Base Wars',
      description: `Adopt one of three Finis that respond to your activity on Base.

Kurt and his Raybot, Ray, are Basenauts locked in combat with Spike, a notorious commando in the Starlight Extinction Corps.

The more transactions you make each week on Base, the better Kurt and Ray can defend their fleet against the onslaught of attacks. The less you transact, the more powerful Spike becomes.`,
      address: '0x34E817D631b7FB79A54638c01c03421D124E35a7',
      crossMintClientId: 'f8fa889d-60f3-4fbb-845d-ee961e94b476',
      mintType: MintType.Zora,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 7, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.004223',
    },
  ],
}

export default fini

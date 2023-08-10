import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const parallel: Partner = {
  slug: 'parallel',
  name: 'Parallel',
  url: 'https://parallel.life',
  description:
    'A limited-edition Starter Deck available for the Parallel trading card game, including access to the highly anticipated Parallel Beta. Unlock your starter pack and dive into the Parallel universe.',
  brandColor: '#0c3ee3',
  icon: '/partners/parallel/icon.png',
  banner: '/partners/parallel/banner-icon.svg',
  aarweaveDigest: 'lSB4sNKGgntaVI9RqsR_Ak54BD8NrEBjXN5sYJ_LyPM',
  twitter: '@ParallelTCG',
  drops: [
    {
      image: '/partners/parallel/drops/starter-pack.png',
      creator: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      name: 'Parallel Starter Packs',
      description: 'Sci-fi collectable card game with NFTs',
      address: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://parallel.life/starter-decks',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 12, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.05',
    },
    {
      image: '/partners/parallel/drops/card-backs.png',
      creator: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      name: 'Parallel Card Backs',
      description:
        'Parallel is a sci-fi collectible card game with five factions battling for home. Assemble a deck and take the fight to Earth.',
      address: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      mintType: MintType.External,
      externalLink: 'https://parallel.life/starter-decks',
      crossMintClientId: '',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 12, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
    },
  ],
}

export default parallel

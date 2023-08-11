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
      creator: '0x02f086dBC384d69b3041BC738F0a8af5e49dA181',
      name: 'Parallel Starter Packs',
      description: `Parallel Starter Decks are now available as one of the first Onchain Summer drops!

Each Starter Deck includes Beta access, 40 cards to get started playing and earning Prime as well as 10 apparition packs.

Each purchase also includes a Heroes of Parallel Cardback which can also be used in game.

The drop is live now and will be available throughout Onchain Summer or until sold out. Each deck will be available for .05 ETH on Base.`,
      address: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://parallel.life/starter-decks',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.05',
    },
    {
      image: '/partners/parallel/drops/card-backs.png',
      creator: '0x02f086dBC384d69b3041BC738F0a8af5e49dA181',
      name: 'Parallel Card Backs',
      description: `Heroes of Parallel Open Edition Card Back is available now and during the entirety of Onchain Summer! Card Backs are like skins for your decks in Parallel. Use them to flex on your opponents. This is an open edition available at a price of .01 ETH on base. After the end of August, we will update the IPFS to reflect the total supply minted.`,
      address: '0x206571b68c66E1d112b74d65695043ad2b5F95D5',
      mintType: MintType.External,
      externalLink: 'https://parallel.life/starter-decks',
      crossMintClientId: '',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 11, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
    },
  ],
}

export default parallel

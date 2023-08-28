import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const openSeaConfig: Partner = {
  slug: 'opensea',
  name: 'OpenSea',
  url: 'https://opensea.io/',
  description:
    'Collect onchain art from incredible artists, curated by OpenSea, the largest NFT marketplace.',
  brandColor: '#2081E2',
  icon: '/partners/open-sea/icon.png',
  banner: '/partners/open-sea/banner-icon.svg',
  aarweaveDigest: 'Tr9jYWfv8hDOQIs3h4By1hg62rC9nFADuITd41Kgc-Q',
  twitter: '@opensea',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/1000x1000_OCS_Teaser.mp4',
      creator: '',
      name: 'OpenSea for Onchain Summer',
      description: `OpenSea presents works by Max Kulchinsky, Jessica Yatrofsky, ZWIST, and Jordan Devant on Base.`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://opensea.io',
    },
    {
      image:
        'https://assets.onchainsummer.xyz/Copy of jessica_yatrofsky_artwork (1).TIFF',
      creator: '0xFc3D6045934890e2F59283F8f373998121725291',
      name: 'Jessica Yatrofsky',
      description: `"Leave No Trace" is a poem that gracefully captivates within the pages of GOLDEN THROWN, a remarkable poetry collection by artist and author Jessica Yatrofsky. This collection boldly explores the realms of love, sensuality, and ambition, pushing boundaries with its cynicism and intensity. Jessica's evocative poem, "Leave No Trace," delicately balances the ephemeral nature of existence, urging readers to reflect on the significance of their presence. In the tapestry of GOLDEN THROWN, this poem shines as a radiant reminder of the power of words to illuminate the complexities of human experience.`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.015',
      externalLink: 'https://opensea.io/collection/jessica-yatrofsky-ocs/drop',
    },
    {
      image:
        'https://assets.onchainsummer.xyz/(Final Artwork) where is my mind.jpg',
      creator: '0x4cA4c3Da7a977D6B5865A96aD5125C4786019b97',
      name: 'Max Kulchinsky',
      description: `Inspired by spiritual iconography like the Hamsa, the Watcher draws attention to the power symbols hold in everyday life. The two works for this drop, specifically, highlight a playful and colorful corner of the series. As with many in the series, "smoke! haze!" and "where is my mind" are named after titles/lyrics of inspiring songs to the artist. “These two Watcher pieces are fun and free like the summer. The colors and textures I accomplished with these also really give a psychedelic energy and a sense of nature. I don’t use a lot of purples or pinks in my work, and my usual blues are mostly out of the picture here. I feel like this is the perfect vibe for an on-chain summer expression.”`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.015',
      externalLink: 'https://opensea.io/collection/max-kulchinsky-ocs/drop',
    },
    {
      image: `https://assets.onchainsummer.xyz/Final Artwork (DreamCatcher's Quest).png`,
      creator: '0x18485A05025a45be1062b1fD27C42dc773086323',
      name: 'ZWIST',
      description: `DreamCatcher’s Quest by ZWIST is an edition artwork that draws its inspiration from previously created landscape works. The piece presents a vast skyscape decorated with delicate butterfly clouds — each one representing dreams, hopes and aspirations. At the center of the piece stands a small and determined Dino character, armed with a handcrafted net, in pursuit of catching the cherished butterflies. In a market filled with highly profitable and quantitative copycat works, one of the butterflies I’m chasing is to move the mainstream artistic narrative of nfts from questionable art experiments to pieces by those who have spent the time and effort into honing their skills. By minting a token you will be supporting an independent artist and receiving an edition of the piece.`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.015',
      externalLink: 'https://opensea.io/collection/zwist-ocs/dropensea.io',
    },
    {
      image:
        'https://assets.onchainsummer.xyz/Final Artwork (I should see a doctor).MP4',
      creator: '0x03794673064dA7862D4e08a09927fC59A9Dd3f4f',
      name: 'Jordan Devant',
      description: `"Being unhealthy feels like a constant fight to feel control over your body but not having the energy to do that. Trying to stand straight and stay awake becomes a tedious task that feels like an endless cycle full of constant stress. Desperately wanting to stand on your own again without feeling weak. This piece is a nod to those feelings."`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 29, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.015',
      externalLink: 'https://opensea.io/collection/jordan-devant-ocs/drop',
    },
  ],
}

export default openSeaConfig

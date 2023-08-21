import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const manifold: Partner = {
  slug: 'manifold',
  name: 'Manifold',
  url: 'https://studio.manifold.xyz/',
  description:
    'Manifold is bringing their favorite artists to Onchain Summer as part of their mission to empower digital creators with the tools that enable true creative sovereignty.',
  brandColor: '#000000',
  icon: '/partners/manifold/icon.png',
  banner: '/partners/manifold/banner-icon.svg',
  aarweaveDigest: '49DSIXV0UonHaisSqARUELRcKhfsmTtr_tnjShKPwMM',
  twitter: '@manifold_labs',
  drops: [
    {
      image: '/partners/manifold/drops/drop-1.jpeg',
      creator: '0xB802162900a4e2d1b2472B14895D56A73aE647E8',
      name: 'Epiphany - 夜',
      address: '0x44aA8003184e46fD1D703b6AFbA9bF0Eb3C3F20c',
      description: `Epiphany - 夜`,
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/Epiphany-night',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0089',
    },
    {
      image: '/partners/manifold/drops/drop-2.png',
      creator: '0x0C88aF8b65C68D1d3cb9eC719E9Ce2A76642E135',
      name: 'Hood Angel',
      address: '0x0145bA1612C794cF325Cc53a1CB34f14F2f96E7b',
      description: `HOOD ANGEL: AN OPEN EDITION CLAIM. c. Sean Wiliams 2023-3033, ART ONLY. 7000 x 7000 px, 78 MB. 

START TIME: 8/21, 12:00 AM CENTRAL - END TIME 8/24, 12:00 AM CENTRAL`,
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/HOODANGEL',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0089',
    },
    {
      image: '/partners/manifold/drops/drop-3.jpeg',
      creator: '0x507D4e199F1f418679dbBd9CC775d846717BeAF2',
      name: 'Carpe Omnia',
      description: `Collecting multiple Carpe Omnia (CO) will enable the collector to eventually bid on a 1 of 1 artwork Carpe Unum using the CO tokens. The more tokens, the more likely a collector is to pick up Carpe Unum.

Enjoy this open edition in all its splendor, or burn a mass of them for the one. It is up to the collector to determine how many open editions they wish to collect in order to have the opportunity to receive this rare 1/1 token.
      
Bidding for Carpe Unum will start late 2023`,
      address: '0xd06aA74ff3dF4cd84C6A60F50Eb641F759dF44a7',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/carpeomnia',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0046',
    },
    {
      image: '/partners/manifold/drops/drop-4.png',
      creator: '0x90902DC0a9C7F695A8600eE9319EE7c195A0e0b9',
      name: 'CAV!TY',
      description: `Digital Sculpture created using Zbrush, Maya, Substance Painter, Cinema 4D, Octane Render, and Photoshop.

Completed August 2023.`,
      address: '0xF950F846B4393ED802569Ce993F27CECd5949673',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/samclover-x-base',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0039',
    },
    {
      image: '/partners/manifold/drops/drop-5.png',
      creator: '0xbdb8ff99D03f45DF9A38a20Fa80da44C5Ad88B24',
      name: 'Family Photo',
      description: `A photo of the KlaraLabs crew.`,
      address: '0xe3ed956Bb57A7480706F7C36ed25E84252cD91ec',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/FamilyPhoto',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.03',
    },
    {
      image: '/partners/manifold/drops/drop-6.jpg',
      creator: '0xB0e11aeB377Ba41d493C8C1bdE123f6991016a03',
      name: 'SlimeSunday',
      description: `The Great Purge

Burn 10 of ANY token to redeem 1 Slimesunday 😃`,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/br/TheGreatPurge',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
    {
      image: '/partners/manifold/drops/drop-7.jpeg',
      creator: '0x11FCBEb2680905bC5922e7a3598a2d3b2e6D5b38',
      name: 'Young & Sick',
      description: `"You're living in the past dude!"

Yep, I am... all the time! Usually when I draw I sit at my desk (often stoned as a goose) and watch old movies or play old records. When I'm not doing that you can find me in some online wormhole unlocking forgotten chunks of my childhood. The things that form us do so very early. I found out while ""researching"" for this piece that a lot of my fascination and obsession over character design comes from 90s toys. I love drawing my lil demons more than anything and I'm pretty sure it's because of the Tamagotchis that perished in my care, the mushrooms I squashed while being Mario, and the terrifying blank stare of a friend's Furby.`,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/nostalgiamachine',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.08',
    },
    {
      image: '/partners/manifold/drops/drop-8.png',
      creator: '0x34d05Abb475c6F65F70fF6427edA8dB9CE4D40ad',
      name: 'Andre Oshea',
      description: `This is my fifth limited Carpe GM edition, an expanded tribute to the culture. This is mint is to celebrate Onchain Summer & the BASE network

“Carpe diem! Rejoice while you are alive; enjoy the day; live life to the fullest; make the most of what you have. It is later than you think.” - Horace
      
“GM” - web3`,
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://app.manifold.xyz/c/carpegm5',
      type: 'external',
      startDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
    },
  ],
}

export default manifold

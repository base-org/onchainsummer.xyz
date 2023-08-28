import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const atari: Partner = {
  slug: 'atari',
  name: 'Atari',
  url: 'https://atari.com/pages/atari-x',
  description:
    'Unlock community, gaming, and IRL utility with a new generation of Atari.',
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/atari/icon.png',
  banner: '/partners/atari/banner-icon.svg',
  aarweaveDigest: 'N-zdPR5w0qhkgOFi9WJBDEnM2WzD4xfSHjF40i4qvq4',
  twitter: '@atari',
  drops: [
    {
      image:
        'https://assets.onchainsummer.xyz/Atari Coinbase Image - Scott Asbury.png',
      creator: '0xe0B3ab982Bd971998991c7E5775C61C1aa6445b4',
      name: 'Atari Summer Camp',
      description: `Nobody’s hotter than Atari this summer! We're throwing it back and bringing the heat with a collection that is hotter than your first console. We’ve hand crafted a digital collectible—The Summer Camp photograph—and 3 off-chain items (real physical merch)—a fanny pack (because pockets are so 2006), a raglan t-shirt (for when you need to flex without flexing), and a trucker hat (sun’s out, scores up).

After minting the fanny pack, shirt, or hat --> head over to our store [https://atari.com/collections/onchain-summer](https://atari.com/collections/onchain-summer) to redeem your physical items*.

Collect all four to get a special easter egg later this year.

*Shipping not included, must redeem before September 8th, 2023.`,
      address: '0xF47A95bf421c2349de30A465a0d54F95ee79920B',
      crossMintClientId: '5f0d1e9a-7ee6-411f-81ec-1bf73485e9f0',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.001972',
      sequence: 300,
    },
    {
      image:
        'https://assets.onchainsummer.xyz/B - Camp Trucker Hat - Scott Asbury.png',
      creator: '0xe0B3ab982Bd971998991c7E5775C61C1aa6445b4',
      name: 'Atari Camp Trucker Hat',
      description: `Need to hide arcade hair or block the sun? This gamer's hat is the crown you didn't know you needed.`,
      address: '0xa82532BD91757Dfd96547c5De115574A88AFD30E',
      crossMintClientId: '79ba2c84-6070-48a9-b9a1-501358a353e4',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01972',
      interactWithNFTLink: {
        url: 'https://atari.com/collections/onchain-summer/',
        label: 'Redeem Your Merch',
      },
      sequence: 1900,
    },
    {
      image:
        'https://assets.onchainsummer.xyz/C - Camp Raglan Shirt - Scott Asbury.png',
      creator: '0xe0B3ab982Bd971998991c7E5775C61C1aa6445b4',
      name: 'Atari Camp Raglan Shirt',
      description: `Raglan tee inspired by camp days where high scores met sunscreen; a nod to joystick-era wins.`,
      address: '0x71B8d8E3c6636656e1344D393811C3E8033f013d',
      crossMintClientId: 'bfbf9d40-6f17-494c-89ed-cf91fa3ecb27',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01972',
      interactWithNFTLink: {
        url: 'https://atari.com/collections/onchain-summer/',
        label: 'Redeem Your Merch',
      },
      sequence: 1800,
    },
    {
      image:
        'https://assets.onchainsummer.xyz/D - Camp Fanny Pack - Scott Asbury.png',
      creator: '0xe0B3ab982Bd971998991c7E5775C61C1aa6445b4',
      name: 'Atari Camp Fanny Pack',
      description: `Retro chic fanny pack for essentials. A stylish nod to gaming's golden age with subtle flair.`,
      address: '0x6Fa44134C5a51fa5c455008B9668caA65c8437C0',
      crossMintClientId: '277d4b77-6182-45cc-a857-23839328a0d1',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01972',
      interactWithNFTLink: {
        url: 'https://atari.com/collections/onchain-summer/',
        label: 'Redeem Your Merch',
      },
      sequence: 20000,
    },
  ],
}

export default atari

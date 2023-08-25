import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const rainbowWallet: Partner = {
  slug: 'rainbow',
  name: 'Rainbow',
  url: 'https://rainbow.me/',
  description:
    'Become a Citizen in RainbowWorld, a new universe on BASE powered by Adworld. Style your Citizen in technicolor skins and unlock loot by holding your favorite projects. Follow the 🌈 for more surprises 😈',
  brandColor: '#e9f2ff',
  icon: '/partners/rainbow-wallet/icon.png',
  banner: '/partners/rainbow-wallet/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@rainbowdotme',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-Hero.gif',
      creator: '0x2B70937AeaCf490b48e1973bD2A40Ba1233569f9',
      name: 'RainbowWorld – powered by AdWorld',
      description: `Generative.
Interactive.
Customizable.
Become a Citizen in RainbowWorld, a new universe on BASE powered by Adworld.
1. Mint to receive your one-of-a-kind Citizen (look out for rare Bald Brian)
2. Enter the Character Creator to bring your Citizen to life\n
   i. Animate your Citizen, evolving your .jpg into a .gif\n
   ii. Customize your Citizen with technicolor skins and exclusive loot unlocked by holding your NFT & ERC-20 tokens\n
   iii. Download your Citizen’s 3D file\n
3. Redeem a custom Rainbow App icon and other 🌈 surprises  🤫`,
      address: '0x6171F829e107F70B58D67594c6B62A7d3eb7F23B',
      crossMintClientId: 'c936df08-17e8-4f03-a843-277ed1618d67',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 26, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01 ETH',
    },
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-CharacterCreator.gif',
      creator: '0x2B70937AeaCf490b48e1973bD2A40Ba1233569f9',
      name: 'Enter the Character Creator',
      description: `Once minted, bring your Citizens to life, style them in technicolor skins and unlock exclusive loot.`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 26, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://adworld.game/create',
      buttonText: 'Customize Your Citizen',
    },
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-RainbowPerks.png',
      creator: '0x2B70937AeaCf490b48e1973bD2A40Ba1233569f9',
      name: 'Rainbow Perks',
      description: `Use your Citizen to unlock exclusive Rainbow App Icons & more 🌈 surprises`,
      address: '0x',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 26, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://rnbwapp.com/rainbow-world',
      buttonText: 'Download and Redeem',
    },
  ],
}

export default rainbowWallet

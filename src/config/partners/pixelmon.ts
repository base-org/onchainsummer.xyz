import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const pixelmon: Partner = {
  slug: 'kevin',
  name: 'Pixelmon',
  url: 'https://www.pixelmon.ai/',
  description:
    'Join and experience the Pixelmon multiplayer open world adventure....and meet Kevin.',
  brandColor: '#F2E6E0',
  icon: '/partners/pixelmon/icon.png',
  banner: '/partners/pixelmon/banner-icon.svg',
  aarweaveDigest: 'HgQGkyssikDTid90XB8kEKd_-Q5cLBEcStL-UnwjXOY',
  twitter: '@Pixelmon',
  drops: [
    {
      image:
        '/partners/pixelmon/drops/FINAL_ART-Kevin-Nanoblock-Illustration-NFT-Manfred Ho.jpg',
      creator: '0xF0A72A215636930c369e220c9fF69861E721103A',
      name: 'Summer Kevin',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.001',
      description: `The Summer Kevin NFT serves as a commemorative art piece to mark the launch of BASE Onchain Summer. Each Summer Kevin NFT entitles you to 

1. A one-time raffle draw for an Unhatched Pixelmon Egg (Worth 0.8ETH) 

2. Access to Pixelmon in-person events (RSVP Required)

3. Perks for the upcoming Pixelmon-BASE mini-game

4. Access to purchase limited edition Kevin Buildoor Block Set (Physical Collectible)

Fun Fact: Did you know that Kevin cannot swim?`,
      address: '0x9d9c0C4e764117FccD2bc3548f0E95c806e6F996',
      mintType: MintType.ThirdWeb,
      crossMintClientId: '03579467-b595-42d9-b413-98ab69ac0d41',
      interactWithNFTLink: {
        url: 'https://pixelmonshop.myshopify.com/products/kevin-nanoblock',
        label: 'Shop',
      },
    },
    {
      image: '/partners/pixelmon/drops/Toy.png',
      creator: '0xF0A72A215636930c369e220c9fF69861E721103A',
      name: 'Kevin Buildoor Block Set (Physical Collectible)',
      externalLink:
        'https://pixelmonshop.myshopify.com/products/kevin-nanoblock',
      type: 'external',
      startDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: `ONLY available for Summer Kevin, Pixelmon and Pixelmon Trainers NFT holders. 
      
      Introducing Kevin Buildoor Block, your ultimate companion. With 705 individual lego blocks available, you can chain them together to build your very own Kevin. Standing at 10 cm tall, Kevin is the perfect solution whether you're in need of a charming garden gnome or a free therapist.
      `,
      address: '0x',
      mintType: MintType.External,
      crossMintClientId: '',
      buttonText: 'Shop',
    },
  ],
}

export default pixelmon

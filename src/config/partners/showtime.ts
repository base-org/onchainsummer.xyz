import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const showtime: Partner = {
  slug: 'showtime',
  name: 'Showtime',
  url: 'https://showtime.xyz/',
  description:
    'Showtime is making digital collectibles useful, social, and accessible to all. Collect drops to unlock exclusive creator content.',
  brandColor: 'rgb(231, 171, 67)',
  icon: '/partners/showtime/icon.png',
  banner: '/partners/showtime/banner-icon.svg',
  aarweaveDigest: 'RAk9JeVU0TH1i4NlPsYwlLpy0GT6K_6EbDGSK0UezXY',
  twitter: '@Showtime_xyz',
  drops: [
    {
      image: '/partners/showtime/drops/drop-1.png',
      creator: '0x7F255F64e81E540144aC41f32fcc25fA33586FFD',
      name: `Showtime Summer: Unlock Artists' Perks`,
      externalLink: 'https://showtime.xyz/@blondish/blondishs-treasure-chest',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0038',
      description: `Join the Onchain Summer Party with Showtime Drops! We’re teaming up with incredible web3-forward artists around including [BLOND:ISH](https://showtime.xyz/@blondish/blondishs-treasure-chest), trance legend [BT](https://showtime.xyz/@bt/grana), India’s own KR$NA, and Eurovision’s [Rosa Linn](https://showtime.xyz/@rosalinn/fan-club-access-pass) from the smash-hit “Snap.” And that’s just the start.
            
Exclusive Goodies Just for You: Want to hear some never-released music or snag a promo code for awesome merch? How about a private Zoom call with one of the stars? Collect those drops, and these exclusives and more can be yours. It’s like a backstage pass right in your pocket.
      
Wrap It Up with Incredible Raffles: Stick around to the end, and you could score big. We’re talking all-expenses-paid trips to live shows, including an evening in Paris. And don’t forget signed jackets, vinyls, and so much more. Who knows what you could walk away with? It’s all part of the fun with Showtime Drops this Onchain Summer. Get in on it!`,
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: '/partners/showtime/drops/drop-2.jpg',
      creator: '0x7F255F64e81E540144aC41f32fcc25fA33586FFD',
      name: `BLOND:ISH's Treasure Chest`,
      externalLink: 'https://showtime.xyz/@blondish/blondishs-treasure-chest',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0038',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/showtime-drop-2.mp4',
      creator: '0x6897c2ad5512e273efb57ec6deb96d49cd83ee97',
      name: `BT: Grana`,
      externalLink: 'https://showtime.xyz/@bt/grana',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0055',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/RosaLinn.MP4',
      creator: '0xcdCcBe455550a7AC859659Dcdbc333289b7371De',
      name: `Rosa Linn: Fan Club Access Pass`,
      externalLink: 'https://showtime.xyz/@rosalinn/fan-club-access-pass',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0055',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/showtime-drop-4.mp4',
      creator: '0xDB83ea3B2A65300078532966Fd48322518632EE4',
      name: `Annika Rose: "Dad" Demo Access Pass`,
      externalLink: 'https://showtime.xyz/@AnnikaRose/dad-demo-access-pass',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.00275',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/showtime-drop-5.mp4',
      creator: '0x14ABD459dC0158d3c267fA2235aFeF6439117498',
      name: `Saxsquatch: Northern Lights`,
      externalLink: 'https://showtime.xyz/@saxsquatch/northern-lights',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.00275',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/showtime-drop-6.mp4',
      creator: '0x194Cea1B10a5f29f1899208D83f32cBbe132b0A5',
      name: `Half an Orange: laughing at our own jokes`,
      externalLink:
        'https://showtime.xyz/@halfanorange/laughing-at-our-own-jokes',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.00274',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: 'https://assets.onchainsummer.xyz/showtime-drop-7.mp4',
      creator: '0x6AcDf8958f7852720733A375e6accFa8Ec7C42d0',
      name: `Talia Lahoud: Performance Pass`,
      externalLink:
        'https://showtime.xyz/@talia_lahoud/performance-access-pass',
      type: 'external',
      startDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.00274',
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
  ],
}

export default showtime

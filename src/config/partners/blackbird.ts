import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const blackbird: Partner = {
  slug: 'blackbird',
  name: 'Blackbird',
  url: 'https://www.blackbird.xyz/',
  description:
    'Join Blackbird to unlock two exclusive Summer Passes (designed by renowned multi-disciplinary artist Lucien Smith) that will power-up your Blackbird account, enabling you to unlock cool insider perks at participating restaurants.',
  brandColor: '#000000',
  icon: '/partners/blackbird/icon.png',
  banner: '/partners/blackbird/banner-icon.svg',
  aarweaveDigest: 'D-InXuDVczYGgpI82Ivudt1i7LIw_N3BJ3xC719Flwo',
  twitter: '@blackbird_xyz',
  drops: [
    {
      image:
        '/partners/blackbird/drops/Blackbird-Summer-Pass-Summertime-Sweet.png',
      creator: '0x27193862848d9009ab6d01941ceb9fc86b17ab27',
      name: 'Blackbird Summer Pass: Summertime Sweet',
      externalLink: 'blackbird.xyz/summerpass',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 15, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.014',
      description:
        "As part of Coinbase's Onchain Summer, Blackbird's Summertime Sweet Pass earns holders a 1,000 $FLY bonus on their next restaurant tap-in, plus a complimentary sweet surprise at select Blackbird partner restaurants (from 8.15-8.22) and access to a private Discord channel for pre-sale NFT drops, new products, and more.",
      // TODO: update address
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image:
        '/partners/blackbird/drops/Blackbird-Summer-Pass-Supercharge-Summer.png',
      creator: '0x27193862848d9009ab6d01941ceb9fc86b17ab27',
      name: 'Blackbird Summer Pass: Supercharge Summer',
      externalLink: 'blackbird.xyz/summerpass',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 15, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      description:
        "With Blackbird's Supercharge Summer pass, you will get a 1,000 $FLY bonus on your next restaurant check-in.",
      // TODO: update address
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
  ],
}

export default blackbird

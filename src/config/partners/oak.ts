import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const oak: Partner = {
  slug: 'oak',
  name: 'OAK',
  url: 'https://oak.tech/',
  description:
    'Support OAK, the first onchain local community currency in the United States.',
  brandColor: '#95098b',
  icon: '/partners/oak/icon.png',
  banner: '/partners/oak/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@oak_network',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-HeroImage.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: 'OAK: Every City Onchain',
      description: `OAK is an onchain community currency supporting local businesses in Oakland, California. Local currencies can circulate value locally, save small businesses money, and support local causes - join us in your city. 

Crypto lets us free ourselves from big banks and financial companies that extract value every time we swipe a credit card. With blockchain we’re empowered to exchange value independently peer-to-peer.

For our Onchain Summer collection OAK has teamed up with and will be splitting mint proceeds with local artist Brandon Ruffin, a photographer, web3 futurist, filmmaker, and writer based in Oakland.

Brandon currently works on a research team in the area of Computational Photography at Google pushing the capabilities of machine learning and traditional photography, and is a contributor for publications such as Rolling Stone, New York Times, and the SF Chronicle.

Onchain Summer collectors will receive tiered perks such as exclusive updates, 1:1 calls, and a one-time future gift of OAK at an IRL event.`,
      address: '0xc3Fa844b08498fC172B3637CBbBdC3476d55B063',
      crossMintClientId: 'f6a26988-1349-4e74-9848-38dd2fe04627',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
    },
    {
      image:
        'https://assets.onchainsummer.xyz/Final_art-thousandcurrencies.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: 'OAK: One Thousand Local Currencies',
      description: `OAK is an onchain local currency in Oakland, California. Mint & support the onchain local currency effort.`,
      address: '0x19cb646bC7d7d23Ba23F4A4CBeFd0aC071A733AB',
      crossMintClientId: '725aff28-ff86-4a3b-b36e-4bc333a52aae',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.001',
    },
    {
      image: 'https://assets.onchainsummer.xyz/FINAL_ART-onchaincities.png',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: 'OAK: Onchain Cities Champion',
      description: `Mint for invitations to exclusive webinars and reports, as well as a future in-person gift of 50 OAK.`,
      address: '0x2642A271F700387FCe74d658A3138987c2FF7aCD',
      crossMintClientId: 'b8d4f833-6d69-470c-a640-5b89ecc5ddca',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.1',
    },
    {
      image:
        'https://assets.onchainsummer.xyz/Final_art-thousandcurrencies.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: 'OAK: Onchain Cities Crusader',
      description: `Mint for access to 1:1 calls with the OAK team, exclusive reports, and a future in-person gift of 50 OAK.
    `,
      address: '0x7fdfeE11045e3575398F6a278008d9B7B2097316',
      crossMintClientId: 'ff0d88fd-7f43-46a7-9014-eda1a3f3f635',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '1',
    },
  ],
}

export default oak

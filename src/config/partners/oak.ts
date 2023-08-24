import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const oak: Partner = {
  slug: 'oak',
  name: 'Oak',
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
      image: 'https://assets.onchainsummer.xyz/Final_Art-hero.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: 'OAK: Every City Onchain',
      description: `OAK is an onchain community currency supporting local businesses in Oakland, California. Local currencies can circulate value locally, save small businesses money, and support local causes - join us in your city.   Crypto lets us free ourselves from big banks and financial companies that extract value every time we swipe a credit card. With blockchain we're empowered to exchange value independently peer-to-peer.   For our Onchain Summer collection OAK has teamed up with and will be splitting mint proceeds with local artist Brandon Ruffin, a photographer, web3 futurist, filmmaker, and writer based in Oakland. Currently a Leica Ambassador, Brandon fell in love with the visual medium over 17 years ago. Brandon currently works on a research team in the area of Computational Photography at Google pushing the capabilities of machine learning and traditional photography.   Brandon finds himself drawn to stories that dissect humanity, most often through the world of portraiture and photojournalism. Brandon has given lectures at academic institutions such as UC Berkeley as well as instructional workshops inside tech spaces such as Apple, VSCO, and Google.  Brandon has a passion for working with marginalized communities and in neighborhoods that are often overlooked and underrepresented.   Brandon is a contributor for publications such as Rolling Stone, New York Times, and the SF Chronicle.  All collectors will be invited to join the global movement for onchain community currency 0.01 ETH “OAK Global Community” NFT will grant invitations to exclusive webinars, conversations, and reports from the field as we build an IRL onchain economy in Oakland, California.  0.1 ETH “Onchain Cities Champion” NFT will grant invitations to exclusive webinars, conversations, and reports from the field as we build an IRL onchain economy in Oakland, California, as well as a future gift of $50 of OAK at an in-person event  1 ETH “Community Crusader” NFT will grant access to 1:1 calls with OAK team members,  invitations to exclusive webinars, conversations, and reports from the field as we build an IRL onchain economy in Oakland, California, and a future gift of $50 of OAK at an in-person event`,
      address: '0xc3Fa844b08498fC172B3637CBbBdC3476d55B063',
      crossMintClientId: 'f6a26988-1349-4e74-9848-38dd2fe04627',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01 ETH',
    },
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-lm-bnw.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: '',
      description: ``,
      address: '0x19cb646bC7d7d23Ba23F4A4CBeFd0aC071A733AB',
      crossMintClientId: '725aff28-ff86-4a3b-b36e-4bc333a52aae',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.001 ETH',
    },
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-sal-boathouse.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: '',
      description: ``,
      address: '0x2642A271F700387FCe74d658A3138987c2FF7aCD',
      crossMintClientId: 'b8d4f833-6d69-470c-a640-5b89ecc5ddca',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.1 ETH',
    },
    {
      image: 'https://assets.onchainsummer.xyz/Final_Art-for-the-children.jpg',
      creator: '0x6C8bdE31530Ca3382150Fb18e17D8f920CcF86BE',
      name: '',
      description: ``,
      address: '0x7fdfeE11045e3575398F6a278008d9B7B2097316',
      crossMintClientId: 'ff0d88fd-7f43-46a7-9014-eda1a3f3f635',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 28, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 9, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '1 ETH',
    },
  ],
}

export default oak

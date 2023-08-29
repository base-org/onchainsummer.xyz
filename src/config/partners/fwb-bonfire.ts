import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const fwbBonfire: Partner = {
  slug: 'bonfire',
  name: 'Bonfire',
  url: 'https://bonfire.xyz',
  description:
    'Create a custom branded and web3-native home for your community with no code. Import your collections, design custom mint pages, and grow and engage your community through gated content, contests, and more.',
  brandColor: '#000000',
  icon: '/partners/fwb-bonfire/icon.png',
  banner: '/partners/fwb-bonfire/banner-icon.svg',
  aarweaveDigest: 'HTXHZIR5WXI3N7rehIKBtir-Th0QV7d_u12Ss6w6cqw',
  twitter: '@bonfire_tweets',
  drops: [
    {
      image: 'https://assets.onchainsummer.xyz/image (27).png',
      creator: '0x2acCcdaBc0aCf92D670d430AaEC6b440311cC7a5',
      name: 'LNRZ Presents: Marian Hill - Everytime',
      description: `LNRZ is a web3-based collective, curator and music distributor. As long time fans of Marian Hill we’re excited to present “Everytime.” This was one of the first songs the platinum-selling band made together (2014), but was lost on their hard drive until now.`,
      address: '0x9e724a1e5b7f6879662bd2a1fe77c1d0495bb4f2',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.005',
      externalLink: 'https://lnrz.xyz',
    },
    {
      image: 'https://assets.onchainsummer.xyz/UFO_FMTOUR_collage copy.jpg',
      creator: '0x92f551665C69586Fd5f30e6EFdB78aC882B22d17',
      name: 'FM TOUR 2023',
      description: `Your ticket for the mystery FM TOUR.

UFO is a collective signal. Starting a club for music, arts and ideas. A shared imagination and space for discovery.

Onchain radio goes live in the near future. We begin with some experimental tests.`,
      address: '0x8d818f34a95b7c0f9e0b3e5fbf3b016085ebba1a',
      crossMintClientId: '',
      mintType: MintType.External,
      type: 'external',
      startDate: Date.UTC(2023, 7, 30, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 2, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://tour.ufo.fm',
    },
  ],
}

export default fwbBonfire

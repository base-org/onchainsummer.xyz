import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const fwb: Partner = {
  slug: 'fwb',
  name: 'FWB',
  url: 'https://www.fwb.help/',
  description: `A unique piece designed by deekaymotion in collaboration with Cozomo de Medici`,
  brandColor: '#000000',
  icon: '/partners/fwb/icon.png',
  banner: '/partners/fwb/banner-icon.svg',
  aarweaveDigest: 'BtttCd5ecU0USQhFQ9wGZCmQ1Exq-nEhSUDViy0B_RY',
  twitter: '@FWBtweets',
  drops: [
    {
      image: '/partners/fwb/drops/ETH.mov',
      creator: '0xff4653a175d6Eeb13ba9823FF6b6669170F191fE',
      name: 'New Era ETH',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 10, 16, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 11, 16, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
      address: '0xc9Cca8E570F81a7476760279B5B19cc1130B7580',
      crossMintClientId: '260f26bf-8c57-43d3-a118-cc162ca10e99',
      mintType: MintType.ThirdWeb,
      openSeaLink: 'https://opensea.io/collection/deekay-motion-new-era-eth',
      description: `In partnership with Cozomo de’ Medici, DeeKay Motion releases his first ever open edition works as the inaugural art mint on BASE.

New Era is a celebration of the inevitable future where crypto will be currency and art will be digital.

New Era (ETH) and New Era (BTC) together form the New Era Set. Collect both works and complete the set during this 24 hour mint.`,
    },
    {
      image: '/partners/fwb/drops/BTC.mov',
      creator: '0xff4653a175d6Eeb13ba9823FF6b6669170F191fE',
      name: 'New Era BTC',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 10, 16, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 11, 16, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
      address: '0x05b8ee5658F3AD6C268C08B7A70f2FB4B10cf348',
      crossMintClientId: '194a2db0-edd9-4e4e-ac28-6ca23697fd5a',
      mintType: MintType.ThirdWeb,
      openSeaLink: 'https://opensea.io/collection/deekay-motion-new-era-btc',
      description: `In partnership with Cozomo de’ Medici, DeeKay Motion releases his first ever open edition works as the inaugural art mint on BASE.

New Era is a celebration of the inevitable future where crypto will be currency and art will be digital.

New Era (ETH) and New Era (BTC) together form the New Era Set. Collect both works and complete the set during this 24 hour mint.`,
    },
  ],
}

export default fwb

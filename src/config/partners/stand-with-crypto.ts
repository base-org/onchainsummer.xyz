import { MintType } from '@/components/MintDialog/types'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const standWithCrypto: Partner = {
  slug: 'standwithcrypto',
  name: 'Stand with Crypto',
  url: 'https://www.coinbase.com/public-policy/advocacy/standwithcrypto',
  description:
    'Show your support for crypto innovation and advocacy by participating in a virtual Day of Action, with each action unlocking future rewards, and the opportunity to mint a special Day of Action x Stand with Crypto shield.',
  brandColor: 'rgb(1, 76, 236)',
  icon: '/partners/stand-with-crypto/icon.png',
  banner: '/partners/stand-with-crypto/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@standwithCrypt',
  drops: [
    {
      // TODO: Update image
      image: '',
      // TODO: Update creator
      creator: '',
      name: ' Stand with Crypto Alliance',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 12, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.00435',
      mintType: MintType.ThirdWeb,
      // TODO: Update contract address
      address: '0x0',
      crossMintClientId: '',
      description:
        'The Stand with Crypto Alliance unifies the crypto community and our ongoing pursuit of economic freedom and innovation. To commemorate the launch of Stand with Crypto Alliance and Onchain Summer, our first mint is a Stand with Crypto x OCS collectible mint, with all proceeds going to the Stand with Crypto Alliance non-profit organization.',
    },
  ],
}

export default standWithCrypto

import { Partner } from './types'
import { limited } from '../test-contracts'
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
      image: '/partners/stand-with-crypto/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Stand With Crypto Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 15, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default standWithCrypto

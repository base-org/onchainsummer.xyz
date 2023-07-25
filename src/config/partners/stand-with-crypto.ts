import { Partner } from './types'
import { unlimited, limited } from '../test-contracts'

const standWithCrypto: Partner = {
  slug: 'stand-with-crypto',
  name: 'Stand With Crypto',
  url: 'https://www.coinbase.com/public-policy/advocacy/standwithcrypto',
  description:
    'Stand with Crypto unites global crypto advocates, forming a passionate community committed to driving sensible crypto innovation and crypto policy. Policymakers across the globe are making decisions about the future of crypto. Their choices will determine how, when, and where YOU can build, buy, sell, and use crypto, and it’s critical that they get it right. ',
  brandColor: 'rgb(1, 76, 236)',
  icon: '/partners/stand-with-crypto/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@standwithCrypt',
  drops: [
    {
      image: '/partners/stand-with-crypto/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Stand With Crypto Drop',
      ...limited,
      type: 'erc-721',
      startDate: new Date('2023-08-14').getTime(),
      endDate: new Date('2023-08-15').getTime(),
      price: '0.0001',
    },
  ],
}

export default standWithCrypto

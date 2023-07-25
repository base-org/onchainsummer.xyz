import { DAY, Partner } from './types'

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
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
      type: 'erc-721',
      startDate: new Date('2023-08-14').getTime(),
      endDate: new Date('2023-08-15').getTime(),
      price: '0.0001',
    },
  ],
}

export default standWithCrypto

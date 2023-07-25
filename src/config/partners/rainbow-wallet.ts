import { Partner } from './types'
import { limited } from '../test-contracts'

const rainbowWallet: Partner = {
  slug: 'rainbow-wallet',
  name: 'Rainbow Wallet',
  url: 'https://rainbow.me/',
  description:
    'Rainbow is a community owned platform for creators to monetize their digital work.',
  brandColor: '#e9f2ff',
  icon: '/partners/rainbow-wallet/icon.png',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@rainbowdotme',
  drops: [
    {
      image: '/partners/rainbow-wallet/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Rainbow Drop',
      ...limited,
      type: 'erc-721',
      startDate: new Date('2023-08-26').getTime(),
      endDate: new Date('2023-08-27').getTime(),
      price: '0.0001',
    },
  ],
}

export default rainbowWallet

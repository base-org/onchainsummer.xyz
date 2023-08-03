import { Partner } from './types'

const atari: Partner = {
  slug: 'bridge-to-base',
  name: 'Base',
  url: '',
  description: `Base mainnet opens for everyone on August 9 with Onchain Summer, a multi-week festival of onchain art, music, gaming, & more.

Bridge today to get ready and mint an NFT that commemorates you being early, one of the first to teleport to the new internet.
`,
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/base/icon.png',
  aarweaveDigest: '',
  twitter: '@BuildonBase',
  drops: [
    {
      image: '/partners/base/drop/giphy.gif',
      creator: '0x9652721d02b9db43f4311102820158aBb4ecc95B',
      name: 'Bridge to Base',
      address: '0xEa2a41c02fA86A4901826615F9796e603C6a4491',
      crossMintClientId: '',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 2, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 31, 13, 0, 0, 0),
      price: '0',
    },
  ],
}

export default atari

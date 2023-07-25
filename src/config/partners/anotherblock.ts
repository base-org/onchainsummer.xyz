import { DAY, Partner } from './types'

const anotherblock: Partner = {
  slug: 'anotherblock',
  name: 'Anotherblock',
  url: 'https://anotherblock.io/',
  description:
    'Anotherblock is a community driven, decentralized finance (DeFi) platform that lets you trade, earn and borrow crypto assets.',
  brandColor: '#000000',
  icon: '/partners/anotherblock/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@anotherblock_io',
  drops: [
    {
      image: '/partners/anotherblock/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Anotherblock Drop',
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
      type: 'erc-721',
      startDate: new Date('2023-08-13').getTime(),
      endDate: new Date('2023-08-14').getTime(),
      price: '0.0001',
    },
  ],
}

export default anotherblock

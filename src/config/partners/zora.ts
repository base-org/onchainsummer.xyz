import { Partner } from './types'

const zora: Partner = {
  slug: 'zora',
  name: 'Zora',
  url: 'https://zora.co/',
  description:
    'Zora is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/zora/logo.webp',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@lo',
  drops: [
    {
      image: '/partners/zora/drops/drop.gif',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Zora Drop',
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
      type: 'erc-721',
      startDate: new Date('2023-08-16').getTime(),
      endDate: new Date('2023-08-17').getTime(),
      price: '0.0001',
    },
  ],
}

export default zora

import { Partner } from './types'

const fwb: Partner = {
  slug: 'fwb',
  name: 'Friends With Benefits',
  url: 'https://www.fwb.help/',
  description:
    'Friends With Benefits is a community of builders, creatives, and investors who believe in the power of social tokens and the communities they create. We are a decentralized autonomous organization (DAO) that supports the growth of the social token ecosystem through community grants, educational initiatives, and community events.',
  brandColor: '#000000',
  icon: '/partners/fwb/icon.jpg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@FWBtweets',
  drops: [
    {
      image: '/partners/fwb/drops/fwb.jpg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Friends With Benefits',
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
      type: 'erc-721',
      startDate: new Date('2023-08-09').getTime(),
      endDate: new Date('2023-08-10').getTime(),
      price: '0.0001',
    },
  ],
}

export default fwb

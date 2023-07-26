import { DAY, Partner } from './types'
import { unlimited } from '../test-contracts'

const openSeaConfig: Partner = {
  slug: 'open-sea',
  name: 'OpenSea',
  url: 'https://opensea.io/',
  description:
    'Our cutting-edge platform not only empowers but also inspires artists, creators, and collectors, enabling them to actively engage and thrive in the groundbreaking digital revolution of non-fungible tokens (NFTs).',
  brandColor: '#2081E2',
  icon: '/partners/open-sea/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@opensea',
  drops: [
    {
      image: '/partners/open-sea/drop/main.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Space Light Dark',
      ...unlimited,
      type: 'erc-721',
      startDate: new Date('2023-08-29').getTime(),
      endDate: new Date('2023-08-30').getTime(),
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/1.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Closer to the Sun',
      startDate: new Date('2023-08-29').getTime(),
      endDate: new Date('2023-08-30').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Runaway',
      startDate: new Date('2023-08-29').getTime(),
      endDate: new Date('2023-08-30').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Yu-Gi-Oh!',
      startDate: new Date('2023-08-29').getTime(),
      endDate: new Date('2023-08-30').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Number 1',
      startDate: new Date('2023-08-29').getTime(),
      endDate: new Date('2023-08-30').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
  ],
}

export default openSeaConfig

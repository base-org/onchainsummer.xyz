import { DAY, Partner } from './types'
import { utcToZonedTime } from 'date-fns-tz'
import { unlimited, limited } from '../test-contracts'

const cokeConfig: Partner = {
  slug: 'coke',
  name: 'Coke',
  url: 'https://www.coca-cola.com/',
  description:
    'Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known product in the world. Created in Atlanta, Georgia, by Dr. John S. Pemberton, Coca-Cola was first offered as a fountain beverage by mixing Coca-Cola syrup with carbonated water. Coca-Cola was introduced in 1886, patented in 1887, registered as a trademark in 1893 and by 1895 it was being sold in every state and territory in the United States. In 1899, The Coca-Cola Company began franchised bottling operations in the United States.',
  brandColor: '#F40009',
  icon: '/partners/coke/icon.png',
  banner: '/partners/coke/banner-icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@CocaCola',
  drops: [
    {
      image: '/partners/coke/drop/coke.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Coke NFT Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 12, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 13, 13, 0, 0, 0),
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/1.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: '',
      name: 'Closer to the Sun',
      startDate: Date.UTC(2023, 7, 12, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 13, 13, 0, 0, 0),
      ...limited,
      type: 'erc-721',
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: '',
      name: 'Runaway',
      startDate: Date.UTC(2023, 7, 12, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 13, 13, 0, 0, 0),
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Yu-Gi-Oh!',
      startDate: Date.UTC(2023, 7, 12, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 13, 13, 0, 0, 0),
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Number 1',
      startDate: Date.UTC(2023, 7, 12, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 13, 13, 0, 0, 0),
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      price: '0.0001',
    },
  ],
}

export default cokeConfig

import { Partner } from './types'
import { unlimited } from '../test-contracts'

import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const anotherblock: Partner = {
  slug: 'anotherblock',
  name: 'anotherblock',
  url: 'https://anotherblock.io/',
  description:
    'Music rights marketplace anotherblock empowers the emotional and financial connection between artists and fans. Collect. Own. Belong. Music ownership reinvented.',
  brandColor: '#000000',
  icon: '/partners/anotherblock/icon.png',
  banner: '/partners/anotherblock/banner-icon.svg',
  aarweaveDigest: 'dn1ttJSU9CTLhVhymlOLv9BpAhusmVVbdAG11I-CgRQ',
  twitter: '@anotherblock_io',
  drops: [
    {
      image: '/partners/anotherblock/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Anotherblock Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 12, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default anotherblock

import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const fini: Partner = {
  slug: 'fini',
  name: 'Fini',
  url: 'https://fini.world/',
  description:
    'Mint an adorable, dynamic Fini character whose moods and actions are tied to your activity on Base.',
  brandColor: 'rgb(255, 121, 121)',
  icon: '/partners/fini/icon.png',
  banner: '/partners/fini/banner-icon.svg',
  aarweaveDigest: 'BKqxrl0WP_Obyrq8G4aeQBVwRRJJmZTiwWny115n0hI',
  twitter: '@finiliar',
  drops: [
    {
      image: '/partners/fini/drops/drop.gif',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'fini Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 8, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default fini

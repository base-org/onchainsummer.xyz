import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const blackbird: Partner = {
  slug: 'blackbird',
  name: 'Blackbird',
  url: 'https://www.blackbird.xyz/',
  description:
    'Join the Blackbird community to get access to sweet treats at your favorite restaurants with onchain rewards.',
  brandColor: '#000000',
  icon: '/partners/blackbird/icon.png',
  banner: '/partners/blackbird/banner-icon.svg',
  aarweaveDigest: 'D-InXuDVczYGgpI82Ivudt1i7LIw_N3BJ3xC719Flwo',
  twitter: '@blackbird_xyz',
  drops: [
    {
      image: '/partners/blackbird/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Blackbird Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 15, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default blackbird

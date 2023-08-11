import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const atari: Partner = {
  slug: 'atari',
  name: 'Atari',
  url: 'https://atari.com/pages/atari-x',
  description:
    'Unlock community, gaming, and IRL utility with a new generation of Atari.',
  brandColor: 'rgb(209,66,65)',
  icon: '/partners/atari/icon.png',
  banner: '/partners/atari/banner-icon.svg',
  aarweaveDigest: 'UD3mCdsfAiOoTqpuccjP13MusI9abvqqQn4gbKpqa24',
  twitter: '@atari',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 25, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 26, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default atari

import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const indelible: Partner = {
  slug: 'indelible',
  name: 'Indelible',
  url: 'https://indelible.xyz/',
  description:
    "Collect art curated by Indelible Labs and learn how they're empowering artists who want to take their ideas onchain.",
  brandColor: 'rgb(0, 224, 191)',
  icon: '/partners/indelible/icon.png',
  banner: '/partners/indelible/banner-icon.svg',
  aarweaveDigest: 'XzNUxTbsDb-TbDEEloEHTfRfKPDpVSXAKfORPTfj9zc',
  twitter: '@indelible_labs',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 21, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default indelible

import { Partner } from './types'
import { unlimited } from '../test-contracts'

const mirrorWellness: Partner = {
  slug: 'mirror-wellness',
  name: 'Mirror Wellness',
  url: 'https://www.mirror.co/',
  description:
    'Mirror Wellness is a community owned platform for creators to monetize their digital work.',
  brandColor: '#000000',
  icon: '/partners/mirror-wellness/icon.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@lululemonstudio',
  drops: [
    {
      image: '/partners/mirror-wellness/drops/drop.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Mirror Wellness Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: new Date('2023-08-19').getTime(),
      endDate: new Date('2023-08-20').getTime(),
      price: '0.0001',
    },
  ],
}

export default mirrorWellness

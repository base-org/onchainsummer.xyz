import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const mirrorWellness: Partner = {
  slug: 'mirrorswellnessclub',
  name: 'Mirrors Wellness Club',
  url: 'https://mirrorswellnessclub.io',
  description:
    'Join a community centered around onchain and IRL wellness with the Mirror Wellness Club.',
  brandColor: '#000000',
  icon: '/partners/mirror-wellness/icon.png',
  banner: '/partners/mirror-wellness/banner-icon.svg',
  aarweaveDigest: 'bmQjUTikZ5tLnw2P_uTdQGhHjMZKwlCgoxwBFWJHdBY',
  twitter: '@lululemonstudio',
  drops: [
    {
      image: '/partners/mirror-wellness/drops/drop.gif',
      creator: '0x1EbA9Bb7c60353a2cA0a57C8B1A6DF3b206e2c34',
      name: 'The Wellness Card',
      description: `Mirrors Wellness Club (MWC) is a community with a mission to educate & build upon the three pillars of wellness: physical, mental & financial wellness. MWC is for all people who want to live a healthy lifestyle inside and outside of the metaverse. We curate experiences, both virtual & in real life, as well as educate at the intersection of wellness x web3. After 2 years of activations like wellness mixers, cycling classes, kickboxing, sunset yoga, community retreats, and more, we’re excited to finally launch our first MWC membership NFTs to expand on our mission of bringing wellness onchain!

What does the holder of the Wellness Card receive:

- (3) therapy sessions yearly
- Unlock private investment opportunities
- Premium Gifting
- Access to curated virtual experiences such as education seminars, soundbaths, & community conversations with wellness professionals in our network

Much more on the way!`,
      mintType: MintType.ThirdWeb,
      address: '0x6a55463a66e585767c6Cce622d2018572a0aa7D1',
      crossMintClientId: 'f023e02c-8d7e-4b42-997e-20d036d1ba17',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 19, CAMPAIGN_HOUR + 2, CAMPAIGN_MINUTE, 0, 0),
      price: '0.01',
    },
  ],
}

export default mirrorWellness

import { StaticImageData } from 'next/image'

import OnChainSummer from '../../public/community/onchain-summer.png'
import BuildOnBase from '../../public/community/build-on-base.png'
import BasedAccounts from '../../public/community/based-accounts.png'
import StandWithCrypto from '../../public/community/stand-with-crypto.png'

interface CommunityData {
  title: string
  subTitle: string
  list: string[]
  grantValue: number
  grantsAvailable: number
  startDate: number
  endDate: number
  image: StaticImageData
}

export const communityData: CommunityData[] = [
  {
    title: 'Onchain Summer',
    subTitle: 'Make something inspired by onchain summer!',
    list: [
      'An onchain summer inspired pfp series',
      'Website to visualize Base onchain summer activity',
      'Alternate interface for onchainsummer.xyz',
    ],
    grantValue: 2,
    grantsAvailable: 10,
    startDate: new Date('2021-08-07').getTime(),
    endDate: new Date('2021-08-20').getTime(),
    image: OnChainSummer,
  },
  {
    title: 'Build on Base',
    subTitle: 'Dev focused, build something cool on Base',
    list: ['Build a new Dapp', 'Create developer tooling', 'Improve infra'],
    grantValue: 5,
    grantsAvailable: 5,
    startDate: new Date('2021-08-07').getTime(),
    endDate: new Date('2021-08-20').getTime(),
    image: BuildOnBase,
  },
  {
    title: 'Stand with Crypto',
    subTitle: '1 minute video contest',
    list: [
      'Share a crypto story or use case',
      'Educate on cryptos benefits',
      'Advocate on important legislation',
    ],
    grantValue: 5,
    grantsAvailable: 5,
    startDate: new Date('2021-08-07').getTime(),
    endDate: new Date('2021-08-20').getTime(),
    image: StandWithCrypto,
  },
  {
    title: 'Based Accounts',
    subTitle: 'Building Account Abstraction on Base',
    list: ['Bundlers', 'Paymasters', 'Smart contract wallets', 'Clients'],
    grantValue: 5,
    grantsAvailable: 5,
    startDate: new Date('2021-08-07').getTime(),
    endDate: new Date('2021-08-20').getTime(),
    image: BasedAccounts,
  },
]

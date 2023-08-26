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
  link: string
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
    link: 'https://prop.house/base/onchain-summer',
    grantValue: 2,
    grantsAvailable: 10,
    startDate: new Date('2021-08-09').getTime(),
    endDate: new Date('2021-08-18').getTime(),
    image: OnChainSummer,
  },
  {
    title: 'Build on Base',
    subTitle: 'Dev focused, build something cool on Base',
    list: ['Build a new Dapp', 'Create developer tooling', 'Improve infra'],
    link: 'https://prop.house/base/build-on-base',
    grantValue: 5,
    grantsAvailable: 5,
    startDate: new Date('2021-08-12').getTime(),
    endDate: new Date('2021-08-28').getTime(),
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
    link: 'https://prop.house/base/stand-with-crypto',
    grantValue: 5,
    grantsAvailable: 5,
    startDate: new Date('2021-08-16').getTime(),
    endDate: new Date('2021-09-13').getTime(),
    image: StandWithCrypto,
  },
  {
    title: 'Based Accounts',
    subTitle: 'Building Account Abstraction on Base',
    list: ['Bundlers', 'Paymasters', 'Smart contract wallets', 'Clients'],
    link: 'https://prop.house/base/based-accounts',
    grantValue: 5,
    grantsAvailable: 5,
    startDate: new Date('2021-08-14').getTime(),
    endDate: new Date('2021-09-14').getTime(),
    image: BasedAccounts,
  },
]

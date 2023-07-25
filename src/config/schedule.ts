import { isProd } from './chain'
import { openSea, sushi, openSeason, coke, fwb, parallel } from './partners'
import { Partner } from './partners/types'

export const schedule: Record<string, Partner> = isProd
  ? {
      '2023-08-09': fwb,
      '2023-08-10': parallel,
      '2023-08-11': coke,
    }
  : {
      '2023-07-18': fwb,
      '2023-07-19': parallel,
      '2023-07-20': coke,
      '2023-07-21': openSeason,
      '2023-07-22': sushi,
      '2023-07-23': sushi,
      '2023-07-24': openSea,
      '2023-07-25': openSea,
      '2023-07-26': openSea,
    }

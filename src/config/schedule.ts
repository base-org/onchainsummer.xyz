import { openSea, sushi, openSeason, coke } from './partners'
import { Partner } from './partners/types'

export const schedule: Record<string, Partner> = {
  '2023-07-18': coke,
  '2023-07-19': coke,
  '2023-07-20': openSeason,
  '2023-07-21': openSeason,
  '2023-07-22': sushi,
  '2023-07-23': sushi,
  '2023-07-24': openSea,
  '2023-07-25': openSea,
  '2023-07-26': openSea,
}

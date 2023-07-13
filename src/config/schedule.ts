import { openSea, sushi, openSeason, coke } from './partners'
import { Partner } from './partners/types'

export const schedule: Record<string, Partner> = {
  '2023-07-11': coke,
  '2023-07-12': coke,
  '2023-07-13': openSeason,
  '2023-07-14': openSeason,
  '2023-07-15': sushi,
  '2023-07-16': sushi,
  '2023-07-18': openSea,
  '2023-07-19': openSea,
  '2023-07-20': openSea,
}

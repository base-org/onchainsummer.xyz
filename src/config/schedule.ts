import { openSea, sushi, openSeason, coke } from './partners'
import { Partner } from './partners/types'

export const schedule: Record<string, Partner> = {
  '2023-06-26': openSea,
  '2023-06-27': openSea,
  '2023-06-28': sushi,
  '2023-06-29': coke,
  '2023-06-30': openSea,
  '2023-07-01': openSeason,
  '2023-07-02': sushi,
  '2023-07-03': coke,
  '2023-07-04': openSea,
  '2023-07-05': openSeason,
  '2023-07-06': sushi,
  '2023-07-07': coke,
  '2023-07-08': openSea,
  '2023-07-09': sushi,
  '2023-07-10': coke,
}

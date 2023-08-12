import moment from 'moment-timezone'
import { getNow } from './getNow'

export const getDropDate = (spoofDate?: string | null) => {
  const now = getNow(spoofDate)
  const date = moment.tz(now, 'America/New_York')
  const dateToReturn = date.get('hour') >= 12 ? date : date.subtract(1, 'day')
  return dateToReturn.format('YYYY-MM-DD')
}

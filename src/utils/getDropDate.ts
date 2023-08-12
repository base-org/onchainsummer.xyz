import moment from 'moment-timezone'
import { getNow } from './getNow'

export const getDropDate = (spoofDate?: string | null) => {
  const now = getNow(spoofDate)
  const date = moment.tz(now, 'America/New_York')
  const dateToReturn =
    date.get('hour') >= 12
      ? date.format('YYYY-MM-DD')
      : date.subtract(1, 'day').format('YYYY-MM-DD')
  return dateToReturn
}

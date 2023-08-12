import moment from 'moment-timezone'
import isValid from 'date-fns/isValid'
const defaultSpoofDate = process.env.NEXT_PUBLIC_SPOOF_DATE
const ALLOW_SPOOFING = defaultSpoofDate !== undefined

const getSpoofDateFromParams = () => {
  if (typeof window === 'undefined') {
    return null
  }
  const urlParams = new URLSearchParams(window.location.search)
  const spoofDate = urlParams.get('spoofDate')
  return spoofDate
}

export const getNow = (spoofDate?: string | null) => {
  const value = spoofDate || getSpoofDateFromParams() || defaultSpoofDate
  const nowUTC = moment.tz(moment(), 'America/New_York').toDate().getTime()

  if (!ALLOW_SPOOFING) {
    return nowUTC
  }

  const spoofedDate = moment.tz(value, 'America/New_York')

  const isValidDate = isValid(spoofedDate.toDate())

  if (isValidDate && spoofedDate) {
    return spoofedDate.toDate().getTime()
  }

  return nowUTC
}

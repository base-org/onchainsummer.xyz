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
  const nowUTC = new Date().getTime()

  if (!ALLOW_SPOOFING) {
    return nowUTC
  }

  const spoofedDate = value ? new Date(value) : undefined

  const isValidDate = isValid(spoofedDate)

  if (isValidDate && spoofedDate) {
    return Date.UTC(
      spoofedDate.getFullYear(),
      spoofedDate.getMonth(),
      spoofedDate.getDate(),
      spoofedDate.getHours(),
      spoofedDate.getMinutes(),
      spoofedDate.getSeconds(),
      spoofedDate.getMilliseconds()
    )
  }

  return nowUTC
}

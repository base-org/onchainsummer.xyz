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
  const nowEST = new Date().getTime() - 4 * 60 * 60 * 1000

  if (!ALLOW_SPOOFING) {
    return nowEST
  }

  const spoofedDate = value ? new Date(value) : undefined

  const isValidDate = isValid(spoofedDate)

  const now = isValidDate && spoofedDate ? spoofedDate.getTime() : nowEST

  return now
}

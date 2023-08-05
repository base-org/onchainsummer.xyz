import isValid from 'date-fns/isValid'
const defaultSpoofDate = process.env.NEXT_PUBLIC_SPOOF_DATE
const ALLOW_SPOOFING = defaultSpoofDate !== undefined

export const getNow = (spoofDate: string | null = defaultSpoofDate || '') => {
  const nowEST = new Date().getTime() - 4 * 60 * 60 * 1000

  if (!ALLOW_SPOOFING) {
    return nowEST
  }

  const spoofedDate = spoofDate ? new Date(spoofDate) : undefined

  const isValidDate = isValid(spoofedDate)

  const now = isValidDate && spoofedDate ? spoofedDate.getTime() : nowEST

  return now
}

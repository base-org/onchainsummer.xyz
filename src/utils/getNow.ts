import isValid from 'date-fns/isValid'
const ALLOW_SPOOFING = process.env.NEXT_PUBLIC_ALLOW_SPOOFING

export const getNow = (spoofDate?: string) => {
  const nowEST = new Date().getTime() - 4 * 60 * 60 * 1000

  if (!ALLOW_SPOOFING) {
    return nowEST
  }

  const spoofedDate = spoofDate ? new Date(spoofDate) : undefined

  const isValidDate = isValid(spoofedDate)

  const now = isValidDate && spoofedDate ? spoofedDate.getTime() : nowEST

  return now
}

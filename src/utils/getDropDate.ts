import { getNow } from './getNow'

export const getDropDate = (spoofDate?: string | null) => {
  const now = getNow(spoofDate)
  const date = new Date(now - 13 * 60 * 60 * 1000)
  const today = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${
    date.getUTCHours() > 16 ? date.getUTCDate() : date.getUTCDate() - 1
  }`
  return today
}

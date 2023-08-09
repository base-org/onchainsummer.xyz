import { getNow } from './getNow'

const padNumber = (num: number) => {
  return num < 10 ? `0${num}` : num
}

export const getDropDate = (spoofDate?: string | null) => {
  const now = getNow(spoofDate)
  const date = new Date(now)
  const year = date.getUTCFullYear()
  const month = padNumber(date.getUTCMonth() + 1)
  const hours = date.getUTCHours()
  const day = hours >= 16 ? date.getUTCDate() : date.getUTCDate() - 1

  const today = `${year}-${month}-${padNumber(day)}`
  return today
}

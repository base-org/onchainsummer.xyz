import { isBefore, isAfter } from 'date-fns'

import { getNow } from './getNow'

interface GetDateRangeValidation {
  startDate: number
  endDate: number
  spoofDate?: string | null
}

export const getDateRangeValidation = ({
  startDate,
  endDate,
  spoofDate,
}: GetDateRangeValidation) => {
  const isBeforeStartDate = isBefore(
    getNow(spoofDate),
    new Date(startDate).getTime()
  )
  const isAfterEndDate = isAfter(getNow(spoofDate), new Date(endDate).getTime())

  return { isAfterEndDate, isBeforeStartDate }
}

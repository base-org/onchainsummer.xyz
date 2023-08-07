import { isBefore, isAfter } from 'date-fns'

import { getNow } from './getNow'

interface GetDateRangeValidation {
  startDate: number
  endDate: number
}

export const getDateRangeValidation = ({
  startDate,
  endDate,
}: GetDateRangeValidation) => {
  const isBeforeStartDate = isBefore(getNow(), new Date(startDate).getTime())
  const isAfterEndDate = isAfter(getNow(), new Date(endDate).getTime())

  return { isAfterEndDate, isBeforeStartDate }
}

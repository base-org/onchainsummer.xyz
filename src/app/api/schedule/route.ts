import moment from 'moment'
import { NextResponse } from 'next/server'

import { schedule } from '@/config/schedule'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

export async function GET() {
  const modifiedSchedule: Record<string, any> = {}
  Object.keys(schedule).map((date) => {
    modifiedSchedule[
      moment.utc(`${date} ${CAMPAIGN_HOUR}:${CAMPAIGN_MINUTE}}`).toISOString()
    ] = {
      ...schedule[date],
      drops: schedule[date].drops.map((drop) => ({
        ...drop,
        startDate: moment.utc(drop.startDate),
        endDate: moment.utc(drop.endDate),
      })),
    }
  })
  return NextResponse.json(modifiedSchedule)
}

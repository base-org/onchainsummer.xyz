import moment from 'moment'
import { schedule } from '@/config/schedule'

import { NextResponse } from 'next/server'

export async function GET() {
  const modifiedSchedule: Record<string, any> = {}
  Object.keys(schedule).map((date) => {
    modifiedSchedule[date] = {
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

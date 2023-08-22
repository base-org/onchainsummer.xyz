import { Partner } from '@/config/partners/types'
import { schedule } from '@/config/schedule'

const isSchedule = (schedule: any): schedule is typeof schedule => {
  return (
    schedule &&
    typeof schedule === 'object' &&
    Object.keys(schedule).every((date) => {
      return (
        typeof schedule[date] === 'object' &&
        Array.isArray(schedule[date].drops)
      )
    })
  )
}

export const getSchedule = async () => {
  const fetchSchedule = await fetch(
    'https://onchainsummer-xyz.vercel.app/api/schedule',
    {
      next: { revalidate: 1 * 60 },
    }
  )

  const fetchedSchedule = (await fetchSchedule.json()) as typeof schedule

  const _schedule = isSchedule(fetchedSchedule) ? fetchedSchedule : schedule

  const res = Object.keys(_schedule).reduce(
    (acc, date) => {
      return {
        [date.slice(0, 10)]: {
          ..._schedule[date],
          drops: _schedule[date].drops.map((drop) => ({
            ...drop,
            startDate: new Date(drop.startDate).getTime(),
            endDate: new Date(drop.endDate).getTime(),
          })),
        },
        ...acc,
      }
    },
    {} as Record<string, Partner>
  )
  return res
}

import { schedule } from '@/config/schedule'

export const getSchedule = async () => {
  const fetchSchedule = await fetch(
    'https://onchainsummer-xyz.vercel.app/api/schedule',
    {
      next: { revalidate: 1 * 60 },
    }
  )

  const fetchedSchedule = (await fetchSchedule.json()) as typeof schedule

  const _schedule = fetchedSchedule || schedule

  return _schedule
}

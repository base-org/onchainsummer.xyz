'use client'

import { FC, useEffect, useState } from 'react'
import ReactCountdown, { CountdownProps } from 'react-countdown'
import { isBefore, isAfter } from 'date-fns'
import { Clock } from '../icons/Clock'
import clsx from 'clsx'
import { format, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

interface CustomCountdownProps extends CountdownProps {
  startDate: number
  date: number
}

export const Countdown: FC<CustomCountdownProps> = ({
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const zonedEndDate = utcToZonedTime(props.date, 'EST')
  const zonedStartDate = utcToZonedTime(props.startDate, 'EST')

  const isBeforeStartDate = isBefore(
    new Date().getTime(),
    new Date(zonedStartDate).getTime()
  )
  const isAfterEndDate = isAfter(
    new Date().getTime(),
    new Date(zonedEndDate).getTime()
  )

  const textColor = isBeforeStartDate
    ? 'text-black'
    : isAfterEndDate
    ? 'text-[#858585]'
    : 'text-ocs-blue'

  return (
    <div
      className={clsx(
        'flex items-center flex-row text-[#858585]',
        textColor,
        className
      )}
    >
      <div className="mr-4 ">
        <Clock />
      </div>
      <div className="flex flex-col text-[14px] font-mono uppercase">
        {mounted ? (
          <ReactCountdown
            {...props}
            date={zonedEndDate}
            renderer={({ days, hours, minutes, seconds }) => {
              if (isAfterEndDate) {
                return (
                  <>
                    <div>
                      <p>Ended</p>
                    </div>
                    <span>{format(zonedEndDate, 'do MMMM yyyy')}</span>
                  </>
                )
              } else if (isBeforeStartDate) {
                return (
                  <>
                    <div>
                      <p>Launches</p>
                    </div>
                    <span>{format(zonedStartDate, 'do MMMM yyyy')}</span>
                  </>
                )
              } else {
                return (
                  <>
                    <div>
                      <p>Ends</p>
                    </div>
                    <span>
                      {days ? `${days}D` : ''} {hours}H:{minutes}M:{seconds}S
                    </span>
                  </>
                )
              }
            }}
          />
        ) : (
          <>...</>
        )}
      </div>
    </div>
  )
}

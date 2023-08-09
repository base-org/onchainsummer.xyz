'use client'

import { FC, useEffect, useState } from 'react'
import ReactCountdown, { CountdownProps } from 'react-countdown'

import { Clock } from '../icons/Clock'
import clsx from 'clsx'
import { format } from 'date-fns'
import { getDateRangeValidation } from '@/utils/getDateRangeValidation'
import { getNow } from '@/utils/getNow'

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

  const { isAfterEndDate, isBeforeStartDate } = getDateRangeValidation({
    startDate: props.startDate,
    endDate: props.date,
  })

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
      <div className="flex flex-col desktop-label-1 uppercase">
        {mounted ? (
          <ReactCountdown
            {...props}
            now={getNow}
            date={props.date}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return (
                  <>
                    <div>
                      <p>Ended</p>
                    </div>
                    <span className="desktop-label-2">
                      {format(props.date, 'do MMMM yyyy')}
                    </span>
                  </>
                )
              } else if (isBeforeStartDate) {
                return (
                  <>
                    <div>
                      <p>Launches</p>
                    </div>
                    <span className="desktop-label-2">
                      {format(props.startDate, 'do MMMM yyyy')}
                    </span>
                  </>
                )
              } else {
                return (
                  <>
                    <div>
                      <p>Ends</p>
                    </div>
                    <span className="desktop-label-2">
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

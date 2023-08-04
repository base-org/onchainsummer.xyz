'use client'

import { FC, useEffect, useState } from 'react'
import ReactCountdown, { CountdownProps } from 'react-countdown'
import { isBefore, isAfter } from 'date-fns'
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

  const urlParams = new URLSearchParams(window.location.search)
  const spoofDate = urlParams.get('spoofDate')
  const { isAfterEndDate, isBeforeStartDate } = getDateRangeValidation({
    startDate: props.startDate,
    endDate: props.date,
    spoofDate,
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
      <div className="flex flex-col text-[14px] font-mono uppercase">
        {mounted ? (
          <ReactCountdown
            {...props}
            now={() => getNow(spoofDate)}
            date={props.date}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return (
                  <>
                    <div>
                      <p>Ended</p>
                    </div>
                    <span>{format(props.date, 'do MMMM yyyy')}</span>
                  </>
                )
              } else if (isBeforeStartDate) {
                return (
                  <>
                    <div>
                      <p>Launches</p>
                    </div>
                    <span>{format(props.startDate, 'do MMMM yyyy')}</span>
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

'use client'

import { FC, useEffect, useState } from 'react'
import ReactCountdown, { CountdownProps } from 'react-countdown'
import { Clock } from '../icons/Clock'
import clsx from 'clsx'

interface CustomCountdownProps extends CountdownProps {
  title: string
  completedText: React.ReactNode
}

export const Countdown: FC<CustomCountdownProps> = ({
  completedText,
  title,
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={clsx('flex items-end flex-row', className)}>
      <div className="mr-4 relative bottom-1">
        <Clock />
      </div>
      <div className="flex flex-col text-[14px] font-mono font-medium uppercase">
        <div>
          <p>{title}</p>
        </div>
        {mounted ? (
          <ReactCountdown
            {...props}
            renderer={({ hours, minutes, seconds, completed }) => {
              if (completed) {
                return <>{completedText}</>
              } else {
                return (
                  <span>
                    {hours}H:{minutes}M:{seconds}S
                  </span>
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

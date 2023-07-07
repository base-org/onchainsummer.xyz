'use client'

import { FC, useEffect, useState } from 'react'
import ReactCountdown, { CountdownProps } from 'react-countdown'

interface CustomCountdownProps extends CountdownProps {
  completedText: React.ReactNode
}

export const Countdown: FC<CustomCountdownProps> = ({
  completedText,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>...</>
  }

  return (
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
  )
}

'use client'

import { useEffect, useState } from 'react'
import { CCAEvent } from './analytics'

export const useLogEvent = ():
  | ((e: CCAEvent, extraData?: Record<string, string>) => void)
  | undefined => {
  const [logEvent, setLogEvent] = useState<
    | (() => (e: CCAEvent, extraData?: Record<string, string>) => void)
    | undefined
  >(undefined)

  useEffect(() => {
    setLogEvent(
      () => (e: CCAEvent, extraData?: Record<string, string>) =>
        window.ClientAnalytics?.logEvent(
          e.eventName,
          { ...e.eventData, ...extraData },
          e.importance
        )
    )
  }, [])

  return logEvent
}

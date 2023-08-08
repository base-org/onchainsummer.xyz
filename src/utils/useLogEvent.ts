import { useEffect, useState } from 'react'
import { CCAEvent } from './analytics'

export const useLogEvent = (): ((e: CCAEvent) => void) | undefined => {
  const [logEvent, setLogEvent] = useState<
    (() => (e: CCAEvent) => void) | undefined
  >(undefined)

  useEffect(() => {
    setLogEvent(
      () => (e: CCAEvent) =>
        window.ClientAnalytics.logEvent(e.eventName, e.eventData, e.importance)
    )
  }, [])

  return logEvent
}

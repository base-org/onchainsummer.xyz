'use client'

import { Button } from '@/components/Button'
import { events } from '@/utils/analytics'
import { useLogEvent } from '@/utils/useLogEvent'
import { useEffect } from 'react'

export default function Error({ reset }: { reset: () => void }) {
  const logEvent = useLogEvent()

  useEffect(() => {
    logEvent?.(events.clientError)
  }, [logEvent])

  return (
    <div className="pt-24 pb-48 w-full flex flex-col items-center">
      <div className="w-auto flex flex-col items-center space-y-4 bg-red">
        <h2 className="text-center text-2xl">Something went wrong...</h2>
        <span className="text-center text-ocs-dark-gray">
          Please try again later.
        </span>
        <Button size="SMALL" className="w-full" onClick={reset}>
          Go to home
        </Button>
      </div>
    </div>
  )
}

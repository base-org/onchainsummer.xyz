'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { Button } from '../Button'
import { MirrorLogo } from '../icons/Mirror'

interface MirrorSubscriptionFormProps {
  mirrorSubscribeUrl: string | undefined
  mirrorProjectAddress: string | undefined
}

export const MirrorSubscriptionForm: React.FC<MirrorSubscriptionFormProps> = ({
  mirrorSubscribeUrl,
  mirrorProjectAddress,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <form
      action={mirrorSubscribeUrl}
      method="POST"
      onSubmit={async (ev) => {
        ev.preventDefault()
        const target = ev.target as HTMLFormElement
        let resp: Response
        try {
          resp = await fetch(target.action, {
            method: target.method,
            body: new URLSearchParams(new FormData(target) as any),
            headers: {
              'content-type': target.enctype,
            },
          })
        } catch (err) {
          console.error(err)
          return
        }
        if (resp.status === 200) {
          setFormSubmitted(true)
        }
      }}
      className="flex flex-col md:flex-row justify-start items-center gap-4 mt-10 mb-14 md:my-0"
    >
      <input name="projectAddress" type="hidden" value={mirrorProjectAddress} />
      <input
        className="border-[1px] border-black border-solid rounded-full py-3 px-5 w-full"
        name="email"
        placeholder="EMAIL ADDRESS"
        required
        type="email"
      />
      <Button
        className={clsx(
          'w-full md:max-w-fit',
          formSubmitted && '!bg-neutral-500/90'
        )}
        type="submit"
        disabled={formSubmitted}
      >
        {formSubmitted ? 'Check Email' : 'Subscribe'}
        {!formSubmitted && <MirrorLogo fill="white" />}
      </Button>
    </form>
  )
}

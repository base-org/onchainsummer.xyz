'use client'
import clsx from 'clsx'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Button } from '../Button'
import { Close } from '../icons/Close'

interface EmailSubscriptionDialogProps {
  mirrorSubscribeUrl: string | undefined
  mirrorProjectAddress: string | undefined
}

export const EmailSubscriptionDialog: React.FC<
  EmailSubscriptionDialogProps
> = ({ mirrorSubscribeUrl, mirrorProjectAddress }) => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="LIGHT" className="w-full md:max-w-fit !py-[11px]">
          Subscribe with Email
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-[#151515]/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          onCloseAutoFocus={() => setFormSubmitted(false)}
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[502px] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white p-[64px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Close asChild>
            <button
              className="text-black absolute top-10 right-10 inline-flex h-6 w-6 appearance-none items-center justify-center focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Close />
            </button>
          </Dialog.Close>
          <Dialog.Title className="text-[32px] font-display m-0">
            {formSubmitted ? 'You’re in the know!' : 'Let’s keep in touch!'}
          </Dialog.Title>
          <Dialog.Description className="font-sans mt-[10px] mb-8 leading-normal text-[#444]">
            {formSubmitted ? (
              'Check your email to confirm subscription to Mirror.'
            ) : (
              <>
                Subscribe to our{' '}
                <span className="font-medium">Mirror blog</span>. Mint the posts
                as unique NFTs commemorating the evolution of Base.
              </>
            )}
          </Dialog.Description>
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
          >
            <input
              name="projectAddress"
              type="hidden"
              value={mirrorProjectAddress}
            />
            <label className="mb-4 font-medium">Email</label>
            <input
              className="border-[1px] border-[#EFEFEF] border-solid rounded-full py-3 px-5 w-full mb-8 mt-2"
              name="email"
              placeholder="Email Address"
              required
              type="email"
            />
            <Button
              className={clsx(formSubmitted && '!bg-neutral-500/90')}
              type="submit"
              disabled={formSubmitted}
            >
              {formSubmitted ? 'Check Email' : 'Subscribe'}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

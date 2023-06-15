'use client'
import { ConnectWallet } from '@thirdweb-dev/react'

export default function ConnectWalletButton() {
  return (
    <ConnectWallet
      className="!bg-neutral-900 !shadow-button !rounded-lg !text-white !px-3 !py-2.5 md:!ml-8"
      // NOTE: The btnTitle prop expects a string, but seems to render a React.ReactNode just fine, which is just fine with me
      // @ts-expect-error
      btnTitle={
        <div className="flex gap-2.5 items-center">
          <div className="bg bg-timer-active h-2 w-2 rounded-full" /> Connect
          Wallet
        </div>
      }
    />
  )
}

import { FC } from 'react'
import { CBSubscribeDialog } from '../CBSubscribeDialog'
import { Button } from '../Button'
import { ArrowRight } from '../icons/ArrowRight'
import Image from 'next/image'

const CHALLENGE_IMAGES = [
  { url: '/challenge/1.png', alt: 'Based NFT Drop' },
  { url: '/challenge/2.png', alt: '' },
  { url: '/challenge/3.png', alt: '' },
  { url: '/challenge/4.png', alt: '' },
]

export const BasedChallenge: FC = ({}) => {
  return (
    <section className="bg-ocs-light-gray w-full shadow-large rounded-3xl p-6 flex flex-col gap-6 lg:flex-row">
      <div className="flex flex-col gap-4 max-w-[520px]">
        <h2 className="desktop-h2">Join the Based Challenge</h2>
        <p className="desktop-body">
          Claim your free onchain art, then watch it evolve as you mint more on
          Base during Onchain Summer. Scan the QR code to get started.
        </p>
        <CBSubscribeDialog>
          <Button>
            <span>Claim now</span>{' '}
            <span className="hidden md:inline">on Coinbase Wallet</span>
            <ArrowRight className="ml-auto" />
          </Button>
        </CBSubscribeDialog>
      </div>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 w-full items-center max-w-[624px] lg:ml-auto">
        {CHALLENGE_IMAGES.map(({ url, alt }) => (
          <div key={url} className="relative z-20 w-full aspect-square">
            <Image fill src={url} alt={alt} className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

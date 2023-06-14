import { notFound } from 'next/navigation'
import { Partner, partners } from '@/config/partners'
import Image from 'next/image'
import { Card } from '../../../components/Card'
import clsx from 'clsx'
import { Countdown } from '@/components/Countdown'
import { Separator } from '@/components/Separator'
import { Button } from '@/components/Button'

interface PageProps {
  partner: Partner
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const partner = await getPartner(slug)

  if (!partner) {
    notFound()
  }

  const { name, drop, url } = partner

  return (
    <main className="mt-11 px-20 py-10">
      <h1 className="font-medium text-[40px] leading-[50px]">
        Onchain Art From{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9360FF] from-5% via-[#FF912C] to-[#FFEA2D] to-95%">
          {name}
        </span>
      </h1>
      <section className="flex gap-20 mt-7 pr-20">
        <Image
          src={`/partners/${slug}/main.png`}
          alt={`Cover image for '${drop.name}' by ${name}`}
          width={445}
          height={445}
        />
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 items-center">
            <Card>
              <div className="p-2">
                <Image
                  src={`/partners/${slug}/icon.png`}
                  alt={`${name} icon`}
                  width={32}
                  height={32}
                />
              </div>
            </Card>
            <h3 className="text-neutral-500 font-medium text-xl leading-none font-text tracking-[-0.01em]">
              Collection by{' '}
              <a href={url} rel="noopener" className="underline">
                {name}
              </a>
            </h3>
          </div>

          <h2 className="font-medium text-[40px]">{drop.name}</h2>

          <div className="flex gap-5 font-text">
            <div>
              <h4 className="text-sm text-neutral-900/50">Remaining Time</h4>
              <div className="flex gap-2 items-center font-medium">
                <div
                  className={clsx('h-2 w-2 rounded-full', {
                    'bg-timer-active': drop.endDate > new Date().getTime(),
                    'bg-red': drop.endDate <= new Date().getTime(),
                  })}
                />
                <div>
                  <Countdown date={drop.endDate} completedText={'Drop Ended'} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-neutral-900/50">Price</h4>
              <div className="font-medium">{drop.price} ETH</div>
            </div>
          </div>

          <Separator />

          <p className="leading-7 font-text">{drop.description}</p>

          <Separator />
          <div className="flex gap-6">
            <Button className="w-full">Mint NFT</Button>
            <Button className="w-full" variant="SECONDARY">
              Read More
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

async function getPartner(slug: string) {
  const partner = partners.find((p) => p.slug === slug)

  return partner
}

export default Page

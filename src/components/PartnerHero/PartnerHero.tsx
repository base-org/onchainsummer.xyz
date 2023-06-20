import { Partner } from '@/config/partners'
import Image from 'next/image'
import { FC } from 'react'

interface PartnerHeroProps {
  partner: Partner
}

import classes from './style.module.css'
import { Card } from '../Card'
import { Separator } from '../Separator'
import { Button } from '../Button'
import { MintButton } from '../MintButton/MintButton'

export const PartnerHero: FC<PartnerHeroProps> = ({
  partner: { brandColor, name, description, icon, iconInverse, drop, url },
}) => {
  return (
    <section className="flex flex-col px-6 pt-10 pb-8 md:pb-20 md:px-[120px] md:pt-[120px]">
      <div
        className={classes.blur}
        style={{
          backgroundImage: `linear-gradient(89.61deg, ${brandColor} 0.34%, ${brandColor}90 99.68%)`,
        }}
      />
      <h1 className="font-bold text-[40px] leading-[50px] text-center lg:text-[72px] lg:leading-[82px] md:text-start">
        Onchain{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#309FA7] via-[#9060FF] to-[#0052FF]">
          Art
        </span>{' '}
        from{' '}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${brandColor} 0.34%, ${brandColor}40 99.68%)`,
          }}
        >
          {name}
        </span>
      </h1>
      <p className="mt-2 font-medium font-text leading-[180%] text-[#010101]/50 text-center md:text-xl md:leading-9 md:text-start">
        {description}
      </p>

      <section className="flex flex-col gap-7 mt-10 px-2 lg:px-0 lg:mt-20 lg:flex-row lg:gap-20">
        <Card className="relative aspect-square w-full max-w-md">
          <Image
            src={drop.image}
            alt={`Cover image for '${drop.name}' by ${name}`}
            fill
            priority
          />
        </Card>
        <div className="flex flex-col gap-6 lg:gap-8 w-full">
          <div className="flex flex-col-reverse w-full gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="font-medium text-2xl leading-8 text-neutral-900 md:text-[40px] md:leading-none">
              {drop.name}
            </h2>
            <div className="aspect-square w-14 md:w-20 relative">
              <Image src={iconInverse} alt={`${name} icon`} fill priority />
            </div>
          </div>
          <div className="flex gap-6 font-text lg:gap-m">
            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm text-neutral-900/50">Created By</h4>
              <div className="font-medium">{drop.createdBy}</div>
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm text-neutral-900/50">Price</h4>
              <div className="font-medium">{drop.price} ETH</div>
            </div>
          </div>
          <Separator />
          <p className="text-neutral-600 font-text">{drop.description}</p>
          <MintButton price={drop.price} />
        </div>
      </section>
    </section>
  )
}

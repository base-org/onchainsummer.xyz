'use client'

import Image from 'next/image'
import { format } from 'date-fns'
import { Countdown } from '../Countdown'
import Link from 'next/link'
import { useMemo } from 'react'

interface TabsDropCardProps {
  address: string
  name: string
  startDate: number
  endDate: number
  image: string
  description: string
  slug: string
  brandColor: string
  link?: boolean
}

export const TabsDropCard: React.FC<TabsDropCardProps> = ({
  address,
  name,
  startDate,
  endDate,
  image,
  description,
  slug,
  brandColor,
  link = false,
}) => {
  const url = useMemo(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const spoofDate = urlParams.get('spoofDate')
    const url = new URL(`/${slug}`, document.baseURI)

    if (!spoofDate) return url

    url.searchParams.set('spoofDate', spoofDate)

    return url
  }, [slug])

  return (
    <>
      <div
        className="flex flex-col lg:flex-row lg:pr-6 bg-white rounded-2xl relative overflow-hidden"
        key={address}
      >
        <div className="relative aspect-square lg:h-[256px] mx-auto p-4 w-full lg:w-[349px] flex-[1_0_auto] justify-center max-h-[256px]">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="lg:flex lg:flex-col lg:justify-start p-4 lg:mt-0 w-full">
          <h3 className="desktop-label-2 uppercase text-ocs-dark-gray mb-3">
            {format(new Date(startDate), 'MMMM d')}
          </h3>
          {link ? (
            <Link
              className="desktop-h2 after:absolute after:inset-0"
              href={url}
            >
              {name}
            </Link>
          ) : (
            <h2 className="desktop-h2">{name}</h2>
          )}

          <p className="text-neutral-600 desktop-body mt-4 line-clamp-4 md:line-clamp-3">
            {description}
          </p>

          <Countdown
            date={endDate}
            startDate={startDate}
            className="mt-auto pt-8"
          />
        </div>
      </div>
    </>
  )
}

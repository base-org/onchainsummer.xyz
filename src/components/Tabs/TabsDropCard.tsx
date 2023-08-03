import Image from 'next/image'
import { format } from 'date-fns'
import { Countdown } from '../Countdown'
import Link from 'next/link'

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
  return (
    <>
      <div
        className="flex flex-col lg:flex-row lg:pr-6 bg-white rounded-2xl relative overflow-hidden"
        key={address}
      >
        <div
          className="p-4 w-full lg:w-[349px] flex-[1_0_auto] justify-center"
          style={{ backgroundColor: brandColor }}
        >
          <div className="relative aspect-square lg:h-[240px] mx-auto">
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:justify-start p-4 lg:mt-0 w-full">
          <h3 className="text-sm font-mono uppercase text-[#858585] mb-3">
            {format(new Date(startDate), 'MMMM d')}
          </h3>
          {link ? (
            <Link
              className="text-[32px] leading-8 after:absolute after:inset-0"
              href={`/${slug}`}
            >
              {name}
            </Link>
          ) : (
            <h2 className="text-[32px] leading-8">{name}</h2>
          )}

          <p className="text-neutral-600 leading-7 mt-4">
            {description.slice(0, 110)}
            {description.length > 110 && '...'}
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

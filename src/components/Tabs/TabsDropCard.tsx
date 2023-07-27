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
        className="flex flex-col md:flex-row md:pr-6 bg-white rounded-2xl relative overflow-hidden"
        key={address}
      >
        <div
          className="p-4 w-full md:w-[349px] flex-[1_0_auto] justify-center"
          style={{ backgroundColor: brandColor }}
        >
          <div className="relative aspect-square h-[240px] mx-auto">
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
        </div>

        <div className="md:flex md:flex-col md:justify-start p-4 md:mt-0 w-full">
          <h3 className="text-sm font-mono uppercase text-[#858585] mb-3">
            {format(new Date(startDate), 'MMMM d')}
          </h3>
          {link ? (
            <Link
              className="text-[32px] leading-8after:absolute after:inset-0"
              href={`/partners/${slug}`}
            >
              {name}
            </Link>
          ) : (
            <h2 className="text-[32px] leading-8">{name}</h2>
          )}

          <p className="text-neutral-600 leading-7  mt-4 mb-8 md:max-w-[540px] md:inline md:overflow-hidden md:whitespace-nowrap md:text-ellipsis">
            {description}
          </p>

          <Countdown date={endDate} startDate={startDate} />
        </div>
      </div>
    </>
  )
}

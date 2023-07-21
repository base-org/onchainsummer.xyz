import Image from 'next/image'
import { format } from 'date-fns'
import { Countdown } from '../Countdown'
import Link from 'next/link'

interface TabsDropCardProps {
  address: string
  name: string
  startDate: Date | string | number
  endDate: Date | string | number
  image: string
  description: string
  slug: string
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
  link = false,
}) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row md:pr-6 bg-white rounded-2xl relative"
        key={address}
      >
        <div className="flex flex-[1_0_auto] p-4 w-full md:w-[329px]">
          <div className="relative aspect-square my-auto w-full">
            <Image src={image} alt={name} fill />
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-start p-4 md:mt-0">
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

          <p className="text-neutral-600 leading-7 mt-4 mb-8">{description}</p>

          <Countdown
            date={endDate}
            completedText={'Drop Ended'}
            title="Launches"
            className="text-ocs-blue"
          />
        </div>
      </div>
    </>
  )
}

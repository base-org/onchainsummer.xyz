import Image from 'next/image'
import { format } from 'date-fns'
import { Clock } from '../icons/Clock'
import { Countdown } from '../Countdown'

interface TabsDropCardProps {
  address: string
  name: string
  startDate: Date | string | number
  endDate: Date | string | number
  image: string
  description: string
}

export const TabsDropCard: React.FC<TabsDropCardProps> = ({
  address,
  name,
  startDate,
  endDate,
  image,
  description,
}) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row md:pr-6 bg-white rounded-2xl"
        key={address}
      >
        <div className="flex flex-[1_0_auto] w-[329px] p-4">
          <div className="relative aspect-square my-auto w-full">
            <Image
              src={image}
              alt="Hero"
              fill
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none h-full w-full"
            />
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-start p-4 md:mt-0">
          <h3 className="text-sm font-mono uppercase text-[#858585] mb-3">
            {format(new Date(startDate), 'MMM. d')}
          </h3>
          <h2 className="text-[32px] leading-8 mb-4">{name}</h2>
          <p className="text-neutral-600 leading-7 mb-8">{description}</p>

          <Countdown
            date={startDate}
            completedText={'Drop Ended'}
            title="Launches"
            className="text-ocs-blue"
          />
        </div>
      </div>
    </>
  )
}

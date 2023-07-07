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
  console.log(endDate, 'endDate')
  return (
    <>
      <div
        className="flex flex-col md:flex-row md:pr-6 bg-white rounded-2xl"
        key={address}
      >
        <div className="md:basis-[28%]">
          <Image
            src={image}
            alt="Hero"
            width={350}
            height={240}
            className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none h-full w-full"
          />
        </div>
        <div className="md:basis-[72%] md:flex md:flex-col md:justify-start p-4 md:mt-0">
          <h3 className="text-sm font-mono uppercase text-[#858585] mb-3">
            {format(new Date(startDate), 'MMM. d')}
          </h3>
          <h2 className="text-[32px] leading-8 mb-4">{name}</h2>
          <p className="text-neutral-600 leading-7 mb-8">{description}</p>
          <div className="h-full flex items-end flex-row">
            <div className="mr-4 relative bottom-1">
              <Clock />
            </div>
            <div className="flex flex-col text-[#0052FF] text-[14px]">
              <div>
                <p className="font-mono font-medium uppercase ">Launches</p>
              </div>
              <Countdown date={endDate} completedText={'Drop Ended'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

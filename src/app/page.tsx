import format from 'date-fns/format'
import compareAsc from 'date-fns/compareAsc'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { DropCard } from '@/components/DropCard'
import { PartnerHero } from '@/components/PartnerHero'
import { Separator } from '@/components/Separator'
import { schedule } from '@/config/schedule'
import { Tabs, TabsComponentProps } from '@/components/Tabs'

const Home = async () => {
  const { partner, tabs } = await getPageData()
  const { drop, otherDrops, name, icon } = partner

  console.log(otherDrops, 'otherDrops')
  return (
    <div>
      <main className="flex h-full flex-col items-center justify-between relative overflow-x-hidden">
        <PartnerHero partner={partner} />
        <section className="px-8 lg:px-[120px] font-text w-full">
          <Separator />
          <h2 className="text-lg font-medium leading-8 mt-6 lg:mt-12">
            {drop.writeup.sections[0].heading}
          </h2>
          <div className="mt-6 lg:mt-3 lg:columns-2 lg:gap-20">
            <p>{drop.writeup.sections[0].contents[0]}</p>
            <Separator className="mt-6 lg:hidden" />
            <Button className="w-full mt-6" href="/partners/open-sea">
              Read More
            </Button>
          </div>
          <Separator className="hidden lg:block mt-12" />
        </section>
        <section className="px-8 lg:px-20 mt-16 pb-10 lg:mt-20 lg:pb-20 w-full">
          <div className="bg-gray-200/80 p-4 rounded-xl">
            <div className="mb-4 flex gap-2 items-end">
              <div className="relative z-20 h-20 w-20">
                <Image src={icon} alt={`${partner} Icon`} fill />
              </div>
              <div className="">
                <h2 className="text-[32px]">{name}</h2>
                <p className="text-[16px] uppercase text-[#858585]">
                  Collection
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {otherDrops.map((drop) => (
                <li key={drop.name}>
                  <DropCard {...drop} partner={name} partnerIcon={icon} />
                </li>
              ))}
            </ul>
            <div className="flex border border-1 border-gray-400/80 rounded-xl px-6 py-7 mt-4">
              <div className="basis-1/2">
                <h2 className="text-[32px]">
                  The Process of Alex Masmej, Showtime
                </h2>
              </div>
              <div className="basis-1/2">
                <p>
                  Highlight has curated work from three esteemed generative
                  artists — James Merrill, Leander Herzog, and Melissa
                  Wiederrecht — brought onchain to Base and powered by
                  Highlight. Nathaniel Emodi, founder of Highlight, joined us to
                  discuss the vision behind the drop and how Base is setting the
                  stage for the future of onchain art.
                </p>
                <Button
                  className="uppercase border border-1 border-black !bg-transparent !text-black mt-6"
                  href="/partners/base"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 lg:p-20" id="drops">
          <Tabs {...tabs} />
        </section>
      </main>
    </div>
  )
}

const INITIAL_TABS: TabsComponentProps = {
  upcomingDrops: [],
  pastDrops: [],
}

async function getPageData() {
  const now = new Date().getTime()
  const today = format(new Date(now), 'yyyy-MM-dd')
  const partner = schedule[today] || schedule[Object.keys(schedule)[0]]

  const tabs: TabsComponentProps = Object.keys(schedule).reduce((acc, date) => {
    const comparison = compareAsc(now, new Date(date).getTime())
    const partner = schedule[date]

    if (comparison === 0 || typeof partner === 'undefined') {
      return acc
    }

    if (comparison === -1) {
      return {
        ...acc,
        upcomingDrops: [...acc.upcomingDrops, partner.drop],
      }
    }

    return {
      ...acc,
      pastDrops: [...acc.pastDrops, partner.drop],
    }
  }, INITIAL_TABS)

  return { partner, tabs }
}

export default Home

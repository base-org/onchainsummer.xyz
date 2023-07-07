import format from 'date-fns/format'
import compareAsc from 'date-fns/compareAsc'
import { Button } from '@/components/Button'
import { DropCard } from '@/components/DropCard'
import { PartnerHero } from '@/components/PartnerHero'
import { Separator } from '@/components/Separator'
import { schedule } from '@/config/schedule'
import { Tabs, TabsComponentProps } from '@/components/Tabs'

const Home = async () => {
  const { partner, tabs } = await getPageData()
  const { drop, otherDrops, name, icon } = partner
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
          <h2 className="sr-only">External Drops</h2>
          <ul className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherDrops.map((drop) => (
              <li key={drop.name}>
                <DropCard {...drop} partner={name} partnerIcon={icon} />
              </li>
            ))}
          </ul>
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

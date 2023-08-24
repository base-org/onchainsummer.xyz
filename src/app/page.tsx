import Link from 'next/link'
import compareAsc from 'date-fns/compareAsc'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { DropCard } from '@/components/DropCard'
import { PartnerHero } from '@/components/PartnerHero'
import { schedule } from '@/config/schedule'
import { Tabs, TabsComponentProps } from '@/components/Tabs'
import { ReactMarkdown } from '@/components/ReactMarkdown'
import { PageContainer } from '@/components/PageContainer'
import { getDrops } from '@/utils/getDrops'
import { Trending } from '@/components/Trending'
import { TwitterModule } from '@/components/TwitterModule'
import { Heart } from '@/components/icons/Heart'
import { RightArrow } from '@/components/icons/RightArrow'
import { getTweets } from '@/utils/getTweets'
import { getNow } from '@/utils/getNow'
import { getArweaveById } from '@/utils/getArweaveById'
import { getDropDate } from '@/utils/getDropDate'
import { siteDataSuffix } from '@/components/MintDialog/types'
import { Drop } from '@/config/partners/types'
import { Gift } from '@/components/icons/Gift'
import { DropCardList } from '@/components/DropCard/DropCardList'
import { getCollections } from '@/utils/getCollections'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Home = async ({ searchParams }: Props) => {
  const spoofDateParam = searchParams.spoofDate
  const spoofDate = Array.isArray(spoofDateParam)
    ? spoofDateParam[0]
    : spoofDateParam
  const { partner, tabs, article, tweets, activeDrops } =
    await getPageData(spoofDate)
  const { drops, name, icon } = partner

  const dropAddressParam = searchParams.drop

  const dropAddress = Array.isArray(dropAddressParam)
    ? dropAddressParam[0]
    : dropAddressParam

  const { featuredDrop, remainingDrops } = getDrops(drops, dropAddress)
  const collections = await getCollections(drops)

  return (
    <PageContainer subNavOverlap>
      <div className="flex h-full flex-col items-center justify-between relative pb-36 gap-10 md:gap-[54px]">
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={!!dropAddress}
          floorAsk={collections[featuredDrop.address.toLowerCase()]?.floorAsk}
        />
        {remainingDrops?.length > 0 || article?.content ? (
          <section className="bg-ocs-light-gray w-full shadow-large rounded-3xl">
            <div className="p-[20px] lg:p-4 rounded-3xl">
              <div className="mb-4 flex gap-2">
                <div className="relative z-20 h-[64px] w-[64px]">
                  <Image
                    src={icon}
                    alt={`${partner} Icon`}
                    height={64}
                    width={64}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <h2 className="desktop-h2">{name}</h2>
                  <p className="desktop-mono uppercase text-[#444]">
                    Collection
                  </p>
                </div>
              </div>
              {remainingDrops?.length > 0 ? (
                <div className="-mr-4 mb-4 md:mb-14">
                  <DropCardList>
                    {remainingDrops?.map((drop) => (
                      <DropCard
                        {...drop}
                        key={drop.name}
                        partner={name}
                        partnerIcon={icon}
                        openSeaLink={drop.openSeaLink}
                        interactWithNFTLink={drop.interactWithNFTLink}
                        dataSuffix={siteDataSuffix}
                        dropDataSuffix={drop.dataSuffix}
                        buttonText={drop.buttonText}
                        description={drop.description}
                        floorAsk={
                          collections[drop.address.toLowerCase()]?.floorAsk
                        }
                      />
                    ))}
                  </DropCardList>
                </div>
              ) : null}
              {!!article?.content ? (
                <div className="flex items-start gap-12">
                  <div className="flex flex-col rounded-xl md:pr-4lg:mx-2  break-words w-full md:w-1/2">
                    <div className="w-full">
                      <h2 className="desktop-h2 font-display">
                        {article.content.title}
                      </h2>
                    </div>
                    <div className="w-full">
                      <div className="prose w-full">
                        <ReactMarkdown
                          content={`${article.content.body.slice(0, 500)} ...`}
                        />
                      </div>
                      <Button
                        className="uppercase border border-1 border-black !bg-transparent !text-black mt-6 max-w-fit !py-2"
                        href={`/${partner.slug}`}
                      >
                        Read full story
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2">
                    <Image
                      src={partner.banner}
                      alt={`${partner} Icon`}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      className="!static rounded-2xl"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {tweets && Array.isArray(tweets.data) && (
          <section className="bg-ocs-light-gray rounded-3xl p-4 shadow-large">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col [@media(min-width:724px)]:flex-row gap-4 items-start sm:items-center">
                <div className="flex gap-4 items-center">
                  <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-ocs-pink">
                    <Heart />
                  </div>
                  <div className="">
                    <h2 className="desktop-h2">Community</h2>
                  </div>
                </div>
              </div>
              <Link
                href="/community"
                className="hidden [@media(min-width:724px)]:inline-block"
              >
                <div className="flex h-full items-start sm:items-center gap-6 uppercase text-mono pr-6">
                  <span>View Community</span>
                  <div>
                    <RightArrow fill="black" />
                  </div>
                </div>
              </Link>
            </div>
            <TwitterModule tweets={tweets} />
          </section>
        )}
        {activeDrops && Array.isArray(activeDrops) && activeDrops.length > 0 ? (
          <section className="w-full shadow-large rounded-3xl">
            <div className="bg-[#EFEFEF] p-[20px] lg:p-4 rounded-3xl">
              <div className="mb-4 flex gap-2 items-center">
                <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-ocs-turquoise">
                  <Gift />
                </div>
                <div className="">
                  <h2 className="text-[32px] text-display">Active Mints</h2>
                </div>
              </div>

              <div className="-mr-4">
                <DropCardList>
                  {activeDrops.map((drop) => (
                    <DropCard
                      {...drop}
                      key={drop.name}
                      partner={drop.partner}
                      partnerIcon={drop.partnerIcon}
                      openSeaLink={drop.openSeaLink}
                      interactWithNFTLink={drop.interactWithNFTLink}
                      dataSuffix={siteDataSuffix}
                      dropDataSuffix={drop.dataSuffix}
                      buttonText={drop.buttonText}
                      description={drop.description}
                    />
                  ))}
                </DropCardList>
              </div>
            </div>
          </section>
        ) : null}
        <Trending />
        <section className="w-full" id="drops">
          <Tabs {...tabs} />
        </section>
      </div>
    </PageContainer>
  )
}

const INITIAL_TABS: TabsComponentProps = {
  upcomingDrops: [],
  pastDrops: [],
}

interface DropWithPartnerData extends Drop {
  partner: string
  partnerIcon: string
}

async function getPageData(spoofDate?: string) {
  const now = getNow(spoofDate)
  const today = getDropDate(spoofDate)

  const featuredPartner = schedule[today] || schedule[Object.keys(schedule)[0]]

  const tabs: TabsComponentProps = Object.keys(schedule).reduce((acc, date) => {
    const scheduleDate = new Date(date)
    scheduleDate.setUTCHours(16)

    const comparison = compareAsc(now, scheduleDate.getTime())

    const partner = schedule[date]

    if (comparison === 0 || typeof partner === 'undefined') {
      return acc
    }

    if (partner === featuredPartner) {
      return {
        ...acc,
      }
    }

    if (comparison === -1) {
      if (acc.upcomingDrops.find((drop) => drop.slug === partner.slug)) {
        return acc
      }
      return {
        ...acc,
        upcomingDrops: [...acc.upcomingDrops, partner],
      }
    }

    if (acc.pastDrops.find((drop) => drop.slug === partner.slug)) {
      return acc
    }

    return {
      ...acc,
      pastDrops: [...acc.pastDrops, partner],
    }
  }, INITIAL_TABS)

  const activeDrops = tabs.pastDrops
    .reduce((acc, partner) => {
      const { drops, name, icon } = partner

      const active = drops
        .filter((drop) => {
          const comparison = compareAsc(now, drop.endDate)
          const hasSequence = typeof drop.sequence !== 'undefined'

          return hasSequence && (comparison === -1 || comparison === 0)
        })
        .sort((a, b) => Number(a.sequence) - Number(b.sequence))

      const next = active.map((drop) => ({
        ...drop,
        partner: name,
        partnerIcon: icon,
      }))

      return [...acc, ...next]
    }, [] as DropWithPartnerData[])
    .sort((a, b) => a.startDate - b.startDate)

  const [article, tweets] = await Promise.all([
    getArweaveById(featuredPartner.aarweaveDigest),
    getTweets(),
  ])

  return { partner: featuredPartner, tabs, article, tweets, activeDrops }
}

export default Home

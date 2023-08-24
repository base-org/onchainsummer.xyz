import { notFound, redirect } from 'next/navigation'
import compareAsc from 'date-fns/compareAsc'
import { schedule } from '@/config/schedule'
import { PartnerHero } from '@/components/PartnerHero'
import { ReactMarkdown } from '@/components/ReactMarkdown'
import React from 'react'
import { DropCard } from '@/components/DropCard'
import { PageContainer } from '@/components/PageContainer'
import { Metadata, ResolvingMetadata } from 'next'
import { website } from '@/config/website'
import { getDrops } from '@/utils/getDrops'
import { getNow } from '@/utils/getNow'
import { getArweaveById } from '@/utils/getArweaveById'
import { getDropDate } from '@/utils/getDropDate'
import { MintType, siteDataSuffix } from '@/components/MintDialog/types'
import { DropCardList } from '@/components/DropCard/DropCardList'
import { getCollections } from '@/utils/getCollections'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Page = async ({ params, searchParams }: Props) => {
  const spoofDateParam = searchParams.spoofDate

  const spoofDate = Array.isArray(spoofDateParam)
    ? spoofDateParam[0]
    : spoofDateParam
  const slug = params.slug
  const { partner, article } = await getPartner(slug, spoofDate)

  const dropAddressParam = searchParams.drop

  const dropAddress = Array.isArray(dropAddressParam)
    ? dropAddressParam[0]
    : dropAddressParam

  if (!partner) {
    notFound()
  }

  const { drops, name, icon } = partner

  const { featuredDrop, remainingDrops } = getDrops(drops, dropAddress)
  const collections = await getCollections(drops)

  return (
    <PageContainer subNavBgColor={partner.brandColor} subNavOverlap>
      <main className="flex h-full flex-col items-center justify-between relative pb-36 gap-10 md:gap-[54px]">
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={!!dropAddress}
          floorAsk={collections[featuredDrop.address.toLowerCase()]?.floorAsk}
        />
        <section className="w-full font-text p-4 bg-ocs-light-gray shadow-large rounded-3xl">
          <div className="-mr-4">
            <DropCardList>
              {remainingDrops.map((drop) => (
                <DropCard
                  {...drop}
                  key={drop.name}
                  partner={name}
                  partnerIcon={icon}
                  openSeaLink={drop.openSeaLink}
                  dataSuffix={siteDataSuffix}
                  interactWithNFTLink={drop.interactWithNFTLink}
                  dropDataSuffix={drop.dataSuffix}
                  buttonText={drop.buttonText}
                  description={drop.description}
                  floorAsk={collections[drop.address.toLowerCase()]?.floorAsk}
                />
              ))}
            </DropCardList>
          </div>

          {!!article?.content && (
            <div className="p-6 md:px-16 lg:px-32 md:py-[54px] rounded-2xl break-words m-4">
              <div className="prose mx-auto">
                <h2 className="text-[32px] leading-8 md:text-[46px] md:leading-[180%] font-display">
                  {article?.content.title}
                </h2>

                <ReactMarkdown content={article.content.body} />
              </div>
            </div>
          )}
        </section>
      </main>
    </PageContainer>
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const dropAddressParam = searchParams.drop
  const spoofDateParam = searchParams.spoofDate

  const spoofDate = Array.isArray(spoofDateParam)
    ? spoofDateParam[0]
    : spoofDateParam

  const dropAddress = Array.isArray(dropAddressParam)
    ? dropAddressParam[0]
    : dropAddressParam

  // fetch data
  const { partner } = await getPartner(slug, spoofDate)

  const { featuredDrop } = getDrops(partner.drops, dropAddress)

  const isNft =
    featuredDrop.mintType === MintType.ThirdWeb ||
    featuredDrop.mintType === MintType.Zora

  const now = getNow(spoofDate)
  const comparison = compareAsc(now, featuredDrop.endDate)
  const mintStatus: 'live' | 'closed' =
    comparison === -1 || comparison === 0 ? 'live' : 'closed'

  const nftMetadata = isNft
    ? {
        'eth:nft:collection': featuredDrop.name,
        'eth:nft:contract_address': featuredDrop.address,
        'eth:nft:creator_address': featuredDrop.creator,
        'eth:nft:schema': 'erc721',
        'eth:nft:media_url': featuredDrop.image,
        'eth:nft:mint_status': mintStatus,
        'eth:nft:chain': 'base',
      }
    : {}

  return {
    title: partner.name,
    description: partner.description,
    openGraph: {
      title: `${partner.name} | Onchain Summer`,
      description: partner.description,
      url: `https://onchainsummer.xyz/partner/${partner.slug}${
        dropAddress ? `?drop=${dropAddress}` : ''
      }`,
      siteName: 'Onchain Summer',
      images: [
        {
          url: featuredDrop.image,
          alt: featuredDrop.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${partner.name} | Onchain Summer`,
      description: partner.description,
      site: website.twitter.site,
      creator: partner.twitter,
      images: [featuredDrop.image],
    },
    // @ts-expect-error
    other: {
      ...nftMetadata,
    },
  }
}

async function getPartner(slug: string, spoofDate?: string) {
  const today = getDropDate(spoofDate)

  const date = Object.keys(schedule).find(
    (date) => schedule[date].slug.toLowerCase() === slug.toLowerCase()
  )

  if (!date) {
    return notFound()
  }

  const comparison = compareAsc(new Date(today), new Date(date))

  if (comparison < 0) {
    redirect('/#drops')
  }

  const partner = schedule[date]

  if (!partner) {
    return notFound()
  }

  const article = await getArweaveById(partner.aarweaveDigest)

  return { partner, article }
}

export default Page

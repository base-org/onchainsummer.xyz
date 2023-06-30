import { notFound, redirect } from 'next/navigation'
import compareAsc from 'date-fns/compareAsc'
import format from 'date-fns/format'
import { schedule } from '@/config/schedule'

import { PartnerHero } from '@/components/PartnerHero'
import { Separator } from '@/components/Separator'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { DropCard } from '@/components/DropCard'
import { SDK } from '@/utils/graphqlSdk'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import unreset from './unreset.module.scss'

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const { partner, article } = await getPartner(slug)

  if (!partner) {
    notFound()
  }

  const { drop, otherDrops, name, icon } = partner

  return (
    <div>
      <main className="relative w-screen overflow-x-hidden">
        <PartnerHero partner={partner} />
        <section className="px-8 lg:px-[120px] font-text">
          <Separator />
          <div className="flex flex-col gap-6 md:gap-10 pt-6 md:pt-10 mx-auto max-w-[800px]">
            <h2 className="text-lg leading-8 md:text-[32px] md:leading-[180%]">
              {article.content.title}
            </h2>

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={unreset.unreset}
            >
              {article.content.body}
            </ReactMarkdown>
          </div>
        </section>
        <section className="px-8 lg:px-[120px] mt-16 pb-10 lg:mt-20 lg:pb-20">
          <h2 className="sr-only">External Drops</h2>
          <ul className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherDrops.map((drop) => (
              <li key={drop.name}>
                <DropCard {...drop} partner={name} partnerIcon={icon} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

async function getPartner(slug: string) {
  const now = new Date().getTime()
  const today = format(new Date(now), 'yyyy-MM-dd')

  const date = Object.keys(schedule).find(
    (date) => schedule[date].slug === slug
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

  const digest = await SDK.GetMirrorTransactions({
    digest: partner.drop.aarweaveDigest,
  })

  const articleId = digest.transactions.edges[0].node.id

  const res = await fetch(`https://arweave.net/${articleId}`)

  const article = (await res.json()) as {
    content: { body: string; title: string }
  }

  return { partner, article }
}

export default Page

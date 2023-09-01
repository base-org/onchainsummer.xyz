'use client'

import { FC } from 'react'
import { PageContainer } from '../PageContainer'
import { Gift } from '../icons/Gift'
import { DropCardList } from '../DropCard/DropCardList'
import { DropWithPartnerData } from '@/app/page'
import { DropCard } from '../DropCard'
import { siteDataSuffix } from '@/components/MintDialog/types'
import { Trending, TrendingQueryResult } from '../Trending'
import { Tabs, TabsComponentProps } from '../Tabs'
import { BasedChallenge } from '../BasedChallenge/BasedChallenge'
import { useAccount } from 'wagmi'
import { l2 } from '@/config/chain'
import { useQuery } from 'react-query'
import { getTrendingData } from '@/utils/getTrendingData'

interface PostFestivalPageProps {
  activeDrops: DropWithPartnerData[]
  tabs: TabsComponentProps
}

export const PostFestivalPage: FC<PostFestivalPageProps> = ({
  activeDrops,
  tabs,
}) => {
  const { address: connectedWallet } = useAccount()
  const chainId = l2.id

  const { data, error, isLoading } = useQuery<TrendingQueryResult>({
    queryKey: [connectedWallet, chainId],
    queryFn: ({ queryKey }) => {
      const [connectedWallet, chainId] = queryKey

      return getTrendingData(connectedWallet as string, chainId as number)
    },
  })

  const hasActiveSection =
    activeDrops.length > 0 ||
    (!isLoading && (data?.collections.length ?? 0) > 0)

  return (
    <PageContainer postFestival>
      <div className="flex h-full flex-col items-center justify-between relative pb-36 gap-10 md:gap-[54px]">
        {hasActiveSection ? (
          <section className="w-full shadow-large rounded-3xl bg-[#EFEFEF] p-[20px]">
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-ocs-turquoise">
                <Gift />
              </div>
              <div className="">
                <h2 className="text-[32px] text-display">Active Mints</h2>
              </div>
            </div>

            <div className="-mr-4 mb-4">
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

            <Trending />
          </section>
        ) : null}

        <section className="w-full" id="drops">
          <Tabs {...tabs} />
        </section>
        <BasedChallenge />
      </div>
    </PageContainer>
  )
}

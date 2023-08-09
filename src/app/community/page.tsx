import { PageContainer } from '@/components/PageContainer'
import Image from 'next/image'
import { Heart } from '@/components/icons/Heart'
import { communityData } from '../../config/community'
import { format } from 'date-fns'
import { TwitterModule } from '@/components/TwitterModule'
import { getTweets } from '@/utils/getTweets'
import Grant from '../../../public/grant.png'
import X from '../../../public/x.png'

const Community = async () => {
  const { tweets } = await getPageData()
  return (
    <PageContainer>
      <section>
        <div>
          <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-[#FF7DCB]">
            <Heart />
          </div>
          <h1 className="desktop-h1 my-6 font-display">Community</h1>
          <p className="desktop-h4 md:desktop-h3 text-[#151515] font-display">
            Base is for everyone and with that, we want to invite all builders
            to Base as part of Onchain Summer!
          </p>
          <p className="desktop-h4 md:desktop-h3 text-[#151515] mt-6 font-display">
            We are excited to be partnering with Prop House to run several
            rounds of retro prizes for those building on Base. Holders of a
            variety of Base NFTs will be able to vote in these rounds.
          </p>
        </div>
      </section>
      <section className="mt-[84px] mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <Image
              src={X}
              alt={''}
              fill
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none !relative"
            />
          </div>
          <h3 className="text-[32px] font-display text-[#151515]">Featured</h3>
        </div>
      </section>
      {tweets && Array.isArray(tweets.data) && (
        <section className="mt-12">
          <div className=" p-2 md:p-4 bg-gray-200/80 rounded-3xl shadow-large mt-6">
            <TwitterModule tweets={tweets} />
          </div>
        </section>
      )}
      <section className="mt-14">
        <div className="flex gap-4 items-end">
          <div className="w-16 h-16">
            <Image
              src={Grant}
              alt={''}
              fill
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none !relative"
            />
          </div>
          <div>
            <h3 className="desktop-h2 text-[#151515]">Base Grants</h3>
            <span className="font-mono text-[#444]">
              {communityData?.length} rounds
            </span>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="p-2 md:p-4 bg-gray-200/80 rounded-3xl shadow-large mt-6 mb-44 md:mb-32 flex flex-col gap-4">
          {communityData.map(
            ({
              title,
              subTitle,
              image,
              startDate,
              endDate,
              link,
              grantValue,
              grantsAvailable,
              list,
            }) => (
              <a
                href={link}
                target="_blank"
                className="inline-block"
                key={title}
              >
                <div className="flex flex-col mb-4 last:mb-0 md:flex-row md:pr-6 bg-white rounded-2xl">
                  <div className="w-full aspect-video md:w-[396px] md:aspect-square">
                    <Image
                      src={image}
                      alt={''}
                      fill
                      className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none !relative object-cover"
                    />
                  </div>
                  <div className="flex flex-col md:w-[70%] justify-between p-4 md:mt-0">
                    <div className="md:flex md:flex-col md:justify-start">
                      <span className="desktop-label-2 uppercase text-[#858585] mb-3">
                        {format(new Date(startDate), 'MMMM d')} -{' '}
                        {format(new Date(endDate), 'MMMM d')}
                      </span>
                      <h2 className="desktop-h2">{title}</h2>
                      <h4 className="text-black font-sans desktop-body mb-4 md:my-4">
                        {subTitle}
                      </h4>
                      <ul className="list-disc ml-6">
                        {list.map((item) => (
                          <li key={item} className="desktop-body text-black">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 desktop-label-1 text-ocs-blue">
                      <p>
                        Total:
                        {(grantValue * grantsAvailable)
                          .toString()
                          .substring(0, 2)}
                        ETH
                      </p>
                      <p>
                        {' '}
                        {grantsAvailable} x $
                        {grantValue.toString().substring(0, 2)}
                        ETH
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      </section>
    </PageContainer>
  )
}

async function getPageData() {
  const tweets = await getTweets()

  return { tweets }
}

export default Community

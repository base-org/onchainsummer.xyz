import { EmailSubscriptionDialog } from '../EmailSubscriptionDialog'
import { Button } from '@/components/Button'
import { CBSubscribeDialog } from '@/components/CBSubscribeDialog'

const MIRROR_SUBSCRIBE_URL = process.env.MIRROR_SUBSCRIBE_URL
const MIRROR_PROJECT_ADDRESS = process.env.MIRROR_PROJECT_ADDRESS

export const Footer = () => {
  return (
    <section className="bg-footer-background-gradient">
      <footer className="flex flex-col mx-6 bg-white bg-bottom rounded-3xl md:mb-10 relative bottom-24 md:bottom-16 font-mono">
        <div className="h-16 bg-footer-gradient rounded-t-3xl"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:basis-2/5">
              <p className="mt-6 mb-2 md:mb-8 text-[#151515] desktop-label-2">
                Get onchain this summer to join a multi-week celebration of art,
                culture, gaming, community, and more. New mints happening daily
                August 9th - 31st. Base is open for everyone; come bask in the
                Onchain Summer sun.
              </p>
            </div>
            <div className="flex flex-wrap justify-between md:justify-end md:gap-[120px] mb-10 md:mb-0 md:basis-3/5 mt-6 text-sm md:pb-24">
              <div className="flex justify-end my-4 md:my-0 desktop-label-2">
                <div>
                  <h3 className="mb-5 desktop-label-1">Community</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-[#858585]">
                      <a target="_blank" href="https://prop.house/base">
                        Prop House
                      </a>
                    </li>
                    <li className="text-[#858585]">
                      <a
                        target="_blank"
                        href="https://help.coinbase.com/en/coinbase/other-topics/other/base"
                      >
                        Help Center
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:justify-center my-4 md:my-0">
                <div>
                  <h3 className="mb-5 desktop-label-1">Social</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-[#858585]">
                      <a target="_blank" href="https://base.mirror.xyz/">
                        Mirror
                      </a>
                    </li>
                    <li className="text-[#858585]">
                      <a
                        target="_blank"
                        href="https://discord.com/invite/buildonbase"
                      >
                        Discord
                      </a>
                    </li>
                    <li className="text-[#858585]">
                      <a target="_blank" href="https://twitter.com/coinbase">
                        Coinbase Twitter
                      </a>
                    </li>
                    <li className="text-[#858585]">
                      <a target="_blank" href="https://twitter.com/buildonbase">
                        Base Twitter
                      </a>
                    </li>
                    <li className="text-[#858585]">
                      <a target="_blank" href="https://github.com/base-org">
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 flex-wrap max-w-fit">
            <EmailSubscriptionDialog
              mirrorProjectAddress={MIRROR_PROJECT_ADDRESS}
              mirrorSubscribeUrl={MIRROR_SUBSCRIBE_URL}
            />
            <CBSubscribeDialog>
              <Button className="flex-1 !py-[8px] !text-center" variant="LIGHT">
                SUBSCRIBE WITH WALLET
              </Button>
            </CBSubscribeDialog>
          </div>
        </div>
      </footer>
    </section>
  )
}

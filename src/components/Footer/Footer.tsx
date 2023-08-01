import Link from 'next/link'
import { MirrorSubscriptionForm } from '../MirrorSubscriptionForm'

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
              <p className="mt-6 mb-2 md:mb-8 text-[#151515] text-sm">
                Onchain Summer is a multi-week celebration of onchain art,
                gaming, music, and more, powered by Base. It runs August 9 – 30,
                2023. Visit every day for onchain drops that will brighten your
                summer.
              </p>
            </div>
            <div className="flex flex-wrap md:basis-3/5 mt-6 text-sm md:pb-24">
              <div className="flex md:justify-end basis-1/2 md:basis-1/3 my-4 md:my-0">
                <div>
                  <h3 className="mb-5 font-medium">Collection</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-[#858585]">
                      <Link href="/explore">Explore</Link>
                    </li>
                    <li className="text-[#858585]">
                      <Link href="/creator">Creator</Link>
                    </li>
                    <li className="text-[#858585]">
                      <Link href="/artwork">Artwork</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end basis-1/2 md:basis-1/3 my-4 md:my-0">
                <div>
                  <h3 className="mb-5 font-medium">Community</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-[#858585]">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="text-[#858585]">
                      <Link href="/discord-server">Discord Server</Link>
                    </li>
                    <li className="text-[#858585]">
                      <Link href="/events">Events</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:justify-center basis-full md:basis-1/3 my-4 md:my-0">
                <div>
                  <h3 className="mb-5 font-medium">Social</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-[#858585]">
                      <a href="/twitter/account">Twitter</a>
                    </li>
                    <li className="text-[#858585]">
                      <a href="/instagram/account">Instagram</a>
                    </li>
                    <li className="text-[#858585]">
                      <a href="/discord/server">Discord</a>
                    </li>
                    <li className="text-[#858585]">
                      <a href="/facebook/account">Facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[75%] lg:w-[45%]">
            <MirrorSubscriptionForm
              mirrorProjectAddress={MIRROR_PROJECT_ADDRESS}
              mirrorSubscribeUrl={MIRROR_SUBSCRIBE_URL}
            />
          </div>
        </div>
      </footer>
    </section>
  )
}

import { HomeIcon } from '../HomeIcon'
import { Separator } from '../Separator'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex flex-col mx-6 my-6">
      <div className="flex flex-col md:flex-row md:gap-24">
        <div className="md:basis-2/5">
          <HomeIcon />
          <p className="mt-2 mb-4 text-neutral-600">
            Display your minted NFTs in a stunning virtual gallery that
            captivates collectors worldwide. Seamlessly list your creations for
            sale, and leverage our growing community to connect with art
            enthusiasts and passionate collectors.
          </p>
        </div>
        <div className="flex flex-wrap md:basis-3/5">
          <div className="basis-1/2 md:basis-1/3 my-4">
            <h3 className="mb-5 font-medium">Collection</h3>
            <ul>
              <li className="text-neutral-500">
                <Link href="/explore">Explore</Link>
              </li>
              <li className="text-neutral-500">
                <Link href="/creator">Creator</Link>
              </li>
              <li className="text-neutral-500">
                <Link href="/artwork">Artwork</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/2 md:basis-1/3 my-4">
            <h3 className="mb-5 font-medium">Community</h3>
            <ul>
              <li className="text-neutral-500">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-neutral-500">
                <Link href="/discord-server">Discord Server</Link>
              </li>
              <li className="text-neutral-500">
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </div>
          <div className="basis-full md:basis-1/3 my-4">
            <h3 className="mb-5 font-medium">Social</h3>
            <ul>
              <li className="text-neutral-500">
                <a href="/twitter/account">Twitter</a>
              </li>
              <li className="text-neutral-500">
                <a href="/instagram/account">Instagram</a>
              </li>
              <li className="text-neutral-500">
                <a href="/discord/server">Discord</a>
              </li>
              <li className="text-neutral-500">
                <a href="/facebook/account">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-6 mt-2">
        <Separator />
      </div>
      <div className="md:flex md:justify-around">
        <div>
          <p className="text-neutral-500 mb-6">
            ©️ 2023 Onchainsummer. All rights reserved.
          </p>
        </div>
        <div className="md:flex md:gap-8">
          <p className="text-neutral-500 mb-4">Terms and Conditions</p>
          <p className="text-neutral-500">Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

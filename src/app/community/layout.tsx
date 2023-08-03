import { website } from '@/config/website'

export const metadata = {
  title: 'Community',
  description:
    'View what our community is up to and what we have to offer to our community.',
  openGraph: {
    title: 'Community | Onchain Summer',
    description:
      'View what our community is up to and what we have to offer to our community.',
    url: 'https://onchainsummer.xyz/trending',
    siteName: 'Onchain Summer',
    images: [website.logo],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trending | Onchain Summer',
    description:
      'View what our community is up to and what we have to offer to our community.',
    site: website.twitter.site,
    creator: website.twitter.creator,
    images: [website.logo.url],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

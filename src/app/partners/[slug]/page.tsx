import { redirect } from 'next/navigation'

type Props = {
  params: { slug: string }
}

const Page = async ({ params }: Props) => {
  const slug = params.slug
  redirect(`/${slug}`)
}

export default Page

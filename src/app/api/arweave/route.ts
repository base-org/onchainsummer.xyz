import { NextResponse, NextRequest } from 'next/server'
import { SDK } from '@/utils/graphqlSdk'

type ArticleType = { content: { body: string; title: string } } | undefined

export async function POST(request: NextRequest) {
  try {
    const { digestId } = await request.json()

    if (!digestId) return NextResponse.json({}, { status: 400 })

    let article: ArticleType
    console.log(`Fetching digest ${digestId} from Arweave API...`)
    const digest = await SDK.GetMirrorTransactions({ digest: digestId })
    console.log(`Fetch digest complete`)

    const articleId = digest?.transactions?.edges[0]?.node?.id

    if (articleId) {
      console.log(`Fetching article ${articleId} from Arweave API...`)
      const res = await fetch(`https://arweave.net/${articleId}`, {
        // Revalidate every minute
        next: { revalidate: 1 * 60 },
      })
      console.log(`Fetch article complete`)
      article = (await res?.json()) as {
        content: { body: string; title: string }
      }
    }

    return NextResponse.json(article, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: (error as any)?.message, stack: (error as any)?.stack },
      { status: 400 }
    )
  }
}

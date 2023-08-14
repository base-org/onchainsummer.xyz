import { NextResponse, NextRequest } from 'next/server'
import { SDK } from '@/utils/graphqlSdk'

type ArticleType = { content: { body: string; title: string } } | undefined

export async function POST(request: NextRequest) {
  try {
    const { digestId } = await request.json()

    if (!digestId) return NextResponse.json({}, { status: 400 })

    let article: ArticleType
    const digest = await SDK.GetMirrorTransactions({ digest: digestId })

    const articleId = digest?.transactions?.edges[0]?.node?.id

    if (articleId) {
      const res = await fetch(`https://arweave.net/${articleId}`, {
        // Revalidate every minute
        next: { revalidate: 1 * 60 },
      })
      article = (await res?.json()) as {
        content: { body: string; title: string }
      }
    }

    return NextResponse.json(article, { status: 200 })
  } catch {
    return NextResponse.json({}, { status: 400 })
  }
}

import { NextResponse, NextRequest } from 'next/server'
import { SDK } from '@/utils/graphqlSdk'

type ArticleType = { content: { body: string; title: string } } | undefined

export async function POST(request: NextRequest) {
  if (request.headers.get('x-api-key') !== process.env.PASSWORD_PROTECT)
    return NextResponse.json({}, { status: 401 })

  const { digestId } = await request.json()

  if (!digestId) return NextResponse.json({}, { status: 400 })

  let article: ArticleType
  try {
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
  } catch {
    return NextResponse.json({}, { status: 400 })
  }

  return NextResponse.json(article, { status: 200 })
}

import { writeFile, unlink } from 'fs'
import { NextResponse } from 'next/server'
import { partners } from '@/config/partners'
import { SDK } from '@/utils/graphqlSdk'

type ArticleType = { content: { body: string; title: string } } | undefined

const filePath = './generated/arweave.ts'
const prefix = 'export const arweaves = '

export async function GET(request: Request) {
  const data: Record<string, ArticleType> = {}
  for (const partner of partners) {
    let article: ArticleType
    if (data[partner.aarweaveDigest]) continue
    try {
      const digest = await SDK.GetMirrorTransactions({
        digest: partner.aarweaveDigest,
      })

      const articleId = digest?.transactions?.edges[0]?.node?.id

      if (articleId) {
        const res = await fetch(`https://arweave.net/${articleId}`)
        article = (await res?.json()) as {
          content: { body: string; title: string }
        }
      }
    } catch {}
    data[partner.aarweaveDigest] = article
  }

  const content = `${prefix} ${JSON.stringify(data)}`

  try {
    await new Promise((resolve, reject) =>
      unlink(filePath, (err) => {
        !!err ? reject(err) : resolve({})
      })
    )
  } catch (ex) {}
  try {
    await new Promise((resolve, reject) =>
      writeFile(filePath, content, 'utf8', (err) =>
        !!err ? reject(err) : resolve({})
      )
    )
  } catch (ex) {}

  return NextResponse.json(data, { status: 200 })
}

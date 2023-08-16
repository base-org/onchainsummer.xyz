import { NextResponse } from 'next/server'

// A proxy API endpoint to redirect all requests to `/api/reservoir/*` to
// https://api-base.reservoir.tools/{endpoint}/{query-string}
// and attach the `x-api-key` header to the request. This way the
// Reservoir API key is not exposed to the client.

const hostRegex = /^(?:https?:\/\/)?(?:www\d?\.)?(.[^/]+)/i

const allowedDomains = process.env.ALLOWED_API_DOMAINS
  ? process.env.ALLOWED_API_DOMAINS.split(',').map((domain) => {
      const match = domain.match(hostRegex)
      return match && match[1] ? match[1] : domain
    })
  : null

const proxy = async (
  req: Request,
  { params }: { params: { slug: string | string[] } }
) => {
  const { body, method, headers: reqHeaders } = req
  if (allowedDomains && allowedDomains.length > 0) {
    let origin =
      reqHeaders.get('origin') ||
      reqHeaders.get('referer') ||
      reqHeaders.get('host') ||
      ''
    if (origin) {
      const hostMatches = origin.match(hostRegex)
      origin = hostMatches && hostMatches[1] ? hostMatches[1] : origin
    }
    if (!origin.length || !allowedDomains.includes(origin)) {
      return NextResponse.json(
        { error: 'Access forbidden' },
        {
          status: 403,
        }
      )
    }
  }

  const { slug } = params
  let endpoint = ''

  if (typeof slug === 'string') {
    endpoint = slug
  } else {
    endpoint = (slug || ['']).join('/')
  }

  const searchParams = new URL(req.url).searchParams
  const url = new URL(`https://api-base.reservoir.tools/${endpoint}`)
  if (endpoint.includes('redirect/')) {
    return NextResponse.redirect(url.href)
  }

  for (const [key, value] of searchParams) {
    url.searchParams.append(key, value)
  }

  try {
    const options: RequestInit | undefined = {
      method,
    }

    const headers = new Headers({
      Referrer:
        reqHeaders.get('origin') ||
        reqHeaders.get('referer') ||
        reqHeaders.get('host') ||
        '',
    })

    if (process.env.RESERVOIR_API_KEY)
      headers.set('x-api-key', process.env.RESERVOIR_API_KEY)

    if (body && typeof body === 'object') {
      headers.set('Content-Type', 'application/json')
      const bodyData = await req.json()
      options.body = JSON.stringify(bodyData)
    }

    if (
      reqHeaders.has('x-rkc-version') &&
      typeof reqHeaders.get('x-rkc-version') === 'string'
    ) {
      headers.set('x-rkc-version', reqHeaders.get('x-rkc-version') as string)
    }

    if (
      reqHeaders.has('x-rkui-version') &&
      typeof reqHeaders.get('x-rkui-version') === 'string'
    ) {
      headers.set('x-rkui-version', reqHeaders.get('x-rkui-version') as string)
    }

    options.headers = headers
    const response = await fetch(url.href, options)

    let data: any

    const contentType = response.headers.get('content-type')

    if (contentType?.includes('application/json')) {
      data = await response.json()
    } else {
      data = await response.text()
    }

    if (!response.ok) throw data

    if (contentType?.includes('image/')) {
      return new NextResponse(Buffer.from(data), {
        status: 200,
        headers: {
          'content-type': 'text/html',
        },
      })
    } else {
      return NextResponse.json(data)
    }
  } catch (error) {
    return NextResponse.json(error, {
      status: 400,
    })
  }
}

export const GET = proxy
export const POST = proxy
export const PUT = proxy

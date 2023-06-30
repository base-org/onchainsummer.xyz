import { getSdk } from '@/graphql/_generated/sdk'
import { GraphQLClient } from 'graphql-request'

const API_URI = process.env.NEXT_PUBLIC_AARWEAVE_API_URL

if (!API_URI) {
  throw new Error('Missing ENV var NEXT_PUBLIC_AARWEAVE_API_URL')
}

const IS_CLIENT = typeof window !== 'undefined'

const client = new GraphQLClient(API_URI, {
  /* IS_CLIENT check prevents error on trying to set ORIGIN header in browserland */
  headers: IS_CLIENT
    ? {}
    : {
        origin:
          process.env.NODE_ENV === 'development'
            ? 'localhost:3000'
            : process.env.HOST!,
      },

  requestMiddleware: (req) => {
    /* Use this middleware to inspect requests going out through the GraphQL SDK
     * as requests done via the server side won't be viewable in the browser's
     * network tab
     */

    return req
  },
})

export const SDK = getSdk(client)

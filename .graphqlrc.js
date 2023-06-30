const { loadEnvConfig } = require('@next/env')

const { combinedEnv } = loadEnvConfig('.')

/** @type {import('graphql-config').IGraphQLConfig} */
module.exports = {
  schema: combinedEnv.NEXT_PUBLIC_AARWEAVE_API_URL ?? '',
  documents: 'src/graphql/**/*.gql',
}

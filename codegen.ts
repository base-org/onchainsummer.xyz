import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

const { combinedEnv } = loadEnvConfig('.')

const config: CodegenConfig = {
  overwrite: true,
  schema: combinedEnv.NEXT_PUBLIC_AARWEAVE_API_URL,
  documents: ['src/graphql/**/*.gql'],
  generates: {
    'src/graphql/_generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: true,
        },
        declarationKind: 'interface',
      },
    },
    'src/graphql/_generated/sdk.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './types',
      },
      plugins: ['typescript-graphql-request'],
      config: {
        avoidOptionals: true,
      },
    },
  },
}

export default config

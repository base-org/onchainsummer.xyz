'use client'

import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider as NextQueryParamProvider } from 'use-query-params'
import { FC } from 'react'

interface QueryParamProviderProps {
  children: React.ReactNode
}

export const QueryParamProvider: FC<QueryParamProviderProps> = ({
  children,
}) => {
  return (
    <NextQueryParamProvider adapter={NextAdapterApp}>
      {children}
    </NextQueryParamProvider>
  )
}

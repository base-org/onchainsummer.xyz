'use client'
import { base, baseGoerli, goerli, mainnet } from 'wagmi/chains'

export const isProd = process.env.NEXT_PUBLIC_CHAIN_ENV === 'mainnet'

export const l1 = isProd ? mainnet : goerli
export const l2 = isProd ? base : baseGoerli

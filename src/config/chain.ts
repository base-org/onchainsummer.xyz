import { Base, BaseGoerli, Goerli, Ethereum } from '@thirdweb-dev/chains'

export const isProd = process.env.NEXT_PUBLIC_CHAIN_ENV === 'mainnet'

export const l1 = isProd ? Ethereum : Goerli
export const l2 = isProd ? Base : BaseGoerli

interface Contract {
  address: `0x${string}`
  crossMintClientId: string
  name: string
}

export const contracts: Contract[] = [
  {
    name: 'onchainsummer1',
    crossMintClientId: '57c79280-ce57-466f-9e9b-a4aa26a29fcf',
    address: '0x932937FAAE4Ec7dC59fA96089f28D33709B45204',
  },
]

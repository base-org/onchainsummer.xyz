import { WindowProvider } from 'wagmi'

interface CustomWindowProvider extends WindowProvider {
  isCoinbaseBrowser?: boolean
}

export const getIsCoinbaseBrowser = () => {
  const ethereum = window.ethereum as CustomWindowProvider | undefined
  const isCoinbaseBrowser = ethereum?.isCoinbaseBrowser || false
  return isCoinbaseBrowser
}

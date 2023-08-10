export const getURL = () => {
  const url = (process.env.VERCEL_URL as string) || 'onchainsummer.xyz'
  return url.startsWith('http') ? url : `https://${url}`
}

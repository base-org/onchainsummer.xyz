export const getURL = () => {
  const url = process.env.VERCEL_URL as string
  return url.startsWith('http') ? url : `https://${url}`
}

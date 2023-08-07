import { schedule } from '../src/config/schedule'
const DOMAIN = 'https://onchainsummer.xyz/'

function generateSiteMap() {
  return `<html>
    <body>
      <ul>
        <li><a href="${DOMAIN}">HOME</a></li>
        <li><a href="${DOMAIN}/community">Community</a></li>
        <li><a href="${DOMAIN}/trending">Trending</a></li>
        <ul>
      ${Object.values(schedule)
        .map(({ slug, name }) => {
          return `
            <li><a href="${DOMAIN}/${slug}">${name}</a></li>
            `
        })
        .join('')}
          </ul>
      </ul>
    </body>
   </html>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/html')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap

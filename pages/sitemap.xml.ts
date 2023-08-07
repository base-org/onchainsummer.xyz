import { schedule } from '../src/config/schedule'
const DOMAIN = 'https://onchainsummer.xyz/'

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${DOMAIN}</loc>
     </url>
     <url>
       <loc>${DOMAIN}/community</loc>
     </url>
		 <url>
			<loc>${DOMAIN}/trending</loc>
		</url>
     ${Object.values(schedule)
       .map(({ slug }) => {
         return `
       <url>
           <loc>${DOMAIN}/${slug}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap

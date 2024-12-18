const fs = require('fs')
const globby = require('globby')

function addPage(page) {
    const path = page.replace('src/pages', '').replace('.jsx', '/').replace('.mdx', '/').replace('.js', '/').replace('.tsx', '/').replace('.ts', '/').replace('.md', '/')
    const route = path === '/index' ? '' : path

    return `  <url>
    <loc>${process.env.WEBSITE_URL}${route}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        'src/pages/**/*.js',
        'src/pages/**/*.tsx',
        'src/pages/**/*.mdx',
        '!src/pages/**/_*.js',
        '!src/pages/**/_*.tsx',
        '!src/pages/**/*.test',
        '!src/pages/api',
        '!src/pages/404.js',
        '!src/pages/paypal-confirmation.js'
    ])
    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

    fs.writeFileSync('src/../public/sitemap.xml', sitemap)
}
const generateRobotsTxt = () => {
    const robots =  "User-agent: *\n" +
        "Disallow: /api\n" +
        "Allow: /\n" +
        `Sitemap: ${process.env.WEBSITE_URL}/sitemap.xml`;

    fs.writeFileSync('src/../public/robots.txt', robots)
}

if(process.env.WEBSITE_URL) {
    generateSitemap().then(()=> {
        generateRobotsTxt();
        }
    ).catch(error => {
        throw error
    });



}


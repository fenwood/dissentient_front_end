export const loader = () => {
  const content = `
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://dissentientdigital.com/</loc>
    <lastmod>2024-03-04T00:15:15+01:00</lastmod>
    <priority>1.0</priority>
    </url>
    <url>
    <loc>https://dissentientdigital.com/faq</loc>
    <lastmod>2024-03-04T00:15:15+01:00</lastmod>
    <priority>1.0</priority>
    </url>
    <url>
    <loc>https://dissentientdigital.com/about</loc>
    <lastmod>2024-03-04T00:15:15+01:00</lastmod>
    <priority>1.0</priority>
    </url>
    <url>
    <loc>https://dissentientdigital.com/services</loc>
    <lastmod>2024-03-04T00:15:15+01:00</lastmod>
    <priority>1.0</priority>
    </url>
    <url>
    <loc>https://dissentientdigital.com/contact</loc>
    <lastmod>2024-03-04T00:15:15+01:00</lastmod>
    <priority>1.0</priority>
    </url>
    </urlset>
    `

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  })
}

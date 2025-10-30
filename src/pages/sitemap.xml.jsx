// pages/sitemap.xml.jsx
export default function Sitemap() {
    // This component doesn't render anything
    return null;
}

export async function getServerSideProps({ res }) {
    try {
        const response = await fetch('https://landing-page-yclw.vercel.app/api/blog');
        const data = await response.json();
        const blogPosts = data.data || [];

        const currentDate = new Date().toISOString();

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.ftfltechnology.com</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://www.ftfltechnology.com/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  ${blogPosts.map(post => `
  <url>
    <loc>https://www.ftfltechnology.com/blog/${post._id}</loc>
    <lastmod>${post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.createdAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

        res.setHeader('Content-Type', 'application/xml');
        res.write(sitemap);
        res.end();
    } catch (error) {
        console.error('Error generating sitemap:', error);

        // Fallback basic sitemap
        const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.ftfltechnology.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

        res.setHeader('Content-Type', 'application/xml');
        res.write(fallbackSitemap);
        res.end();
    }

    return { props: {} };
}
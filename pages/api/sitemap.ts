import DocsRoutes from '../../components/DocsRoutes.json';
import LearnRoutes from '../../components/LearnRoutes.json';
import { NextApiRequest, NextApiResponse } from 'next';

const host = 'https://nextjs.tw';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

  const routes: string[] = [];
  DocsRoutes.forEach(r => getRoutes(r, routes));
  LearnRoutes.forEach(r => getRoutes(r, routes));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>${host}</loc>
      <priority>1.0</priority>
    </url>
    ${routes.map(route => `
      <url>
        <loc>${host}${route}</loc>
        <priority>0.5</priority>
      </url>
    `).join('\n')}
    </urlset>`;

  res.end(xml);
}

interface Route {
  path?: string
  children?: Route[]
}

function getRoutes(route: Route, result: string[]) {
  if (route.path) result.push(route.path);
  if (route.children) {
    route.children.forEach(c => getRoutes(c, result));
  }
}

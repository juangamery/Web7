import { list, del } from '@vercel/blob';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Configuración CORS simple
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization',
    'Content-Type': 'application/json'
  });

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  // Verificar Auth
  const authHeader = req.headers.get('authorization');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers });
  }

  try {
    if (req.method === 'GET') {
      const { blobs } = await list({ prefix: 'logs/' });
      return new Response(JSON.stringify({ blobs }), { status: 200, headers });
    }

    if (req.method === 'DELETE') {
      const url = new URL(req.url);
      const urlToDelete = url.searchParams.get('url');
      if (!urlToDelete) {
        return new Response(JSON.stringify({ error: 'Falta parámetro url' }), { status: 400, headers });
      }
      
      await del(urlToDelete);
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers });
  } catch (error) {
    console.error("Admin Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
  }
}

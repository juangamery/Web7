import { list, del } from '@vercel/blob';

// Removed edge runtime to allow node modules.

export default async function handler(req, res) {
  // Configuración CORS simple
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verificar Auth
  const authHeader = req.headers['authorization'];
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      debug: { 
        hasPassword: !!adminPassword, 
        hasHeader: !!authHeader,
        headerMatches: authHeader === `Bearer ${adminPassword}`,
        headerLen: authHeader ? authHeader.length : 0,
        expectedLen: adminPassword ? (`Bearer ` + adminPassword).length : 0
      } 
    });
  }

  try {
    if (req.method === 'GET') {
      const hasToken = !!process.env.BLOB_READ_WRITE_TOKEN;
      if (!hasToken) {
        return res.status(200).json({ blobs: [], debug: 'NO_TOKEN' });
      }
      const { blobs } = await list({ prefix: 'logs/' });
      return res.status(200).json({ blobs, hasToken });
    }

    if (req.method === 'DELETE') {
      const urlToDelete = req.query.url;
      if (!urlToDelete) {
        return res.status(400).json({ error: 'Falta parámetro url' });
      }
      
      await del(urlToDelete);
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error("Admin Error:", error);
    return res.status(500).json({ error: error.message });
  }
}

import { put, list } from '@vercel/blob';
import crypto from 'crypto';

// Removed edge runtime due to node:crypto and @vercel/blob dependencies

// (Validación matemática eliminada a pedido del usuario. Se acepta cualquier código.)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let body = req.body || {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    const { event, path, detail, client } = body;
    const h = (name) => {
      try { const v = req.headers[name]; return v ? decodeURIComponent(String(v)) : null; } catch (e) { return req.headers[name] || null; }
    };
    
    // Obtener `r` del body, query o de las cookies de forma segura
    let r = body.r || req.query?.r;
    if (!r) {
      const cookieHeader = req.headers['cookie'] || '';
      const match = cookieHeader.match(/(^| )web7_ref=([^;]+)/);
      if (match) r = match[2];
    }

    if (r && typeof r !== 'string') {
      r = String(r);
    }

    // Extracción segura de datos (evita bloqueos si no llegan)
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || '127.0.0.1';
    const country = h('x-vercel-ip-country') || 'Unknown';
    const region = h('x-vercel-ip-country-region') || '';
    const city = h('x-vercel-ip-city') || '';
    
    // Hash de la IP y User Agent con fallback seguro
    const salt = process.env.IP_SALT || 'web7_secure_salt';
    const ip_hash = crypto.createHash('sha256').update((ip || 'no-ip') + salt).digest('hex').substring(0, 16);
    
    const ua = req.headers['user-agent'] || 'Unknown';
    const ua_hash = crypto.createHash('sha256').update((ua || 'no-ua') + salt).digest('hex').substring(0, 16);

    // Preparar el log event
    const now = new Date();
    const argDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
    const year = argDate.getFullYear();
    const month = String(argDate.getMonth() + 1).padStart(2, '0');
    const day = String(argDate.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    const nameHash = crypto.createHash('md5').update(dateStr + salt).digest('hex').substring(0, 8);
    const fileName = `logs/${dateStr}-${nameHash}.jsonl`;

    const logEntry = {
      ts: now.toISOString(),
      r: r || null,
      event: event || 'unknown',
      path: path || '/',
      country,
      region,
      city,
      lat: h('x-vercel-ip-latitude'),
      lon: h('x-vercel-ip-longitude'),
      ip_hash,
      ua_hash,
      ua: ua,
      accept_lang: h('accept-language'),
      ...(client && typeof client === 'object' ? { client } : {}),
      ...(detail && Object.keys(detail).length ? { detail } : {})
    };

    const logLine = JSON.stringify(logEntry) + '\n';

    let existingContent = '';
    
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { blobs } = await list({ prefix: fileName });
        let suffix = false;

        if (blobs.length > 0) {
          const baseUrl = blobs[0].url;
          // Cache-buster: evita leer una copia vieja del CDN y pisar registros
          const blobUrl = baseUrl + (baseUrl.includes('?') ? '&' : '?') + '_t=' + Date.now();
          const fetchOpts = { headers: {}, cache: 'no-store' };
          fetchOpts.headers['Authorization'] = `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`;
          
          const resp = await fetch(blobUrl, fetchOpts);
          
          if (resp.ok) {
            existingContent = await resp.text();
          } else {
            // ESTRATEGIA SEGURA: Si no podemos leer el archivo viejo por un error de red, 
            // NO lo sobreescribimos. Guardamos el nuevo registro en un archivo aparte (suffix=true).
            // Esto asegura que nunca perdamos datos, aunque queden en dos archivos ese día.
            suffix = true;
          }
        }
        
        await put(fileName, existingContent + logLine, {
          access: 'private',
          addRandomSuffix: suffix,
          allowOverwrite: !suffix,
          cacheControlMaxAge: 60,
          contentType: 'application/x-ndjson'
        });
      } catch (err) {
        console.error("Error guardando en Vercel Blob:", err);
      }
    } else {
      console.warn("BLOB_READ_WRITE_TOKEN no configurado.");
    }

    // Si es el evento landing, intentar inyectar la cookie
    if (event === 'landing' && r) {
      res.setHeader('Set-Cookie', `web7_ref=${r}; Path=/; Max-Age=5184000; SameSite=Lax; Secure; HttpOnly`);
    }

    return res.status(200).json({ success: true, valid: true });
    
  } catch (error) {
    console.error("Track error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

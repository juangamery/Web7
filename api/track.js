import { put, list } from '@vercel/blob';
import crypto from 'crypto';

// Removed edge runtime due to node:crypto and @vercel/blob dependencies

// Algoritmo de validación de código de referencia
function isValidReferral(r) {
  if (!r || typeof r !== 'string' || !/^[0-9]+$/.test(r) || r.length < 2) {
    return false;
  }
  
  const c = parseInt(r[0]);
  const payload = r.slice(1);
  
  let s = 0;
  for (let char of payload) {
    s += parseInt(char);
  }
  
  while (s > 9) {
    s = s.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  
  const cExpected = (s === 9) ? 0 : (9 - s);
  return c === cExpected;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body || {};
    const { event, path, detail } = body;
    
    // Obtener `r` del body o de las cookies
    let r = body.r;
    if (!r) {
      const cookieHeader = req.headers['cookie'] || '';
      const match = cookieHeader.match(/(^| )web7_ref=([^;]+)/);
      if (match) r = match[2];
    }

    // Si hay un r, lo validamos. Si es inválido, no atribuimos el evento.
    let isRefValid = false;
    if (r) {
      isRefValid = isValidReferral(r);
    }

    if (!isRefValid) {
      return res.status(200).json({ success: true, valid: false });
    }

    // Geo por IP desde headers de Vercel
    const ip = req.headers['x-forwarded-for'] || '127.0.0.1';
    const country = req.headers['x-vercel-ip-country'] || 'Unknown';
    const region = req.headers['x-vercel-ip-country-region'] || '';
    const city = req.headers['x-vercel-ip-city'] || '';
    
    // Hash de la IP
    const salt = process.env.IP_SALT || 'web7_secure_salt';
    const ip_hash = crypto.createHash('sha256').update(ip + salt).digest('hex').substring(0, 16);
    
    // Hash del User Agent
    const ua = req.headers['user-agent'] || 'Unknown';
    const ua_hash = crypto.createHash('sha256').update(ua + salt).digest('hex').substring(0, 16);

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
      r: r,
      event: event || 'unknown',
      path: path || '/',
      country,
      region,
      city,
      ip_hash,
      ua_hash,
      ...(detail ? { detail } : {})
    };

    const logLine = JSON.stringify(logEntry) + '\n';

    let existingContent = '';
    
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { blobs } = await list({ prefix: fileName });
        if (blobs.length > 0) {
          const blobUrl = blobs[0].url;
          const resp = await fetch(blobUrl);
          if (resp.ok) {
            existingContent = await resp.text();
          }
        }
        
        await put(fileName, existingContent + logLine, {
          access: 'public',
          addRandomSuffix: false
        });
      } catch (err) {
        console.error("Error guardando en Vercel Blob:", err);
        return res.status(200).json({ success: true, valid: true, errorBlob: err.message, stack: err.stack });
      }
    } else {
      console.warn("BLOB_READ_WRITE_TOKEN no configurado.");
    }

    // Si es el evento landing, intentar inyectar la cookie
    if (event === 'landing') {
      res.setHeader('Set-Cookie', `web7_ref=${r}; Path=/; Max-Age=5184000; SameSite=Lax; Secure; HttpOnly`);
    }

    return res.status(200).json({ success: true, valid: true });
    
  } catch (error) {
    console.error("Track error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

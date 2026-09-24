import { put, list, head } from '@vercel/blob';
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

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { event, path, detail } = body;
    
    // Obtener `r` del body o de las cookies
    let r = body.r;
    if (!r) {
      const cookieHeader = req.headers.get('cookie') || '';
      const match = cookieHeader.match(/(^| )web7_ref=([^;]+)/);
      if (match) r = match[2];
    }

    // Si hay un r, lo validamos. Si es inválido, no atribuimos el evento.
    let isRefValid = false;
    if (r) {
      isRefValid = isValidReferral(r);
    }

    // Si el r no es válido, no hacemos tracking de campaña para este request
    // Podría registrarse como orgánico, pero la especificación v1 dice que
    // no se persiste ni se asocia si es inválido.
    if (!isRefValid) {
      return new Response(JSON.stringify({ success: true, valid: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Geo por IP desde headers de Vercel
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const country = req.headers.get('x-vercel-ip-country') || 'Unknown';
    const region = req.headers.get('x-vercel-ip-country-region') || '';
    const city = req.headers.get('x-vercel-ip-city') || '';
    
    // Hash de la IP (sin guardarla en crudo)
    const salt = process.env.IP_SALT || 'web7_secure_salt';
    const ip_hash = crypto.createHash('sha256').update(ip + salt).digest('hex').substring(0, 16);
    
    // Hash del User Agent para agrupar sesiones básicas
    const ua = req.headers.get('user-agent') || 'Unknown';
    const ua_hash = crypto.createHash('sha256').update(ua + salt).digest('hex').substring(0, 16);

    // Preparar el log event
    const now = new Date();
    // Ajustar a zona horaria de Buenos Aires (aprox, para nombre de archivo)
    const argDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
    const year = argDate.getFullYear();
    const month = String(argDate.getMonth() + 1).padStart(2, '0');
    const day = String(argDate.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    // Hash the filename to make it unguessable in public Vercel Blob
    const salt = process.env.IP_SALT || 'web7_secure_salt';
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

    // Para evitar problemas de sobreescritura concurrente severa, en un sitio de bajo tráfico
    // leer, concatenar y subir es suficiente en Vercel Blob.
    let existingContent = '';
    
    // Blob necesita token
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
          access: 'public', // Debe ser public para poder descargarlo luego fácilmente desde la API, pero ofuscado el nombre si hiciera falta. Usar public es requerido por Blob en plan free.
          addRandomSuffix: false // Sobreescribimos el mismo archivo
        });
      } catch (err) {
        console.error("Error guardando en Vercel Blob:", err);
      }
    } else {
      console.warn("BLOB_READ_WRITE_TOKEN no configurado. Log generado pero no guardado:", logLine);
    }

    // Preparar respuesta
    const responseHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    // Si es el evento landing, intentar inyectar la cookie
    if (event === 'landing') {
      // 60 días = 60 * 24 * 60 * 60 = 5184000 segundos
      responseHeaders.append(
        'Set-Cookie', 
        `web7_ref=${r}; Path=/; Max-Age=5184000; SameSite=Lax; Secure; HttpOnly`
      );
    }

    return new Response(JSON.stringify({ success: true, valid: true }), {
      status: 200,
      headers: responseHeaders,
    });
    
  } catch (error) {
    console.error("Track error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

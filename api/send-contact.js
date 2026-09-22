import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (text) => {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const { nombre, contacto, negocio, sector, necesidad, mensaje } = req.body;

  if (!nombre || !contacto || !negocio || !sector || !necesidad) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="background-color: #0a0a0a; color: #f5f5f5; padding: 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #222; border-radius: 16px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          <div style="text-align: center; border-bottom: 1px solid #222; padding-bottom: 20px; margin-bottom: 25px;">
            <img src="https://web7.com.ar/assets/Logoweb7-verde.svg" alt="WEB7 Studio" style="height: 32px; margin-bottom: 15px; display: inline-block;" />
            <p style="color: #888; margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Nuevo Lead de Contacto</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #222;">
                <td style="padding: 12px 0; color: #888; font-size: 14px; width: 35%;">Nombre:</td>
                <td style="padding: 12px 0; color: #f5f5f5; font-size: 15px; font-weight: bold;">${escapeHtml(nombre)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #222;">
                <td style="padding: 12px 0; color: #888; font-size: 14px;">Contacto (Email/Tel):</td>
                <td style="padding: 12px 0; color: #DFFE02; font-size: 15px; font-weight: bold;">${escapeHtml(contacto)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #222;">
                <td style="padding: 12px 0; color: #888; font-size: 14px;">Negocio:</td>
                <td style="padding: 12px 0; color: #f5f5f5; font-size: 15px;">${escapeHtml(negocio)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #222;">
                <td style="padding: 12px 0; color: #888; font-size: 14px;">Sector:</td>
                <td style="padding: 12px 0; color: #f5f5f5; font-size: 15px; text-transform: capitalize;">${escapeHtml(sector)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #222;">
                <td style="padding: 12px 0; color: #888; font-size: 14px;">Necesidad:</td>
                <td style="padding: 12px 0; color: #f5f5f5; font-size: 15px;">${escapeHtml(necesidad)}</td>
              </tr>
            </table>
          </div>

          ${mensaje ? `
            <div style="margin-top: 25px; background: #181818; padding: 20px; border-radius: 8px; border: 1px solid #222;">
              <h3 style="margin-top: 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Mensaje adicional:</h3>
              <p style="margin: 0; color: #e5e5e5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(mensaje)}</p>
            </div>
          ` : ''}

          <div style="text-align: center; border-top: 1px solid #222; padding-top: 20px; margin-top: 30px; color: #666; font-size: 11px;">
            <p style="margin: 0;">Este mensaje fue enviado a través del formulario de contacto de WEB7 Studio.</p>
            <p style="margin: 5px 0 0 0;">WEB7 Studio — <a href="https://web7.com.ar" style="color: #DFFE02; text-decoration: none;">web7.com.ar</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const sender = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const recipient = process.env.RECIPIENT_EMAIL || 'cf.gunther@gmail.com';

    const data = await resend.emails.send({
      from: sender,
      to: recipient,
      reply_to: contacto.includes('@') ? contacto : undefined, // set reply-to if it looks like an email
      subject: `Nuevo lead: ${nombre} (${negocio})`,
      html: htmlContent,
    });

    // Enviar también al Webhook (Make.com) si está configurado, para no perder ningún lead
    if (process.env.LEADS_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEADS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            source: "Formulario de Contacto",
            nombre, 
            contacto, 
            email: contacto,
            negocio, 
            sector, 
            necesidad, 
            mensaje,
            date: new Date().toISOString() 
          })
        });
      } catch (err) {
        console.error("Webhook Error:", err);
      }
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

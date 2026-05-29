import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const { email, history } = req.body;

  if (!email || !history || !Array.isArray(history)) {
    return res.status(400).json({ error: 'email and history required' });
  }

  // Format chat history into clean HTML layout
  const chatHtml = history
    .map(msg => {
      const roleName = msg.role === 'user' ? 'Tú' : 'Asistente WEB7';
      const bgColor = msg.role === 'user' ? 'background-color: #DFFE02; color: #0a0a0a;' : 'background-color: #222; color: #e5e5e5;';
      const align = msg.role === 'user' ? 'text-align: right;' : 'text-align: left;';
      const margin = msg.role === 'user' ? 'margin-left: 20%;' : 'margin-right: 20%;';
      return `
        <div style="margin-bottom: 15px; text-align: ` + (msg.role === 'user' ? 'right' : 'left') + `;">
          <div style="display: inline-block; padding: 10px 15px; border-radius: 12px; font-family: sans-serif; font-size: 14px; max-width: 80%; ` + bgColor + ` ` + margin + `">
            <strong style="display: block; font-size: 11px; margin-bottom: 4px; opacity: 0.6;">` + roleName + `</strong>
            ` + msg.content.replace(/\n/g, '<br>') + `
          </div>
        </div>
      `;
    })
    .join('');

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="background-color: #0a0a0a; color: #f5f5f5; padding: 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #222; border-radius: 16px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          <div style="text-align: center; border-bottom: 1px solid #222; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #34D399; margin: 0; font-size: 24px;">WEB7 Studio</h1>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">Historial de conversación</p>
          </div>
          <div>
            ` + chatHtml + `
          </div>
          <div style="text-align: center; border-top: 1px solid #222; padding-top: 15px; margin-top: 20px; color: #666; font-size: 11px;">
            <p style="margin: 0;">Este es un mensaje automático enviado desde nuestro asistente virtual.</p>
            <p style="margin: 5px 0 0 0;">WEB7 Studio — <a href="https://web7-studio.vercel.app" style="color: #34D399; text-decoration: none;">web7-studio.vercel.app</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const sender = process.env.SENDER_EMAIL || 'info@web7.studio';
    
    // Force onboarding fallback if using unverified Resend domain
    const fromAddress = sender.includes('web7.studio') && !process.env.DOMINIO_VERIFICADO 
      ? 'WEB7 Studio <onboarding@resend.dev>' 
      : sender;

    const data = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'Tu historial de chat con WEB7 Studio',
      html: htmlContent,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { email, name, interest, history } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Send Email Notification via Resend
    let resendError = null;
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "WEB7 Bot <onboarding@resend.dev>", // Usamos el sandbox de resend si no hay dominio verificado
          to: "cf.gunther@gmail.com", // Cambiar por el correo real de recepción
          subject: `Nuevo Lead WEB7: ${name || "Interesado"}`,
          html: `
            <h2>¡Nuevo Lead Capturado en el Chat!</h2>
            <p><strong>Nombre:</strong> ${name || "No especificado"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Interés / Lead Magnet:</strong> ${interest || "General"}</p>
            <hr />
            <h3>Historial de la Conversación:</h3>
            <pre style="background:#f4f4f4; padding:15px; border-radius:5px; white-space: pre-wrap;">${JSON.stringify(history, null, 2)}</pre>
          `,
        });
      } catch (err) {
        console.error("Resend Error:", err);
        resendError = err.message;
      }
    } else {
      console.warn("RESEND_API_KEY not configured.");
    }

    // 2. Trigger Webhook (e.g. Make.com or Google Sheets) if configured
    if (process.env.LEADS_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEADS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name, interest, date: new Date().toISOString() })
        });
      } catch (err) {
        console.error("Webhook Error:", err);
      }
    }

    return new Response(JSON.stringify({ success: true, resendError }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Lead save error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

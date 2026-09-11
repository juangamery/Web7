import { Resend } from "resend";
import { Groq } from "groq-sdk";

const resend = new Resend(process.env.RESEND_API_KEY);
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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
    const body = await req.json();
    const { name, email, phone, history } = body;

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Name and Email are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Formatear respuestas para la IA y para el mail
    let answersText = history.map((item, index) => 
      `${index + 1}. ${item.question}\nRespuesta: ${item.answer}`
    ).join("\n\n");

    let answersHtml = history.map((item, index) => 
      `<div style="margin-bottom: 15px;">
         <strong style="color: #333;">${index + 1}. ${item.question}</strong><br/>
         <span style="color: #666; font-size: 14px;">${item.answer}</span>
       </div>`
    ).join("");

    // 2. Generar Reporte con IA (Groq)
    let reportMarkdown = "";
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Sos un Consultor Experto en Negocios Digitales, SEO, GEO y Desarrollo Web que trabaja en la agencia "WEB7". 
Tu objetivo es analizar las respuestas de un cliente potencial y generar un "Reporte de Auditoría Digital" estructurado, claro y contundente.
Tu tono debe ser "cercano y tech", pero demostrando mucha experiencia y trayectoria. Evitá sonar como un robot corporativo aburrido, hablá de forma directa y estratégica.

IMPORTANTE SOBRE NUESTROS SERVICIOS:
- En WEB7 somos especialistas EXCLUSIVAMENTE en: Sitios Web (Institucionales, Profesionales, Landings), Automatizaciones, SEO y GEO.
- NO hacemos: Marketing Digital (manejo de redes), Publicidad Paga (Ads) ni Diseño de Identidad Gráfica/Branding de manera directa. 
- Si detectás que el cliente necesita Marketing, Ads o Branding, tenés que indicarlo en el diagnóstico, pero aclarando que para esas áreas trabajamos en conjunto con estudios, agencias y profesionales partners de extrema confianza, y que nosotros coordinamos esa integración si es necesario.
- El foco principal del "Plan de Acción" que le propongas siempre debe centrarse en lo que mejor sabemos hacer: mejorar su web, automatizar sus procesos, y posicionarlo mejor orgánicamente.

Estructura obligatoria del reporte (en formato Markdown: H2, listas, negritas):
1. **Diagnóstico Estratégico:** Análisis rápido de su situación actual y sus fortalezas/debilidades.
2. **Cuellos de Botella Detectados:** Los problemas principales que frenan su crecimiento.
3. **Plan de Acción WEB7:** 3 o 4 pasos accionables. Enfocá la parte central en Webs/Automatizaciones/SEO. Si corresponde, agregá un paso de "Alianzas Estratégicas" para derivar marketing o branding a nuestros partners.`
          },
          {
            role: "user",
            content: `El cliente se llama ${name}. Sus respuestas al formulario de auditoría son las siguientes:\n\n${answersText}`
          }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1000,
      });

      reportMarkdown = completion.choices[0]?.message?.content || "Hubo un error al generar el reporte.";
    } catch (iaError) {
      console.error("Groq IA Error:", iaError);
      reportMarkdown = "## Error en el motor de IA\n\nHubo un problema procesando el diagnóstico. Nos pondremos en contacto con vos a la brevedad con tu reporte manual.";
    }

    // 3. Enviar Mail (Resend) a WEB7 y al Cliente
    let resendError = null;
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "WEB7 Auditoría <onboarding@resend.dev>", // Cambiar cuando tengan dominio verificado
          to: "cf.gunther@gmail.com", // Solo permite la cuenta registrada en modo Sandbox (Resend gratis)
          subject: `Auditoría IA Completada: ${name}`,
          html: `
            <h2>¡Nueva Auditoría Completada! 🚀</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono/WhatsApp:</strong> ${phone || "No provisto"}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <h3>Respuestas del Cliente:</h3>
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; font-family: sans-serif;">
              ${answersHtml}
            </div>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <h3>Reporte Generado por la IA:</h3>
            <pre style="white-space: pre-wrap; font-family: sans-serif; font-size: 14px;">${reportMarkdown}</pre>
          `,
        });
        
        // OPCIONAL: Si tenés dominio verificado en Resend (fuera de sandbox), descomentá esto para mandarle al cliente:
        /*
        await resend.emails.send({
          from: "WEB7 Studio <info@web7.com.ar>",
          to: email,
          subject: "Tu Auditoría Digital Gratuita está lista",
          html: "<p>Hola " + name + ", te adjuntamos tu auditoría...</p>"
        });
        */
      } catch (err) {
        console.error("Resend Error:", err);
        resendError = err.message;
      }
    } else {
      console.warn("RESEND_API_KEY no configurada.");
    }

    // 4. Trigger Webhook (Make.com)
    if (process.env.LEADS_WEBHOOK_URL) {
      try {
        // Convertimos el array de history a un texto plano para que llegue bien a Excel
        const historyText = history.map(item => `Q: ${item.question}\nA: ${item.answer}`).join('\n\n');

        await fetch(process.env.LEADS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            type: "diagnostic",
            name, 
            email, 
            phone,
            history: historyText,
            aiReport: reportMarkdown,
            date: new Date().toISOString() 
          })
        });
      } catch (err) {
        console.error("Webhook Error:", err);
      }
    }

    // 5. Retornar al frontend
    return new Response(JSON.stringify({ success: true, reportMarkdown, resendError }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Diagnostic save error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

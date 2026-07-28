# Especificación de Diseño: Optimización de Chat Consultivo, Captura de Leads y Sección "Nosotros" (Fase 1: Chat)

Este documento establece la arquitectura y detalles de implementación para mejorar el widget de chat, corregir la navegación del sitio e implementar el sistema de captación de prospectos (leads) por email. La sección "Nosotros" se implementará en una fase posterior.

---

## 1. Módulos y Arquitectura

```mermaid
graph TD
    User([Usuario en Web]) -->|Interactúa| Chat[Widget de Chat]
    Chat -->|Llama API| ChatAPI[api/chat.js]
    ChatAPI -->|Prompt Consultivo| Groq((Groq API))
    Chat -->|Envía Lead| LeadAPI[api/save-lead.js]
    LeadAPI -->|Notificación Resend| EmailOwner[Email de Carlos / Admin]
    LeadAPI -->|Webhook Opcional| Webhook[Google Sheets / CRM]
```

---

## 2. Componente 1: Flujo Conversacional y Captura de Leads

### A. Tono, Personalidad y Conocimientos (Backend - `api/chat.js`)
El prompt de sistema se actualizará para guiar al asistente como un **asesor de ventas digital de alto nivel** con las siguientes reglas:

1. **Conocimientos Generales y de Negocio**:
   - Amplia base conceptual sobre Marketing Digital (embudos de venta, pauta publicitaria en Meta Ads e Instagram, Google Ads, SEO técnico y SEO Local/GEO para mapas).
   - Digitalización de empresas y optimización de procesos (automatizaciones, integraciones CRM, WhatsApp API).
2. **Humildad y Honestidad (Sin ser sabelotodo)**:
   - Si el usuario pregunta algo técnico muy específico o fuera de su alcance, el bot debe ser transparente: *«Mirá, eso es un tema técnico bastante específico de [Tema]. Para no guitarrear, te sugiero que lo conversemos con Carlos y el equipo de desarrollo para darte la respuesta exacta. Si querés, contame de qué trata tu negocio y vemos cómo podemos enfocarlo...»*
   - Tono rioplatense natural, amigable, que agrega valor (2 o 3 tips útiles) sin dar sermones largos.

### B. Ideas de Leads Magnets (PDFs a enviar)
El bot ofrecerá enviar uno de los siguientes recursos PDF específicos según el tema de la charla:
1. **«Guía Práctica: De Web Fantasma a Máquina de Conversión»**: Para quienes quieren renovar su web o no logran ventas.
2. **«Checklist: Dominá Google Maps y Atraé Clientes Locales»**: Para comercios físicos, profesionales o empresas interesadas en posicionamiento local (SEO/GEO).
3. **«Mapa de Ruta: Automatización de Ventas 24/7 con IA»**: Para negocios interesados en automatizar WhatsApp, agendamiento de turnos e integraciones.
4. **«Manual Rápido: Embudos de Venta y Meta Ads que Convierten»**: Para consultas sobre campañas publicitarias de pauta en Instagram/Facebook.

#### Reglas de Acción para Captura de Leads:
Cuando el bot identifique el interés y el usuario le provea su email, añadirá al final de la respuesta de manera invisible para el usuario:
`[ACTION: save-lead:email@dominio.com|Nombre|TemaInteres]`

### C. Endpoint de Registro de Leads (`api/save-lead.js`) [NUEVO]
Se creará este endpoint serverless en Node.js que:
1. Valide el método `POST` y reciba `email`, `name`, `interest` e `history` del chat.
2. **Email de Notificación Directa (Resend)**:
   - Destinatario: Carlos Gunther / Admin (`info@web7.com.ar` y/o `cf.gunther@gmail.com`).
   - Envía los datos del contacto con el asunto: `[Nuevo Lead WEB7] - {Email} - Interesado en {Interest}`.
   - Incluye el nombre y los últimos mensajes del chat para contexto.
3. **Integración con Webhook (Opcional)**:
   - Si la variable de entorno `LEADS_WEBHOOK_URL` está configurada, enviará la información en JSON mediante un POST HTTP. Esto te permitirá conectarlo gratis a una hoja de cálculo de Google Sheets en Make.com o Zapier cuando lo desees.

---

## 3. Componente 2: Corrección de Navegación del Chat

### A. Comportamiento en el Cliente (`chat-widget.js`)
- **Remover Heurística de Palabras Clave**: Se eliminará el bloque de código que analiza palabras como "proyectos" o "método 7" y hace scroll automático al azar.
- **Acciones Estrictas**: Solo se realizará scroll o redirección cuando el bot incluya de forma explícita etiquetas de comandos de navegación válidas:
  - `[ACTION: scroll-proyectos]`
  - `[ACTION: scroll-metodo]`
  - `[ACTION: scroll-contacto]`
  - `[ACTION: redirect-on7]`
  - `[ACTION: redirect-proyectos]`
  - `[ACTION: redirect-contacto]`
- **Regla del Backend**: El prompt le prohibirá al bot usar estas etiquetas al azar en saludos, despedidas o respuestas genéricas. Solo las usará cuando el usuario pida explícitamente ver o ir a esas secciones.

---

## 4. Plan de Verificación

1. **Prueba de Navegación del Chat**:
   - Enviar un saludo genérico ("Hola, buenas") y verificar que responde sin desplazar la pantalla.
   - Preguntar *"¿Me mostrás sus trabajos?"* y verificar que se realiza el desplazamiento a la sección de proyectos.
2. **Prueba de Captura de Leads**:
   - Simular una consulta de marketing digital, aceptar la guía ofrecida y proporcionar el correo de prueba.
   - Verificar que se ejecuta el endpoint `api/save-lead.js` y que llega el correo de notificación con el lead estructurado.

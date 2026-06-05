# Especificación de Diseño: Envío de Historial de Chat por Email y Ajustes de Personalidad

Alineamos e integramos la funcionalidad de envío real de correos electrónicos a través de la plataforma **Resend** cuando el usuario solicita el historial de la conversación. Además, corregimos el comportamiento del asistente virtual de WEB7 para evitar la repetición artificial del nombre del usuario.

## Cambios Propuestos

### 1. Modificación de Personalidad y Acciones (`api/chat.js`)
*   **Corrección de Repetición de Nombre**: Se modificará el `SYSTEM_PROMPT` para instruir estrictamente al modelo que solo mencione el nombre del usuario en el saludo inicial de la conversación (Fase 2) y que, en los mensajes subsiguientes, se comunique de forma natural sin repetir el nombre constantemente.
*   **Nueva Acción del Chat**: Se agregará una regla en el prompt para que el LLM genere automáticamente el tag `[ACTION: send-chat-email:correo@dominio.com]` al final de su respuesta cuando el usuario le pida que envíe el historial por email.

### 2. Creación del Endpoint de Envío (`api/send-email.js`)
*   Se creará una función serverless (`api/send-email.js`) que:
    *   Reciba el destinatario (`email`) y el historial de mensajes (`history`).
    *   Instancie el cliente de `resend` utilizando la variable de entorno `RESEND_API_KEY`.
    *   Formatee el historial en una plantilla HTML premium con diseño oscuro (colores `#0a0a0a` de fondo, texto `#e5e5e5` y detalles en `#34D399` o `#DFFE02` según el tema).
    *   Envíe el correo usando la dirección configurada en `SENDER_EMAIL` (con fallback a `onboarding@resend.dev` si es necesario).

### 3. Intercepción y Disparo en el Cliente (`chat-widget.js`)
*   Al procesar el mensaje final del asistente, se buscará la presencia de la cadena `[ACTION: send-chat-email:...]`.
*   Si se detecta el tag:
    1.  Se extraerá la dirección de correo del usuario.
    2.  Se realizará una llamada HTTP asíncrona (`POST`) en segundo plano a `/api/send-email` enviando el correo y la lista completa de mensajes.
    3.  Se limpiará el tag para que no sea visible al usuario final en la burbuja de chat.

### 4. Dependencias (`package.json`)
*   Se añadirá `"resend": "^3.2.0"` a las dependencias del proyecto.

---

## Plan de Verificación

### Pruebas Manuales
1.  **Ajuste del Nombre**: Chatear con el asistente y verificar que salude por el nombre al principio, pero que no lo vuelva a repetir de forma repetitiva en los siguientes mensajes.
2.  **Petición de Historial**: Escribir en el chat: *"Por favor envíame el historial a [correo]*" y verificar en las herramientas de red de desarrollador del navegador que se dispare una petición `POST` a `/api/send-email`.
3.  **Bandeja de Entrada**: Comprobar en la bandeja de entrada del correo especificado que llegue la plantilla HTML con el historial formateado correctamente.

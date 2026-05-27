# Rediseño de la Página On7 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar la página `on7.html` para incorporar el nuevo copywriting, secciones estructurales (pérdida/ganancia, flujo de cliente, métricas) y la estética retro-digital con acentos teales y naranja de WEB7.

**Architecture:** Modificación de `on7.html` actualizando el marcado semántico HTML5, redefiniendo las clases CSS en la sección de estilos (`<style>`), y asegurando que las animaciones GSAP sigan enlazadas a los elementos correctos de forma interactiva y fluida.

**Tech Stack:** HTML5, CSS3, GSAP (GreenSock Animation Platform) + ScrollTrigger, Javascript.

---

### Task 1: Actualización de Variables CSS y Estilos Generales

**Files:**
- Modify: `on7.html:31-144`

- [ ] **Step 1: Modificar variables CSS y reglas globales**
Definir la variable `--orange` para los CTAs y ajustar las fuentes. Actualizar la sección de estilos de `on7.html` para agregar los siguientes tokens y selectores base:

```css
    :root {
      --bg: #0a0a0a;
      --bg-alt: #111;
      --bg-card: #141414;
      --text: #f5f5f5;
      --text-muted: #888;
      --accent: #34D399;
      --teal: #34D399;
      --teal-dim: rgba(52,211,153,0.08);
      --teal-glow: rgba(52,211,153,0.15);
      --orange: #FF6B00;
      --orange-hover: #E05E00;
      --red: #ef4444;
      --red-dim: rgba(239,68,68,0.08);
      --font-display: 'Doto', monospace;
      --font-body: 'Manrope', sans-serif;
      --font-alt: 'Space Grotesk', sans-serif;
    }
```

- [ ] **Step 2: Ajustar estilos de botones y CTAs**
Modificar la clase `.btn-primary` para usar la variable de color `--orange` (reservado para CTAs principales) y `.btn-secondary` para mantener bordes teales o grises sutiles.

```css
    .btn-primary {
      background: var(--orange);
      color: #0a0a0a;
      border: none;
      font-weight: 800;
    }
    .btn-primary:hover {
      background: var(--orange-hover);
      transform: scale(1.03);
    }
    .btn-secondary {
      background: transparent;
      color: var(--text);
      border: 1px solid rgba(255,255,255,0.15);
    }
    .btn-secondary:hover {
      border-color: var(--teal);
      color: var(--teal);
    }
```

---

### Task 2: Modificación de la Estructura HTML y Contenido de Secciones

**Files:**
- Modify: `on7.html:480-698`

- [ ] **Step 1: Reemplazar el Nav y el Hero**
Actualizar el nav con la marca `ON7 · by WEB7` y las nuevas secciones:
```html
  <!-- NAV -->
  <nav>
    <div class="nav-brand">
      <a href="on7.html" class="brand-on7">ON7</a>
      <span class="brand-by">by WEB7</span>
    </div>
    <ul class="nav-links">
      <li><a href="#como-funciona">Cómo funciona</a></li>
      <li><a href="#que-incluye">Qué incluye</a></li>
      <li><a href="#contacto">Contacto</a></li>
      <li><a href="contacto.html?producto=on7" class="nav-cta">Quiero On7 &rarr;</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <span class="label">On7 &middot; Atención inteligente</span>
    <h1>Tu negocio responde solo.<br>Incluso a las 3 de la mañana.</h1>
    <p class="subtext">Un agente conectado a tus herramientas. Atiende consultas, guía clientes y captura reservas sin que tengas que estar presente.</p>
    <div class="cta-group">
      <a href="contacto.html?producto=on7" class="btn btn-primary">Quiero On7 para mi negocio &rarr;</a>
      <a href="#como-funciona" class="btn btn-secondary">Ver cómo funciona &darr;</a>
    </div>
  </section>
```

- [ ] **Step 2: Actualizar el bloque del Problema**
Insertar el nuevo texto en la sección del problema:
```html
  <!-- EL PROBLEMA -->
  <section class="section">
    <span class="label">Por qué existe On7</span>
    <h2>Tener web no alcanza<br>si después no respondés.</h2>
    <p class="body-text">La mayoría de los negocios pierde clientes no por falta de producto sino por falta de respuesta.<br><br>Un cliente que no recibe respuesta en los primeros minutos busca en otro lado. Así de simple.<br><br>El problema no es la intención — es que no podés estar disponible todo el tiempo. On7 sí puede.</p>
  </section>
```

- [ ] **Step 3: Agregar la sección de Pérdida/Ganancia (Sin On7 vs Con On7)**
Añadir el marcado de dos columnas/tarjetas para ilustrar las pérdidas sin el bot y las ganancias con él:
```html
  <!-- EL COSTO REAL (PÉRDIDA / GANANCIA) -->
  <section class="section" id="costo-real">
    <span class="label">El costo real de no tenerlo</span>
    <h2>Cada día sin un agente<br>tiene un costo real.</h2>
    
    <div class="comparison-grid">
      <div class="comp-card loss">
        <h3>Sin On7 — lo que se pierde hoy</h3>
        <ul>
          <li><strong>Consultas perdidas de noche y los fines de semana:</strong> El cliente pregunta, no recibe respuesta y reserva en otro lugar.</li>
          <li><strong>Tiempo operativo drenado:</strong> Responder siempre las mismas preguntas consume horas que podrían dedicarse a atender mejor.</li>
          <li><strong>Reservas sin seguimiento:</strong> Un interesado que no confirmó hoy probablemente no va a confirmar mañana sin un empujón.</li>
          <li><strong>Agenda desorganizada:</strong> Sin validación automática de horarios, los solapamientos y errores son inevitables.</li>
          <li><strong>Dependencia de una sola persona:</strong> Si quien responde está ocupado o no está, el negocio queda mudo.</li>
        </ul>
      </div>
      
      <div class="comp-card gain">
        <h3>Con On7 activo</h3>
        <ul>
          <li>Ninguna consulta queda sin respuesta, a cualquier hora.</li>
          <li>El equipo se libera de tareas repetitivas y puede enfocarse en la atención de calidad.</li>
          <li>Las reservas se capturan, registran y confirman con datos completos y sin errores.</li>
          <li>Los clientes interesados reciben seguimiento automático hasta convertir.</li>
          <li>La agenda se gestiona sola, con reglas de disponibilidad y tiempos entre actividades.</li>
        </ul>
      </div>
    </div>
  </section>
```

Añadir los estilos para la rejilla de comparación CSS:
```css
    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 3rem;
    }
    .comp-card {
      background: var(--bg-card);
      border-radius: 12px;
      padding: 2.5rem;
      border: 1px solid #222;
    }
    .comp-card h3 {
      font-family: var(--font-alt);
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }
    .comp-card.loss {
      border-color: rgba(239, 68, 68, 0.25);
      background: linear-gradient(180deg, var(--bg-card) 0%, var(--red-dim) 100%);
    }
    .comp-card.loss h3 {
      color: var(--red);
    }
    .comp-card.loss ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .comp-card.loss li {
      position: relative;
      padding-left: 1.5rem;
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
    .comp-card.loss li::before {
      content: "—";
      position: absolute;
      left: 0;
      color: var(--red);
      font-weight: bold;
    }
    .comp-card.gain {
      border-color: rgba(52, 211, 153, 0.25);
      background: linear-gradient(180deg, var(--bg-card) 0%, var(--teal-dim) 100%);
    }
    .comp-card.gain h3 {
      color: var(--teal);
    }
    .comp-card.gain ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .comp-card.gain li {
      position: relative;
      padding-left: 1.5rem;
      font-size: 0.95rem;
      color: var(--text);
      line-height: 1.5;
    }
    .comp-card.gain li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--teal);
      font-weight: bold;
    }
    @media (max-width: 768px) {
      .comparison-grid { grid-template-columns: 1fr; }
    }
```

- [ ] **Step 4: Actualizar sección "Qué hace On7" con las 6 cards**
Actualizar las 6 cards con la información y capacidades redefinidas:
```html
  <section class="section" id="como-funciona">
    <span class="label">Cómo funciona</span>
    <h2>On7 no es un bot genérico.<br>Conoce tu negocio.</h2>
    <p class="body-text" style="margin-bottom: 3rem;">Antes de salir al aire, cargamos toda la información de tu negocio: productos, servicios, precios, horarios, preguntas frecuentes, condiciones. Eso es lo que On7 usa para responder. No respuestas automáticas genéricas — respuestas con la información real de tu negocio.</p>

    <div class="capabilities" id="que-incluye">
      <div class="cap-card">
        <h4>Responde 24/7</h4>
        <p>Atiende consultas frecuentes en WhatsApp e Instagram en cualquier horario, sin demoras.</p>
      </div>
      <div class="cap-card">
        <h4>Captura reservas</h4>
        <p>Recolecta datos del cliente, verifica disponibilidad y registra la pre-reserva automáticamente.</p>
      </div>
      <div class="cap-card">
        <h4>Envía recordatorios</h4>
        <p>Confirma reservas y envía recordatorios el día de la actividad. Sin intervención manual.</p>
      </div>
      <div class="cap-card">
        <h4>Deriva correctamente</h4>
        <p>Identifica consultas complejas y las pasa a un humano con todo el contexto de la conversación.</p>
      </div>
      <div class="cap-card">
        <h4>Recomienda y sugiere</h4>
        <p>Si el cliente no sabe qué necesita, On7 lo guía según el contexto de la conversación.</p>
      </div>
      <div class="cap-card">
        <h4>Registra todo</h4>
        <p>Cada conversación queda guardada. Datos de contacto, resumen, resultado de la interacción.</p>
      </div>
    </div>
  </section>
```

- [ ] **Step 5: Agregar sección "Flujo del Cliente" (Paso a paso vertical)**
Implementar la línea conectora y los 6 pasos:
```html
  <!-- FLUJO DEL CLIENTE -->
  <section class="section" id="flujo-cliente">
    <span class="label">Paso a paso</span>
    <h2>Así vive la experiencia<br>tu cliente.</h2>
    
    <div class="flow-steps">
      <div class="flow-line"></div>
      
      <div class="flow-step">
        <div class="flow-number">01</div>
        <div class="flow-content">
          <h4>El cliente escribe por WhatsApp o Instagram</h4>
          <p>On7 responde de inmediato con un saludo y un menú de opciones claro.</p>
        </div>
      </div>
      
      <div class="flow-step">
        <div class="flow-number">02</div>
        <div class="flow-content">
          <h4>On7 identifica qué busca</h4>
          <p>Entiende el tipo de consulta y orienta según el perfil del cliente: individual, grupo o empresa.</p>
        </div>
      </div>
      
      <div class="flow-step">
        <div class="flow-number">03</div>
        <div class="flow-content">
          <h4>Brinda información precisa</h4>
          <p>Precios, disponibilidad, qué incluye, cómo llegar — siempre con datos actualizados de tu negocio.</p>
        </div>
      </div>
      
      <div class="flow-step">
        <div class="flow-number">04</div>
        <div class="flow-content">
          <h4>Guía hacia la reserva o la acción</h4>
          <p>Recolecta los datos necesarios y valida disponibilidad en tiempo real.</p>
        </div>
      </div>
      
      <div class="flow-step">
        <div class="flow-number">05</div>
        <div class="flow-content">
          <h4>Confirma y notifica</h4>
          <p>Envía confirmación, información de ingreso y registra todo automáticamente.</p>
        </div>
      </div>
      
      <div class="flow-step">
        <div class="flow-number">06</div>
        <div class="flow-content">
          <h4>Seguimiento automático</h4>
          <p>Recordatorio el día de la actividad. Re-contacto a quienes consultaron pero no convirtieron.</p>
        </div>
      </div>
    </div>
  </section>
```

Añadir estilos para el flujo vertical con línea conectora:
```css
    .flow-steps {
      position: relative;
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    .flow-line {
      position: absolute;
      left: 28px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(180deg, var(--teal) 0%, rgba(255,255,255,0.05) 100%);
      z-index: 1;
    }
    .flow-step {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 2rem;
      align-items: flex-start;
      position: relative;
      z-index: 2;
    }
    .flow-number {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--bg-alt);
      border: 1px solid var(--teal);
      color: var(--teal);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 800;
      box-shadow: 0 0 15px rgba(52,211,153,0.15);
    }
    .flow-content {
      padding-top: 0.75rem;
    }
    .flow-content h4 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.5rem;
    }
    .flow-content p {
      font-size: 0.95rem;
      color: var(--text-muted);
      line-height: 1.6;
    }
```

- [ ] **Step 6: Actualizar Integraciones**
Alinear con los canales e integraciones descritas (WhatsApp, Instagram, Google Calendar, Sheets, Gmail, Docs, Chatwoot, APIs):
```html
  <!-- INTEGRACIONES -->
  <section class="section">
    <span class="label">Se conecta con lo que ya usás</span>
    <h2>No reemplaza tus herramientas.<br>Se integra con ellas.</h2>
    
    <div class="sectors" style="margin-top: 2rem; margin-bottom: 2rem;">
      <h4 style="font-family: var(--font-alt); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); margin-bottom: 1rem;">Canales Activos</h4>
      <div class="sector-tags">
        <span class="sector-tag" style="color: var(--teal); border-color: var(--teal);">WhatsApp</span>
        <span class="sector-tag" style="color: var(--teal); border-color: var(--teal);">Instagram</span>
      </div>
    </div>

    <div class="integrations">
      <div class="int-card">
        <h4>Google Calendar</h4>
        <p>Reservas, turnos y llamadas directamente en tu calendario.</p>
      </div>
      <div class="int-card">
        <h4>Google Sheets</h4>
        <p>Datos de clientes y consultas en tu planilla, al instante.</p>
      </div>
      <div class="int-card">
        <h4>Gmail</h4>
        <p>Resúmenes, alertas y notificaciones en tu correo.</p>
      </div>
      <div class="int-card">
        <h4>Google Docs</h4>
        <p>Consulta de documentos internos para responder con precisión.</p>
      </div>
      <div class="int-card">
        <h4>Chatwoot</h4>
        <p>Panel de conversaciones centralizado para tu equipo.</p>
      </div>
      <div class="int-card">
        <h4>Otros sistemas</h4>
        <p>Conexión con sistemas externos mediante APIs si tu negocio lo requiere.</p>
      </div>
    </div>
  </section>
```

- [ ] **Step 7: Actualizar Panel de Control**
Actualizar el contenido del bloque de panel de control:
```html
  <!-- PANEL DE CONTROL -->
  <section class="section">
    <span class="label">Vos siempre en control</span>
    <h2>Automatizado no significa<br>que perdés el control.</h2>
    <p class="body-text">On7 incluye un panel de administración desde donde podés:</p>
    <div class="panel-features">
      <div class="panel-feature">Ver todas las conversaciones en tiempo real</div>
      <div class="panel-feature">Tomar el control manual de cualquier chat cuando querés</div>
      <div class="panel-feature">Revisar el historial completo de cada cliente</div>
      <div class="panel-feature">Ver qué clientes están pendientes de seguimiento</div>
      <div class="panel-feature">Consultar reservas, pedidos y consultas generadas</div>
    </div>
    <div class="panel-resumen">
      <h4>Resumen diario por email</h4>
      <p>Cada mañana recibís un resumen con: conversaciones del día anterior, reservas generadas, clientes que requieren seguimiento e incidencias detectadas.</p>
    </div>
    <p class="highlight-phrase">On7 trabaja solo. Vos decidís cuándo intervenir.</p>
  </section>
```

- [ ] **Step 8: Agregar la sección de Métricas de Impacto**
Colocar la sección de impacto justo antes de la sección "Para quién es" con el grid correspondiente:
```html
  <!-- MÉTRICAS DE IMPACTO -->
  <section class="section" id="impacto">
    <span class="label">Impacto esperado</span>
    <h2>Resultados para tu negocio.</h2>
    
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-val">24/7</div>
        <div class="metric-desc">Atención sin interrupciones</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">-80%</div>
        <div class="metric-desc">Tiempo en consultas repetitivas</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">0</div>
        <div class="metric-desc">Consultas sin respuesta</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">+Reservas</div>
        <div class="metric-desc">Mayor conversión con seguimiento automático</div>
      </div>
    </div>
  </section>
```

Añadir estilos para las métricas:
```css
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
      text-align: center;
    }
    .metric-card {
      background: var(--bg-card);
      border: 1px solid #222;
      border-radius: 12px;
      padding: 2.5rem 1.5rem;
    }
    .metric-val {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
      font-weight: 800;
      color: var(--teal);
      margin-bottom: 0.75rem;
    }
    .metric-desc {
      font-family: var(--font-alt);
      font-size: 0.85rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.4;
    }
    @media (max-width: 1024px) {
      .metrics-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .metrics-grid { grid-template-columns: 1fr; }
    }
```

- [ ] **Step 9: Actualizar "Para quién es"**
Actualizar el contenido del bloque de audiencias y sectores:
```html
  <!-- PARA QUIÉN ES -->
  <section class="section">
    <span class="label">On7 es para vos si...</span>
    <div class="for-you-list">
      <div class="for-you-item">Recibís consultas por WhatsApp o Instagram y no siempre podés responder rápido</div>
      <div class="for-you-item">Tu equipo pierde tiempo respondiendo siempre las mismas preguntas</div>
      <div class="for-you-item">Perdés reservas o pedidos por no tener atención fuera del horario comercial</div>
      <div class="for-you-item">Querés saber qué consultan tus clientes sin revisar chat por chat</div>
      <div class="for-you-item">Necesitás escalar la atención sin contratar más personal</div>
    </div>
    <div class="sectors">
      <h4>Sectores donde ya funciona</h4>
      <div class="sector-tags">
        <span class="sector-tag">Gastronomía</span>
        <span class="sector-tag">Hotelería</span>
        <span class="sector-tag">Comercios</span>
        <span class="sector-tag">Servicios profesionales</span>
        <span class="sector-tag">Salud</span>
        <span class="sector-tag">Turismo</span>
        <span class="sector-tag">Retail</span>
      </div>
    </div>
  </section>
```

- [ ] **Step 10: Actualizar "Proceso de Implementación"**
Actualizar el bloque de pasos de implementación del producto:
```html
  <!-- PROCESO DE IMPLEMENTACIÓN -->
  <section class="section" id="proceso">
    <span class="label">Cómo arrancamos</span>
    <h2>Paso a paso para tener IA<br>en tu negocio — en 4 semanas.</h2>
    <p class="body-text" style="margin-bottom: 3rem;">Un proceso claro y ordenado para que tu negocio empiece a atender mejor sin complicaciones.</p>
    
    <div class="steps">
      <div class="step">
        <div class="step-number">01</div>
        <div class="step-content">
          <h4>Estudio del proceso comercial (5 días)</h4>
          <p>Analizamos tu proceso comercial actual para entender exactamente qué debe hacer On7 y cómo replicar el trabajo de un humano de forma más rápida y eficiente.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">02</div>
        <div class="step-content">
          <h4>Desarrollo del MVP (10 días)</h4>
          <p>Construimos la primera versión funcional del agente, las automatizaciones necesarias y el panel de gestión adaptado a tu negocio. Todo integrado con WhatsApp, Instagram o Facebook.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">03</div>
        <div class="step-content">
          <h4>Puesta a punto (15 días)</h4>
          <p>Testeamos y ajustamos el comportamiento del agente para que brinde una atención impecable. On7 sale al aire cuando está listo.</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 11: Actualizar Cierre / CTA y Footer**
Actualizar el bloque final utilizando el WhatsApp real (`https://wa.me/5493764000000`):
```html
  <!-- CIERRE -->
  <section class="cierre" id="contacto">
    <h2>Tu negocio no debería<br>depender de que estés disponible.</h2>
    <p class="body-text">On7 es el primer producto de Lab7 — el laboratorio de WEB7 donde construimos herramientas que resuelven problemas reales de negocios reales. Contanos sobre tu negocio y te mostramos cómo quedaría On7 implementado para tu caso específico.</p>
    <div class="cta-group">
      <a href="contacto.html?producto=on7" class="btn btn-primary">Quiero On7 &rarr;</a>
      <a href="https://wa.me/5493764000000" target="_blank" rel="noopener" class="btn btn-secondary">Hablar con WEB7 por WhatsApp &rarr;</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p class="footer-brand-on7">On7 es un producto de Lab7 &middot; WEB7</p>
    <a href="index.html" class="footer-back">&rarr; Volver a WEB7</a>
  </footer>
```

---

### Task 3: Verificación, Compilaciones y Despliegue

**Files:**
- Test: `on7.html`

- [ ] **Step 1: Realizar test de sintaxis HTML**
Inspeccionar que las etiquetas HTML estén correctamente balanceadas y no falten cierres de estilo o scripts.

- [ ] **Step 2: Crear commit de los cambios locales**
Ejecutar:
```bash
git add on7.html
git commit -m "design: rediseñar la landing de on7 con nuevo copywriting y bloques visuales"
```

- [ ] **Step 3: Desplegar a producción en Vercel**
Ejecutar: `npx vercel --prod`
Esperado: Aliased: `https://web7-studio.vercel.app/on7.html`.

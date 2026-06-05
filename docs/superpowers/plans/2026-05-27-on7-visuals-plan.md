# Mejoras Visuales de ON7 (Scroll Reveal y Detalles Pixel) Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar el efecto de Scroll Reveal en el bloque de texto de "El Problema" en `on7.html` e incorporar las decoraciones de píxeles flotantes (SVGs e interactividad) idénticas a la home de WEB7.

**Architecture:** Modificar `on7.html` inyectando las clases CSS de pixel-deco y reveal-text, convirtiendo los párrafos de texto en spans dinámicos y añadiendo los correspondientes triggers de GSAP ScrollTrigger para lograr los efectos de revelado palabra por palabra y flotación parallax de los píxeles.

**Tech Stack:** HTML5, CSS3, GSAP + ScrollTrigger.

---

### Task 1: CSS para Scroll Reveal y Pixel Decos en `on7.html`

**Files:**
- Modify: `on7.html` (sección `<style>`)

- [ ] **Step 1: Agregar estilos para `.reveal-text` y `.pixel-deco`**
Inyectar las siguientes reglas de CSS al final del tag `<style>` en `on7.html` (alrededor de la línea 660, antes del cierre `</style>`):

```css
    /* Scroll-reveal text block (sirnik style) */
    .reveal-text {
      font-family: var(--font-body);
      font-size: clamp(1.4rem, 3.2vw, 2.5rem);
      font-weight: 600;
      line-height: 1.4;
      max-width: 1000px;
      margin-top: 2rem;
    }
    .reveal-text .r-word {
      display: inline-block;
      color: rgba(255,255,255,0.12);
      transition: color 0.1s;
    }
    .reveal-text .r-word.active {
      color: var(--text);
    }
    .reveal-text .r-word.accent {
      color: rgba(52,211,153,0.15);
    }
    .reveal-text .r-word.accent.active {
      color: var(--accent);
    }

    /* Pixel decorations */
    .pixel-deco {
      position: absolute;
      pointer-events: none;
      z-index: 2;
      will-change: transform, opacity;
    }
    .pixel-deco img {
      display: block;
      width: 100%;
      height: auto;
    }
    .pixel-deco--grid {
      opacity: 0;
      z-index: 0;
    }
    .pixel-deco--grid svg {
      width: 100%;
      height: auto;
    }
    .pixel-deco--grid svg path {
      stroke: rgba(255,255,255,0.06);
    }
    @media (max-width: 1024px) {
      .pixel-deco { transform: scale(0.6) !important; }
    }
    @media (max-width: 768px) {
      .pixel-deco { display: none !important; }
    }
```

---

### Task 2: Markup HTML de Pixel Decos y Estructura Diferencial

**Files:**
- Modify: `on7.html` (cuerpo HTML)

- [ ] **Step 1: Modificar la sección Hero para incluir decoraciones pixel**
Agregar los elementos `.pixel-deco` y el `.pixel-deco--grid` dentro de la sección `.hero` en `on7.html`:

```html
  <!-- HERO -->
  <section class="hero" id="hero" style="position: relative;">
    <!-- Pixel decorations -->
    <div class="pixel-deco" style="top: 30%; right: 5%; width: 130px; opacity: 0;" data-pixel="hero-mosaic">
      <img src="assets/Group 1321314662.svg" alt="" loading="lazy">
    </div>
    <div class="pixel-deco" style="bottom: 20%; right: 8%; width: 66px; opacity: 0;" data-pixel="hero-sm">
      <img src="assets/Group 1321314648.svg" alt="" loading="lazy">
    </div>
    <div class="pixel-deco pixel-deco--grid" style="bottom: 5%; right: 2%; width: 304px;" data-pixel-grid>
      <svg width="304" height="93" viewBox="0 0 304 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M303.021 61.6973L303.021 30.5215L273 30.5215L273 61.6973L303.021 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M273 30.5212L273 0.5L241.824 0.499999L241.824 30.5212L273 30.5212Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M273 91.7185L273 61.6973L241.824 61.6973L241.824 91.7185L273 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M241.824 61.6973L241.824 30.5215L211.803 30.5215L211.803 61.6973L241.824 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M241.824 91.7185L241.824 61.6973L211.803 61.6973L211.803 91.7185L241.824 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M211.803 91.7185L211.803 61.6973L181.782 61.6973L181.782 91.7185L211.803 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M181.782 30.5212L181.782 0.5L151.761 0.499999L151.761 30.5212L181.782 30.5212Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M181.782 91.7185L181.782 61.6973L151.761 61.6973L151.761 91.7185L181.782 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M151.761 61.6973L151.761 30.5215L121.74 30.5215L121.74 61.6973L151.761 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M151.761 91.7185L151.761 61.6973L121.74 61.6973L121.74 91.7185L151.761 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M91.7187 61.6973L91.7188 30.5215L61.6976 30.5215L61.6976 61.6973L91.7187 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M61.6973 61.6973L61.6973 30.5215L30.5214 30.5215L30.5214 61.6973L61.6973 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M61.6973 91.7185L61.6973 61.6973L30.5214 61.6973L30.5214 91.7185L61.6973 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M30.5215 91.7185L30.5215 61.6973L0.500301 61.6973L0.5003 91.7185L30.5215 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
      </svg>
    </div>

    <span class="label">On7 &middot; Atención inteligente</span>
    ...
```

- [ ] **Step 2: Modificar la sección El Problema para usar `.reveal-text` y decoraciones**
Agregar la clase `.diferencial` a la sección del problema y reemplazar el párrafo `<p class="body-text">` por los `div` con `data-reveal-text` y decoraciones:

```html
  <!-- EL PROBLEMA -->
  <section class="section diferencial" id="problema" style="position: relative;">
    <!-- Pixel decorations -->
    <div class="pixel-deco" style="top: 8%; right: 6%; width: 131px; opacity: 0;" data-pixel="section">
      <img src="assets/Group 1321314649.svg" alt="" loading="lazy">
    </div>
    <div class="pixel-deco" style="bottom: 12%; right: 4%; width: 100px; opacity: 0;" data-pixel="section">
      <img src="assets/Group 1321314652.svg" alt="" loading="lazy">
    </div>
    <div class="pixel-deco" style="top: 50%; right: 15%; width: 33px; opacity: 0;" data-pixel="section-dot">
      <img src="assets/pixel-dot.svg" alt="" loading="lazy">
    </div>

    <span class="label">Por qué existe On7</span>
    <h2>Tener web no alcanza<br>si después no respondés.</h2>
    
    <div class="reveal-text" data-reveal-text>La mayoría de los negocios pierde clientes no por falta de producto sino por falta de respuesta.</div>
    <div class="reveal-text" data-reveal-text style="margin-top: 2rem;">Un cliente que no recibe respuesta en los primeros minutos busca en otro lado. Así de simple.</div>
    <div class="reveal-text" data-reveal-text data-accent="On7 sí puede." style="margin-top: 2rem;">El problema no es la intención — es que no podés estar disponible todo el tiempo. On7 sí puede.</div>
  </section>
```

- [ ] **Step 3: Agregar decoraciones pixel al Cierre**
Agregar decoraciones pixel dentro de la sección `.cierre` para darle coherencia:

```html
  <!-- CIERRE -->
  <section class="cierre" id="contacto" style="position: relative;">
    <div class="pixel-deco" style="top: 10%; left: 5%; width: 66px; opacity: 0;" data-pixel="section">
      <img src="assets/Group 1321314648.svg" alt="" loading="lazy">
    </div>
    <div class="pixel-deco pixel-deco--grid" style="bottom: 15%; right: 2%; width: 240px;" data-pixel-grid>
      <svg width="240" height="93" viewBox="0 0 240 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M239.021 61.6973L239.021 30.5215L209 30.5215L209 61.6973L239.021 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M209 30.5212L209 0.5L177.824 0.499999L177.824 30.5212L209 30.5212Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M209 91.7185L209 61.6973L177.824 61.6973L177.824 91.7185L209 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M177.824 61.6973L177.824 30.5215L147.803 30.5215L147.803 61.6973L177.824 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M177.824 91.7185L177.824 61.6973L147.803 61.6973L147.803 91.7185L177.824 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M147.803 91.7185L147.803 61.6973L117.782 61.6973L117.782 91.7185L147.803 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M117.782 30.5212L117.782 0.5L87.761 0.499999L87.761 30.5212L117.782 30.5212Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M117.782 91.7185L117.782 61.6973L87.761 61.6973L87.761 91.7185L117.782 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M87.761 61.6973L87.761 30.5215L57.74 30.5215L57.74 61.6973L87.761 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M87.761 91.7185L87.761 61.6973L57.74 61.6973L57.74 91.7185L87.761 91.7185Z" stroke="currentColor" stroke-miterlimit="10"/>
        <path d="M27.7187 61.6973L27.7188 30.5215L0 30.5215L0 61.6973L27.7187 61.6973Z" stroke="currentColor" stroke-miterlimit="10"/>
      </svg>
    </div>
    
    <h2>Tu negocio no debería...</h2>
```

---

### Task 3: Javascript para animar Scroll Reveal y Pixel Decos

**Files:**
- Modify: `on7.html` (sección `<script>`)

- [ ] **Step 1: Agregar el bloque de inicialización y animación de pixel-deco y reveal-text**
Agregar las funciones helper y timelines de GSAP al final del bloque de script de `on7.html`:

```javascript
    // ═══════════════════════════════════════
    // SCROLL-REVEAL TEXT (sirnik style)
    // ═══════════════════════════════════════
    function prepareRevealBlock(block) {
      const accentPhrase = block.dataset.accent || '';
      const accentWords = accentPhrase.split(/\s+/).filter(w => w.length > 0);
      const text = block.textContent;
      block.innerHTML = '';
      const words = text.split(/\s+/).filter(w => w.length > 0);
      let accentIdx = 0;
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.classList.add('r-word');
        if (accentIdx < accentWords.length && word.replace(/[.,!?]/g, '') === accentWords[accentIdx].replace(/[.,!?]/g, '')) {
          span.classList.add('accent');
          accentIdx++;
        }
        span.textContent = word;
        block.appendChild(span);
        if (i < words.length - 1) block.appendChild(document.createTextNode(' '));
      });
      return block.querySelectorAll('.r-word');
    }

    // Animación secuencial de revelado en la sección diferencial
    const difSection = document.querySelector('.diferencial');
    if (difSection) {
      const difBlocks = difSection.querySelectorAll('[data-reveal-text]');
      const difBlockData = [];
      difBlocks.forEach(block => {
        const rWords = prepareRevealBlock(block);
        difBlockData.push({ block, rWords });
      });

      const totalSegments = difBlockData.length;

      ScrollTrigger.create({
        trigger: difSection,
        start: 'top 50%',
        end: 'bottom 20%',
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          difBlockData.forEach((data, bi) => {
            const segStart = bi / totalSegments;
            const segEnd = (bi + 1) / totalSegments;
            const segProgress = Math.max(0, Math.min(1, (p - segStart) / (segEnd - segStart)));
            data.rWords.forEach((w, wi) => {
              w.classList.toggle('active', segProgress > wi / data.rWords.length);
            });
          });
        },
      });
    }

    // ═══════════════════════════════════════
    // PIXEL DECORATIONS — ANIMATIONS
    // ═══════════════════════════════════════

    // A) Hero pixel elements: stagger reveal on load
    const heroPixels = gsap.utils.toArray('.hero [data-pixel^="hero"]');
    gsap.fromTo(heroPixels, 
      { opacity: 0, scale: 0.8 },
      { opacity: (i) => i === 0 ? 0.7 : 0.5, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.8 }
    );

    // B) Hero grid outline: stroke draw on load
    const heroGrid = document.querySelector('.hero [data-pixel-grid]');
    if (heroGrid) {
      const heroPaths = heroGrid.querySelectorAll('path');
      heroPaths.forEach(p => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
      });
      gsap.to(heroGrid, { opacity: 0.4, duration: 0.5, delay: 0.6 });
      gsap.to(heroPaths, {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.06,
        ease: 'power2.inOut',
        delay: 0.8
      });
    }

    // C) Section pixel elements: fade-in on scroll entry
    document.querySelectorAll('[data-pixel="section"]').forEach((el, i) => {
      const parent = el.closest('section') || el.closest('.diferencial') || el.parentElement;

      gsap.to(el, {
        opacity: (i % 3 === 0) ? 0.7 : 0.5,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: parent,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // D) Single pixel dots: fade-in + continuous pulse
    document.querySelectorAll('[data-pixel="section-dot"]').forEach(el => {
      const parent = el.closest('section') || el.closest('.diferencial') || el.parentElement;

      gsap.to(el, {
        opacity: 0.6,
        duration: 0.6,
        scrollTrigger: {
          trigger: parent,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Continuous pulse
      gsap.to(el, {
        scale: 1.4,
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    });

    // E) Parallax float: different scroll speeds per element
    document.querySelectorAll('.pixel-deco:not(.pixel-deco--grid)').forEach((el, i) => {
      const speed = ((i % 4) + 1) * 30;
      const direction = i % 2 === 0 ? -1 : 1;
      const parent = el.closest('section') || el.closest('.diferencial') || el.parentElement;

      gsap.to(el, {
        y: `${speed * direction}`,
        ease: 'none',
        scrollTrigger: {
          trigger: parent,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });

    // F) Grid outlines in cierre/footer: stroke draw animation
    document.querySelectorAll('.cierre [data-pixel-grid], footer [data-pixel-grid]').forEach(el => {
      const paths = el.querySelectorAll('path');
      paths.forEach(p => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
      });

      const parent = el.closest('.cierre') || el.closest('footer');

      const gridTl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      gridTl
        .to(el, { opacity: 0.6, duration: 0.4 })
        .to(paths, {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: 'power2.inOut',
        }, '-=0.2');
    });

    // G) Subtle vertical float on hero pixel decos (no rotation)
    document.querySelectorAll('.hero [data-pixel^="hero"]').forEach((el, i) => {
      gsap.to(el, {
        y: -15,
        duration: 5 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5,
      });
    });
```

---

### Task 4: Despliegue y Verificación en Vercel

- [ ] **Step 1: Realizar test de sintaxis HTML en on7.html**
- [ ] **Step 2: Commitear cambios locales**
Ejecutar:
```bash
git add on7.html
git commit -m "design(on7): agregar scroll reveal a descripcion de problema y decoraciones pixel de marca"
```
- [ ] **Step 3: Desplegar a Vercel producción**
Ejecutar: `npx vercel --prod`

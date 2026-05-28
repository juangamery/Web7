# Especificación de Diseño: Animaciones Avanzadas y Arte Pixel en ON7

**Fecha:** 2026-05-28  
**Autor:** Antigravity AI  
**Objetivo:** Elevar el nivel de interactividad y dinamismo en `on7.html` incorporando efectos premium de GSAP y ScrollTrigger, junto con íconos vectoriales pixel-art de `pixelarticons.com` para dar personalidad y fluidez técnica.

---

## 1. Cambios de Estructura e Iconografía

### Reemplazo de Íconos en las Tarjetas de Capacidades
Reemplazar los íconos de imagen actuales por SVG inline en estilo retro pixel-art de 24x24px para permitir transiciones de escala y color fluidas.

*   **Atención 24/7 (Reloj):**
    ```xml
    <svg class="pixel-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" focusable="false">
      <path d="M9 2h6v2H9V2zM5 5h14v2H5V5zm-2 4h18v6H3V9zm2 8h14v2H5v-2zm4 2h6v2H9v-2zm2-9h2v4h4v2h-6V10z"/>
    </svg>
    ```
*   **Captura reservas (Calendario):**
    ```xml
    <svg class="pixel-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" focusable="false">
      <path d="M5 2h2v2H5V2zm12 0h2v2h-2V2zM3 5h18v2H3V5zm0 4h18v11H3V9zm4 4h2v2H7v-2zm6 0h2v2h-2v-2zm-6 4h2v2H7v-2zm6 0h2v2h-2v-2z"/>
    </svg>
    ```
*   **Envía recordatorios (Campana):**
    ```xml
    <svg class="pixel-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" focusable="false">
      <path d="M11 2h2v2h-2V2zm-4 4h10v2H7V6zm-2 4h14v7H5v-7zm-2 8h18v2H3v-2zm8 4h2v2h-2v-2z"/>
    </svg>
    ```
*   **Deriva correctamente (Branch):**
    ```xml
    <svg class="pixel-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" focusable="false">
      <path d="M15 2h7v7h-2V5.4L13.4 12l6.6 6.6V15h2v7h-7v-2h3.6L12 13.4 5.4 20H2v-2h2.6l6-6-6-6H2V4h3.4L12 10.6 18.6 4H15V2z"/>
    </svg>
    ```
*   **Recomienda y sugiere (Lamparita):**
    ```xml
    <svg class="pixel-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" focusable="false">
      <path d="M9 2h6v2H9V2zm-3 4h12v2H6V6zm-2 4h16v4H4v-4zm2 6h12v2H6v-2zm3 2h6v2H9v-2zm1 2h4v2h-4v-2z"/>
    </svg>
    ```
*   **Registra todo (Database):**
    ```xml
    <svg class="pixel-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" focusable="false">
      <path d="M3 3h18v5H3V3zm0 7h18v5H3v-5zm0 7h18v4H3v-4zM6 5h2v2H6V5zm0 7h2v2H6v-2zm0 7h2v2H6v-2z"/>
    </svg>
    ```

---

## 2. Plan de Animaciones por GSAP

### A) Hero Reveal con Clip-Path
Para lograr que el título se deslice limpiamente de abajo hacia arriba desde una línea invisible:
1.  **HTML:** Envolver cada línea del título `<h1>` en un contenedor con clase `.reveal-container`.
    ```html
    <h1>
      <div class="reveal-container"><span>Tu negocio responde solo.</span></div>
      <div class="reveal-container"><span>Incluso a las 3 de la mañana.</span></div>
    </h1>
    ```
2.  **CSS:**
    ```css
    .reveal-container {
      overflow: hidden;
      display: block;
    }
    .reveal-container span {
      display: inline-block;
      transform: translateY(100%);
      will-change: transform;
    }
    ```
3.  **JavaScript (GSAP):**
    ```javascript
    gsap.to('.reveal-container span', {
      translateY: '0%',
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.4
    });
    ```

### B) Efecto 3D Tilt Interactivo (Cards de Capacidades + Pérdida/Ganancia)
Agregar profundidad física a las tarjetas en pantallas de escritorio (`>= 1024px`):
1.  **CSS:**
    ```css
    .tilt-card {
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    .tilt-card-inner {
      transform: translateZ(20px);
    }
    ```
2.  **JavaScript:**
    Al mover el cursor por encima, calcular la diferencia entre la coordenada X/Y del mouse y el centro del rectángulo de la tarjeta, y rotar entre `-8deg` y `+8deg`:
    ```javascript
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / (rect.height / 2)) * 8;
        const rotateY = (x / (rect.width / 2)) * 8;
        
        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.3
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: 'power2.out',
          duration: 0.5
        });
      });
    });
    ```

### C) Línea Conectora Dinámica en la sección Paso a Paso
1.  **CSS:** Reemplazar el borde o línea estática por un elemento sutil absoluto `.step-connector-line`.
    ```css
    .step-connector-line {
      position: absolute;
      left: 24px; top: 0; bottom: 0; width: 2px;
      background: rgba(255,255,255,0.06);
      transform-origin: top;
      z-index: 1;
    }
    .step-connector-line-progress {
      position: absolute;
      left: 24px; top: 0; bottom: 0; width: 2px;
      background: var(--accent);
      transform-origin: top;
      transform: scaleY(0);
      z-index: 1;
      will-change: transform;
    }
    ```
2.  **JavaScript:** Animar la escala vertical `scaleY` basado en el scroll exacto de la sección:
    ```javascript
    gsap.to('.step-connector-line-progress', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#flujo-cliente',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: true
      }
    });
    ```

### D) Contadores de Métricas
Animar los valores en `#impacto` de forma numérica:
1.  **HTML:** Definir los valores de las métricas en un atributo `data-target` y empezar el texto en `0`.
    ```html
    <div class="metric-num" data-target="24">0</div>
    ```
2.  **JavaScript:**
    ```javascript
    document.querySelectorAll('.metric-num').forEach(el => {
      const targetVal = parseFloat(el.dataset.target);
      const isPercentage = el.textContent.includes('%') || el.dataset.target.includes('%') || false; // adapt check
      
      gsap.to(el, {
        innerText: targetVal,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: function() {
          // Mantener formatos o signos adicionales si fuesen necesarios
        }
      });
    });
    ```

---

## 3. Criterios de Aceptación y QA
1.  **Fluidez y Rendimiento:** Toda animación interactiva pesada (3D tilts y scrolltriggers) debe estar envuelta en `gsap.matchMedia("(min-width: 768px)")` para evitar consumo en celulares.
2.  **Compatibilidad A11y:** Los SVGs inline deben tener `aria-hidden="true"` y los textos con clip-path no deben alterar el orden semántico ni el rastreo de lectores de pantalla.
3.  **Sin consola roja:** No deben existir errores de tipo 404 ni excepciones de GSAP no registradas en consola.

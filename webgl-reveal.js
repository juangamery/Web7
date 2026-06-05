// webgl-reveal.js (Canvas 2D Pixel Reveal Engine)
// Replaces the heavy, laggy fixed-canvas WebGL with local Canvas 2D elements.
// This preserves the exact same pixelated wipe effect while eliminating scroll lag and 3D tilt desync.

(function() {
  "use strict";

  // Inyectar estilos CSS para las imágenes y canvas local
  const style = document.createElement('style');
  style.textContent = `
    .card-img-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9 !important;
      overflow: hidden;
      flex-shrink: 0;
    }
    .card-img-wrapper img.card-img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
      transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) !important;
      transform-origin: center center;
    }
    .card-img-wrapper .pixel-reveal-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) !important;
      transform-origin: center center;
    }
    .proyecto-card:hover img.card-img,
    .project-card:hover img.card-img,
    .proyecto-card:hover .pixel-reveal-canvas,
    .project-card:hover .pixel-reveal-canvas {
      transform: scale(1.03);
    }
  `;
  document.head.appendChild(style);

  class PixelReveal {
    constructor(img) {
      this.img = img;
      this.parentCard = img.closest('.proyecto-card') || img.closest('.project-card');
      if (!this.parentCard) return;

      this.initWrapper();
      this.initCanvas();
      this.initAnimations();
    }

    initWrapper() {
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'card-img-wrapper';

      const cardStyle = window.getComputedStyle(this.parentCard);
      Object.assign(this.wrapper.style, {
        borderTopLeftRadius: cardStyle.borderTopLeftRadius || '12px',
        borderTopRightRadius: cardStyle.borderTopRightRadius || '12px'
      });

      this.img.parentNode.insertBefore(this.wrapper, this.img);
      this.wrapper.appendChild(this.img);
    }

    initCanvas() {
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'pixel-reveal-canvas';
      
      Object.assign(this.canvas.style, {
        opacity: '0' // Iniciar oculto hasta que se comience a dibujar
      });
      
      this.wrapper.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
    }

    draw(progress) {
      if (!this.img.complete || this.img.naturalWidth === 0) return;

      const w = this.wrapper.offsetWidth || 300;
      const h = this.wrapper.offsetHeight || 168.75;

      if (this.canvas.width !== w || this.canvas.height !== h) {
        this.canvas.width = w;
        this.canvas.height = h;
      }

      this.ctx.clearRect(0, 0, w, h);

      if (progress >= 1) {
        // Transición completada: hacer la imagen DOM visible y detener renderizado en canvas
        this.img.style.opacity = '1';
        this.canvas.style.opacity = '0';
        return;
      }

      // Ocultar imagen de forma segura (0.01) para mantener el layout activo
      this.img.style.opacity = '0.01';
      this.canvas.style.opacity = '1';

      const cols = 20; // 20 columnas de bloques pixelados
      const blockSize = w / cols;
      const rows = Math.ceil(h / blockSize);

      const edgeHeight = 0.2; // Altura del borde de transición
      const progressFront = progress * (1 + 2 * edgeHeight) - edgeHeight;

      // Calcular object-fit: cover en canvas
      const sAspect = this.img.naturalWidth / this.img.naturalHeight;
      const dAspect = w / h;

      let sw, sh, sx, sy;
      if (sAspect > dAspect) {
        // Imagen de origen es más ancha: recortar horizontalmente
        sh = this.img.naturalHeight;
        sw = sh * dAspect;
        sx = (this.img.naturalWidth - sw) / 2;
        sy = 0;
      } else {
        // Imagen de origen es más alta (como oda-vinoteca.jpg): recortar verticalmente
        sw = this.img.naturalWidth;
        sh = sw / dAspect;
        sx = 0;
        sy = (this.img.naturalHeight - sh) / 2;
      }

      // Generador pseudo-aleatorio determinista basado en coordenadas para ruido estable
      function hash(x, y) {
        const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123;
        return h - Math.floor(h);
      }

      for (let r = 0; r < rows; r++) {
        const cellY = r / rows;

        if (cellY < progressFront - edgeHeight) {
          // Revelado completo
          const sourceY = sy + (r / rows) * sh;
          const sourceHeight = (1 / rows) * sh;
          const dy = r * blockSize;
          const dh = blockSize;
          this.ctx.drawImage(this.img, sx, sourceY, sw, sourceHeight, 0, dy, w, dh);
        } else if (cellY > progressFront + edgeHeight) {
          // Oculto completo: no dibujar nada (queda el fondo oscuro de la tarjeta)
        } else {
          // Zona de transición: disolver bloques con ruido
          const localProgress = (progressFront + edgeHeight - cellY) / (2 * edgeHeight);

          for (let c = 0; c < cols; c++) {
            const rand = hash(c, r);
            if (localProgress > rand) {
              const sourceX = sx + (c / cols) * sw;
              const sourceY = sy + (r / rows) * sh;
              const sourceWidth = (1 / cols) * sw;
              const sourceHeight = (1 / rows) * sh;

              const dx = c * blockSize;
              const dy = r * blockSize;
              this.ctx.drawImage(this.img, sourceX, sourceY, sourceWidth, sourceHeight, dx, dy, blockSize, blockSize);
            }
          }
        }
      }
    }

    initAnimations() {
      // 1. Revelación por scroll usando GSAP ScrollTrigger
      const state = { progress: 0 };
      this.scrollTween = gsap.to(state, {
        progress: 1,
        scrollTrigger: {
          trigger: this.wrapper,
          start: 'top 92%',
          once: true,
        },
        duration: 1.2,
        ease: 'power1.inOut',
        onUpdate: () => this.draw(state.progress),
        onComplete: () => this.draw(1)
      });

      // 2. Revelación interactiva al pasar el mouse (Hover)
      this.hoverHandler = () => {
        const hoverState = { progress: 0 };
        gsap.to(hoverState, {
          progress: 1,
          duration: 0.9,
          ease: 'power2.out',
          onUpdate: () => this.draw(hoverState.progress),
          onComplete: () => this.draw(1)
        });
      };

      this.parentCard.addEventListener('mouseenter', this.hoverHandler);
    }
  }

  // Inicializar para todas las imágenes de proyectos del portfolio
  function initGallery() {
    const images = document.querySelectorAll('.proyecto-card img.card-img, .project-card img.card-img');
    images.forEach(img => {
      if (img.complete && img.naturalWidth !== 0) {
        new PixelReveal(img);
      } else {
        img.addEventListener('load', () => new PixelReveal(img), { once: true });
      }
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initGallery();
  } else {
    document.addEventListener('DOMContentLoaded', initGallery);
  }
})();

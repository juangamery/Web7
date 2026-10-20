# Especificación de Diseño: Proyecto federicogunther.com en Porfolio de WEB7

## 1. Resumen
Incorporar el proyecto personal y profesional de Federico Gunther (`https://federicogunther.com/`) a la grilla de proyectos de `proyectos.html`, posicionado inmediatamente después del proyecto "Primicia".

## 2. Requerimientos y Alcance
- **Página de destino**: Únicamente en `proyectos.html`.
- **Posición**: Directamente después de la tarjeta de "Primicia" (`https://yerbamateprimicia.com.ar/`).
- **Categoría / Tag**: `Profesional` (`data-tag="profesional"` y clase `type-tag--profesional`).
- **Activo visual**: Descargar la imagen de vista previa desde `https://federicogunther.com/og/home.jpg` y almacenarla localmente como `assets/federico-gunther.jpg`.
- **Enlace de destino**: `https://federicogunther.com/` con `target="_blank"` y `rel="noopener"`.
- **Estructura de la Tarjeta**:
  - Título: `Federico Gunther`
  - Tipo: `Profesional`
  - Rubro: `Estrategia · Dirección de Marca`
  - Descripción: `Estrategia, identidad y dirección de marca para empresas que crecen o cambian y necesitan dirección.`
  - Créditos: `• Diseño y Desarrollo: Federico Gunther / WEB7`
  - Botón: `Ver sitio →`
- **Soporte Multilingüe (i18n)**:
  - Claves agregadas a `assets/js/i18n.js` para Español (`es`), Inglés (`en`) y Portugués (`pt`).

## 3. Estructura HTML en `proyectos.html`
```html
<a href="https://federicogunther.com/" target="_blank" rel="noopener" class="project-card" data-tag="profesional">
  <img src="assets/federico-gunther.jpg" alt="Federico Gunther" class="card-img" loading="lazy">
  <div class="card-body">
    <div class="card-header-row">
      <h3 data-i18n="proj_card_fg_title">Federico Gunther</h3>
      <span class="type-tag type-tag--profesional" data-i18n="proj_card_fg_tag">Profesional</span>
    </div>
    <p class="rubro" data-i18n="proj_card_fg_rubro">Estrategia · Dirección de Marca</p>
    <p class="desc" data-i18n="proj_card_fg_desc">Estrategia, identidad y dirección de marca para empresas que crecen o cambian y necesitan dirección.</p>
    <div class="card-credits">
      <div class="credit-item" data-i18n="proj_card_fg_credits">• Diseño y Desarrollo: Federico Gunther / WEB7</div>
    </div>
    <span class="ver-sitio" data-i18n="proj_card_fg_btn">Ver sitio →</span>
  </div>
</a>
```

## 4. Traducciones i18n (`assets/js/i18n.js`)

### Español (`es`):
- `proj_card_fg_title`: "Federico Gunther"
- `proj_card_fg_tag`: "Profesional"
- `proj_card_fg_rubro`: "Estrategia · Dirección de Marca"
- `proj_card_fg_desc`: "Estrategia, identidad y dirección de marca para empresas que crecen o cambian y necesitan dirección."
- `proj_card_fg_credits`: "• Diseño y Desarrollo: Federico Gunther / WEB7"
- `proj_card_fg_btn`: "Ver sitio →"

### Inglés (`en`):
- `proj_card_fg_title`: "Federico Gunther"
- `proj_card_fg_tag`: "Professional"
- `proj_card_fg_rubro`: "Strategy · Brand Direction"
- `proj_card_fg_desc`: "Brand strategy, identity and direction for growing or evolving companies that need direction."
- `proj_card_fg_credits`: "• Design and Development: Federico Gunther / WEB7"
- `proj_card_fg_btn`: "Visit site →"

### Portugués (`pt`):
- `proj_card_fg_title`: "Federico Gunther"
- `proj_card_fg_tag`: "Profissional"
- `proj_card_fg_rubro`: "Estratégia · Direção de Marca"
- `proj_card_fg_desc`: "Estratégia, identidade e direção de marca para empresas que crescem ou mudam e precisam de direção."
- `proj_card_fg_credits`: "• Design e Desenvolvimento: Federico Gunther / WEB7"
- `proj_card_fg_btn`: "Ver site →"

## 5. Criterios de Aceptación y Verificación
1. La imagen `assets/federico-gunther.jpg` existe y tiene dimensiones válidas.
2. Al ingresar a `proyectos.html`, la tarjeta aparece justo después de "Primicia".
3. Al hacer clic en el filtro "Profesional", la tarjeta permanece visible junto a Vipwork.
4. Al hacer clic en los filtros "Landing", "Institucional" o "Ecommerce", la tarjeta se oculta correctamente.
5. Al alternar los idiomas (ES, EN, PT), los textos de la tarjeta se traducen sin errores de renderizado.
6. El enlace abre `https://federicogunther.com/` en una nueva pestaña.

(function() {
  // Función para validar localmente antes de enviar (optimización opcional)
  // El backend siempre re-valida.
  function isValidReferralLocal(r) {
    if (!r || typeof r !== 'string' || !/^[0-9]+$/.test(r) || r.length < 2) return false;
    const c = parseInt(r[0]);
    const payload = r.slice(1);
    let s = 0;
    for (let char of payload) s += parseInt(char);
    while (s > 9) {
      s = s.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    const cExpected = (s === 9) ? 0 : (9 - s);
    return c === cExpected;
  }

  // Enviar evento al backend
  async function trackEvent(eventName, rValue, detail = {}) {
    try {
      const payload = {
        event: eventName,
        path: window.location.pathname,
        detail: detail
      };
      if (rValue) {
        payload.r = rValue;
      }

      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.warn("Error tracking:", e);
    }
  }

  // 1. Check URL para el parámetro de entrada
  const urlParams = new URLSearchParams(window.location.search);
  const r = urlParams.get('r');

  if (r) {
    // Si r tiene un formato básico válido, logueamos el landing y limpiamos URL
    if (isValidReferralLocal(r)) {
      trackEvent('landing', r);
      
      // Limpiar URL
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      urlParams.delete('r');
      const newSearch = urlParams.toString();
      window.history.replaceState({ path: newUrl }, '', newUrl + (newSearch ? '?' + newSearch : '') + window.location.hash);
    }
  } else {
    // Si no hay r en la URL, comprobamos si es page_view orgánico o si hay cookie
    // Para simplificar, trackeamos page_view genérico (el backend extraerá la cookie si la hay)
    trackEvent('page_view', null);
  }

  // Exponer API global
  window.web7Track = function(eventName, detail = {}) {
    trackEvent(eventName, null, detail);
  };

  // Auto-track portfolio opens
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.project-card');
    if (card && card.href) {
      trackEvent('portfolio_open', null, { url: card.href });
    }
  });

})();

(function() {
  // Lectura segura: nunca debe romper la página
  function safe(fn, fallback) {
    try { var v = fn(); return (v === undefined || v === null || v === '') ? fallback : v; }
    catch (e) { return fallback; }
  }

  var urlParams = safe(function() { return new URLSearchParams(window.location.search); }, null);

  // Detectar referido: cualquier número de 8 cifras en el GET (sin validar), o ?r= / ?ref=
  function readRefFromUrl() {
    var search = safe(function() { return decodeURIComponent(window.location.search || ''); }, '');
    var m8 = search.match(/(?:^|[^0-9])([0-9]{8})(?![0-9])/);
    if (m8) return m8[1];
    if (!urlParams) return null;
    var r = urlParams.get('r') || urlParams.get('ref');
    if (r) return String(r).trim();
    return null;
  }

  var urlRef = readRefFromUrl();
  if (urlRef) {
    safe(function() { localStorage.setItem('web7_ref', urlRef); localStorage.setItem('web7_ref_ts', new Date().toISOString()); });
  }
  var storedRef = urlRef || safe(function() { return localStorage.getItem('web7_ref'); }, null);

  // Datos del cliente (todos opcionales)
  function clientInfo() {
    return {
      referrer: safe(function() { return document.referrer; }, null),
      lang: safe(function() { return navigator.language; }, null),
      tz: safe(function() { return Intl.DateTimeFormat().resolvedOptions().timeZone; }, null),
      screen: safe(function() { return screen.width + 'x' + screen.height; }, null),
      viewport: safe(function() { return window.innerWidth + 'x' + window.innerHeight; }, null),
      platform: safe(function() { return navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform; }, null),
      mobile: safe(function() { return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent); }, null),
      title: safe(function() { return document.title; }, null),
      site_lang: safe(function() { return localStorage.getItem('lang'); }, null),
      first_ref_ts: safe(function() { return localStorage.getItem('web7_ref_ts'); }, null),
      utm_source: safe(function() { return urlParams.get('utm_source'); }, null),
      utm_medium: safe(function() { return urlParams.get('utm_medium'); }, null),
      utm_campaign: safe(function() { return urlParams.get('utm_campaign'); }, null)
    };
  }

  function trackEvent(eventName, detail) {
    try {
      var payload = {
        event: eventName || 'unknown',
        path: safe(function() { return window.location.pathname; }, '/'),
        r: storedRef || null,
        href: safe(function() { return window.location.href; }, null),
        client: clientInfo(),
        detail: detail || {}
      };
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
        credentials: 'same-origin'
      }).catch(function() {});
    } catch (e) {
      // Ignorar errores para no afectar la experiencia
    }
  }

  if (urlRef) {
    trackEvent('landing');
    try {
      urlParams.delete('r');
      urlParams.delete('ref');
      urlParams.delete(urlRef);
      var search = urlParams.toString();
      var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
      window.history.replaceState({ path: newUrl }, '', newUrl + (search ? '?' + search : '') + window.location.hash);
    } catch (e) {}
  } else {
    trackEvent('page_view');
  }

  window.web7Track = function(eventName, detail) {
    trackEvent(eventName, detail || {});
  };

  document.addEventListener('click', function(e) {
    try {
      var card = e.target.closest('.project-card');
      if (card && card.href) {
        trackEvent('portfolio_open', { url: card.href });
        return;
      }
      var link = e.target.closest('a');
      if (link && link.href) {
        var url = new URL(link.href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
          trackEvent('section_view', { section: url.hash });
        }
      }
    } catch (err) {}
  });
})();

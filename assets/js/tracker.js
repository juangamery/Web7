(function() {
  const DEBUG_KEY = 'WEB7_DEBUG';
  const isDebug = localStorage.getItem(DEBUG_KEY) === 'true';

  function logDebug(title, message, data = null) {
    if (isDebug) {
      console.log(`%c[WEB7 TRACKER]%c ${title}`, 'color: #DFFE02; background: #000; padding: 2px 4px; border-radius: 3px; font-weight: bold;', 'color: inherit;', message, data || '');
    }
  }

  // Si debug está activado, exponemos cómo desactivarlo
  if (isDebug) {
    console.log("%c[WEB7 TRACKER] MODO DEBUG ACTIVADO. Para desactivarlo, ejecuta en esta consola: localStorage.removeItem('WEB7_DEBUG')", 'color: #f55;');
  } else {
    // Y viceversa, si no está activado, les contamos en silencio cómo activarlo (esto solo sale si miran el source code, o le podés decir por chat).
    // Opcionalmente podemos dejar un log estándar para los developers, pero mejor mantener la consola limpia.
  }

  // Función para validar localmente y dar feedback detallado
  function validateReferral(r) {
    if (!r) return { valid: false, reason: 'Vacío' };
    if (typeof r !== 'string') return { valid: false, reason: 'No es texto' };
    if (!/^[0-9]+$/.test(r)) return { valid: false, reason: 'Contiene caracteres no numéricos o espacios' };
    if (r.length < 2) return { valid: false, reason: 'Longitud insuficiente (min 2)' };

    const c = parseInt(r[0]);
    const payload = r.slice(1);
    
    let s = 0;
    for (let char of payload) {
      s += parseInt(char);
    }
    
    while (s > 9) {
      s = s.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    
    const cExpected = (s === 9) ? 0 : (9 - s);
    const valid = (c === cExpected);
    
    if (!valid) {
      return { valid: false, reason: `Dígito de control incorrecto. Se recibió [${c}] pero la fórmula del payload exige [${cExpected}]` };
    }
    return { valid: true, reason: 'Número completamente válido' };
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

      logDebug('🚀 PREPARANDO EVENTO', `Tipo: ${eventName}`, payload);

      const resp = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const responseData = await resp.json().catch(() => null);
      
      if (resp.ok) {
        logDebug('✅ EVENTO GUARDADO EXITOSAMENTE', `El servidor confirmó el registro de [${eventName}].`, responseData);
      } else {
        logDebug('❌ ERROR DEL SERVIDOR', `Falló el guardado del evento [${eventName}]. Código HTTP: ${resp.status}`, responseData);
      }
    } catch (e) {
      logDebug('❌ ERROR DE RED', `No se pudo alcanzar la API para guardar [${eventName}].`, e);
      console.warn("[WEB7 TRACKER] Error de red:", e);
    }
  }

  // 1. Check URL para el parámetro de entrada
  const urlParams = new URLSearchParams(window.location.search);
  const r = urlParams.get('r');

  if (r) {
    logDebug('🔍 PARAMETRO DETECTADO', `Se encontró ?r=${r} en la URL. Evaluando...`);
    const validation = validateReferral(r);
    
    if (validation.valid) {
      logDebug('🟢 REFERIDO VALIDO', validation.reason + '. Registrando entrada principal (landing).');
      trackEvent('landing', r);
      
      // Limpiar URL
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      urlParams.delete('r');
      const newSearch = urlParams.toString();
      window.history.replaceState({ path: newUrl }, '', newUrl + (newSearch ? '?' + newSearch : '') + window.location.hash);
      logDebug('🧹 URL LIMPIADA', 'El parámetro ?r fue removido de la barra de direcciones por privacidad.');
    } else {
      logDebug('🔴 REFERIDO INVALIDO', validation.reason + '. Se ignorará por completo y NO se registrará como landing.', r);
    }
  } else {
    // Si no hay r en la URL, trackeamos page_view genérico
    logDebug('ℹ️ NAVEGACION NORMAL', 'No hay parámetro ?r en la URL. Registrando vista normal (puede usar cookie si ya entró antes).');
    trackEvent('page_view', null);
  }

  // Exponer API global
  window.web7Track = function(eventName, detail = {}) {
    logDebug('⚡ TRACK MANUAL', `Se invocó web7Track('${eventName}') de forma manual.`);
    trackEvent(eventName, null, detail);
  };

  // Auto-track portfolio opens and section navigation
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.project-card');
    if (card && card.href) {
      logDebug('🖱️ CLIC PORTFOLIO', `El usuario hizo clic en el proyecto: ${card.href}`);
      trackEvent('portfolio_open', null, { url: card.href });
      return;
    }

    const link = e.target.closest('a');
    if (link && link.href) {
      // Si el enlace es interno o un ancla, lo registramos como navigation
      const url = new URL(link.href, window.location.origin);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
        logDebug('🖱️ NAVEGACION SECCION', `El usuario escroleó a la sección: ${url.hash}`);
        trackEvent('section_view', null, { section: url.hash });
      }
    }
  });

})();

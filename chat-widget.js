/**
 * WEB7 Chat Widget
 * Floating popup chat powered by Groq AI
 */
(function () {
  "use strict";

  const isOn7 = document.title.toLowerCase().includes("on7") || window.location.pathname.includes("on7");
  const ACCENT = isOn7 ? "#a1ff62" : "#DFFE02";
  const ACCENT_DIM = isOn7 ? "rgba(161,255,98,0.15)" : "rgba(223,254,2,0.15)";

  // ── Agent Configurations ──
  const AGENT_CONFIGS = {
    "web7": {
      title: "Asistente WEB7",
      avatar: "W7",
      status: "En línea",
      welcome: "Hola! Preguntame sobre nuestros servicios, metodología o herramientas.",
      chips: [
        { label: "Servicios", query: "¿Qué servicios ofrece WEB7?" },
        { label: "Método 7", query: "¿Cómo funciona el Método 7?" },
        { label: "On7", query: "¿Qué es On7?" },
        { label: "Consultar", query: "Quiero hacer una consulta" }
      ]
    },
    "real-estate": {
      title: "Inmo7 — Asistente Inmobiliario",
      avatar: "IN",
      status: "Demo · Datos ficticios",
      welcome: "¡Hola! 👋 Soy el asistente virtual de Norte Propiedades en Posadas. ¿Buscás comprar, alquilar o un alquiler temporario?",
      chips: [
        { label: "Buscar alquiler", query: "Estoy buscando un departamento en alquiler" },
        { label: "Comprar casa", query: "Quiero comprar una casa" },
        { label: "Alquiler temporario", query: "¿Qué opciones tienen de alquiler temporario?" },
        { label: "Requisitos", query: "¿Cuáles son los requisitos para alquilar?" }
      ]
    },
    "car-sales": {
      title: "Auto7 — Ventas y Financiación",
      avatar: "A7",
      status: "Demo · Datos ficticios",
      welcome: "¡Hola! 👋 Bienvenido a Auto7. Te ayudo a conocer nuestro catálogo de usados y planes de financiación. ¿Qué vehículo buscás?",
      chips: [
        { label: "Ver catálogo", query: "¿Qué autos tienen disponibles en stock?" },
        { label: "Financiación", query: "¿Cómo son los planes de financiación?" },
        { label: "Toyota Hilux", query: "Quiero consultar por la Toyota Hilux 2021" },
        { label: "Test Drive", query: "Quiero coordinar un Test Drive" }
      ]
    },
    "medical": {
      title: "Salud7 — Gestión de Turnos",
      avatar: "S7",
      status: "Demo · Datos ficticios",
      welcome: "Hola. ¿Necesitás agendar un turno médico en el Centro Médico Salud7? Consultame por especialidades y turnos disponibles.",
      chips: [
        { label: "Turnos disponibles", query: "¿Qué turnos tienen disponibles?" },
        { label: "Dra. Martínez (Pediatría)", query: "Quiero un turno con Dra. Martínez de Pediatría" },
        { label: "Obras sociales", query: "¿Con qué obras sociales trabajan?" },
        { label: "Clínica General", query: "Necesito un turno para Clínica General" }
      ]
    },
    "restaurant": {
      title: "Bistró7 — Reservas y Menú",
      avatar: "B7",
      status: "Demo · Datos ficticios",
      welcome: "¡Hola! 🍕 Bienvenido a Bistró 7. Te puedo mostrar el menú de hoy, filtrar por opciones sin TACC o tomar tu reserva de mesa.",
      chips: [
        { label: "Ver el menú", query: "Quiero ver la carta del restaurante" },
        { label: "Reservar mesa", query: "Quiero hacer una reserva" },
        { label: "Opciones sin TACC", query: "¿Qué platos aptos para celíacos tienen?" },
        { label: "Postres", query: "Quiero ver las opciones de postres" }
      ]
    },
    "yerba-mate": {
      title: "Primicia — Asistente de Compra",
      avatar: "YP",
      status: "Demo · Datos ficticios",
      welcome: "¡Hola! 🧉 Bienvenido a Yerba Mate Primicia. Te asesoro sobre nuestras variedades artesanales de Misiones y calculo tu envío. ¿Cuál te gusta?",
      chips: [
        { label: "Ver productos", query: "¿Qué variedades de yerba mate tienen?" },
        { label: "Yerba Barbacuá", query: "Quiero consultar por la Yerba Barbacuá" },
        { label: "Costo de envío", query: "¿Cuánto cuesta el envío y a dónde envían?" },
        { label: "Hacer un pedido", query: "Quiero comprar yerba mate" }
      ]
    }
  };

  let activeAgent = "web7";
  if (isOn7) {
    activeAgent = localStorage.getItem("w7_active_agent") || "web7";
  }

  function formatMessage(text) {
    if (!text) return "";
    let cleanText = text.replace(/\[ACTION:[^\]]+\]/g, "").replace(/ +/g, " ").trim();
    if (!cleanText) return "";

    let escaped = cleanText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    escaped = escaped.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    escaped = escaped.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Parse markdown images ![alt](url)
    escaped = escaped.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, `<img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 0.5rem; display: block; border: 1px solid rgba(255,255,255,0.1);" />`);

    // Parse markdown links [text](url)
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, `<a href="$2" target="_blank" rel="noopener" style="color: ${ACCENT}; text-decoration: underline; font-weight: 500;">$1</a>`);

    // Parse raw wa.me links
    escaped = escaped.replace(/(^|[^"'])((?:https?:\/\/)?wa\.me\/[0-9]+)/g, (match, prefix, urlPart) => {
      const url = urlPart.startsWith('http') ? urlPart : `https://${urlPart}`;
      return `${prefix}<a href="${url}" target="_blank" rel="noopener" style="color: ${ACCENT}; text-decoration: underline; font-weight: 500;">${urlPart}</a>`;
    });

    const lines = escaped.split("\n");
    let inList = false;
    const processedLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const content = trimmed.slice(2);
        let listLine = "";
        if (!inList) {
          inList = true;
          listLine += '<ul style="margin-left: 1.2rem; margin-top: 0.25rem; margin-bottom: 0.25rem; list-style-type: square;">';
        }
        listLine += `<li>${content}</li>`;
        return listLine;
      } else {
        let prefix = "";
        if (inList) {
          inList = false;
          prefix = "</ul>";
        }
        return prefix + line;
      }
    });
    if (inList) {
      processedLines.push("</ul>");
    }

    return processedLines.join("<br>");
  }

  // ── Inject CSS ──
  const style = document.createElement("style");
  style.textContent = `
    /* CHAT FAB */
    #w7-chat-fab {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 90000;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: ${ACCENT};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
      transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s, opacity 0.5s;
      
      /* Hide initially for entrance animation */
      opacity: 0;
      transform: translateY(40px) scale(0.5);
      pointer-events: none;
    }
    #w7-chat-fab.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }
    #w7-chat-fab.open {
      transform: scale(1) !important;
    }
    #w7-chat-fab:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 32px rgba(0,0,0,0.5);
    }
    #w7-chat-fab svg { width: 24px; height: 24px; }
    #w7-chat-fab .fab-close { display: none; }
    #w7-chat-fab.open .fab-open { display: none; }
    #w7-chat-fab.open .fab-close { display: block; }

    /* Radar Ping Effect */
    #w7-chat-fab::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      border: 2px solid ${ACCENT};
      opacity: 0;
      pointer-events: none;
    }
    #w7-chat-fab.visible:not(.open)::after {
      animation: w7-fab-ping 3s infinite ease-out;
    }
    @keyframes w7-fab-ping {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.4); opacity: 0; }
    }

    /* TOOLTIP ATTENTION */
    #w7-chat-tooltip {
      position: fixed;
      bottom: 2.25rem;
      right: 5.75rem;
      z-index: 90000;
      background: #111;
      color: #f5f5f5;
      border: 1px solid rgba(255,255,255,0.08);
      padding: 0.5rem 0.85rem;
      border-radius: 10px;
      font-family: 'Alpha Lyrae', sans-serif;
      font-size: 0.75rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
      pointer-events: none;
      opacity: 0;
      transform: translateX(10px);
      transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.23,1,0.32,1);
    }
    #w7-chat-tooltip.show {
      opacity: 1;
      transform: translateX(0);
    }
    #w7-chat-tooltip::after {
      content: '';
      position: absolute;
      right: -6px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: #111;
      border-right: 1px solid rgba(255,255,255,0.08);
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    /* CHAT POPUP */
    #w7-chat-popup {
      position: fixed;
      bottom: 5.5rem;
      right: 1.5rem;
      z-index: 89999;
      width: 380px;
      max-width: calc(100vw - 2rem);
      height: 520px;
      max-height: calc(100vh - 8rem);
      background: #111;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.23,1,0.32,1);
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }
    #w7-chat-popup.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    /* HEADER */
    #w7-chat-popup .chat-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.1rem 1.25rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: rgba(10,10,10,0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: relative;
    }
    #w7-chat-popup .chat-header::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, ${ACCENT}40, transparent);
    }
    #w7-chat-popup .chat-avatar {
      width: 32px; height: 32px;
      border-radius: 10px;
      background: ${ACCENT_DIM};
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; font-weight: 800;
      color: ${ACCENT};
      font-family: 'Doto', 'Space Grotesk', monospace;
      transition: background 0.3s, color 0.3s;
    }
    #w7-chat-popup .chat-header-text h3 {
      margin: 0; font-size: 0.85rem; font-weight: 600; color: #f5f5f5;
      font-family: 'Alpha Lyrae', sans-serif;
    }
    #w7-chat-popup .chat-status-indicator {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      margin-top: 0.15rem;
    }
    #w7-chat-popup .chat-status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10B981;
      box-shadow: 0 0 8px #10B981;
      animation: w7-pulse-dot 2s infinite;
      transition: background 0.3s, box-shadow 0.3s;
    }
    @keyframes w7-pulse-dot {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.3); opacity: 0.5; }
      100% { transform: scale(1); opacity: 1; }
    }
    #w7-chat-popup .chat-status-indicator p {
      margin: 0 !important; font-size: 0.65rem; color: rgba(255,255,255,0.45);
      font-family: 'Alpha Lyrae', sans-serif;
    }
    #w7-chat-popup .chat-clear {
      margin-left: auto;
      background: transparent;
      border: none;
      color: rgba(255,255,255,0.3);
      cursor: pointer;
      font-size: 0.7rem;
      font-family: 'Space Grotesk', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: color 0.2s;
    }
    #w7-chat-popup .chat-clear:hover {
      color: #ef4444;
    }

    /* MESSAGES (with Digital Grid) */
    #w7-chat-popup .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
      position: relative;
      background-image: 
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
      background-size: 20px 20px;
      background-position: center;
    }
    #w7-chat-popup .chat-messages > :first-child {
      margin-top: auto !important;
    }
    #w7-chat-popup .chat-messages::-webkit-scrollbar {
      width: 6px;
    }
    #w7-chat-popup .chat-messages::-webkit-scrollbar-track {
      background: transparent;
    }
    #w7-chat-popup .chat-messages::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.25);
      border-radius: 10px;
    }
    #w7-chat-popup .chat-messages::-webkit-scrollbar-thumb:hover {
      background: ${ACCENT};
    }
    #w7-chat-popup .chat-msg {
      max-width: 85%;
      padding: 0.75rem 1rem;
      border-radius: 16px;
      font-size: 0.8rem;
      line-height: 1.5;
      font-family: 'Alpha Lyrae', sans-serif;
      white-space: pre-wrap;
      word-break: break-word;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      animation: w7-bubble-in 0.3s cubic-bezier(0.23,1,0.32,1) forwards;
      opacity: 0;
      transform: translateY(8px);
    }
    @keyframes w7-bubble-in {
      to { opacity: 1; transform: translateY(0); }
    }
    #w7-chat-popup .chat-msg.user {
      align-self: flex-end;
      background: ${ACCENT};
      color: #0a0a0a;
      border-bottom-right-radius: 4px;
      font-weight: 500;
    }
    #w7-chat-popup .chat-msg.assistant {
      align-self: flex-start;
      background: #181818;
      color: #e5e5e5;
      border-bottom-left-radius: 4px;
      border: 1px solid rgba(255,255,255,0.03);
    }
    #w7-chat-popup .chat-msg.assistant .typing-dots {
      display: inline-flex; gap: 3px;
    }
    #w7-chat-popup .chat-msg.assistant .typing-dots span {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,0.3);
      animation: w7-dot-bounce 1.2s infinite;
    }
    #w7-chat-popup .chat-msg.assistant .typing-dots span:nth-child(2) { animation-delay: 0.15s; }
    #w7-chat-popup .chat-msg.assistant .typing-dots span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes w7-dot-bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-4px); }
    }

    /* WELCOME */
    #w7-chat-popup .chat-welcome {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      height: 100%; text-align: center; gap: 0.75rem;
      padding: 1.5rem;
      z-index: 1;
    }
    #w7-chat-popup .chat-welcome-icon {
      width: 48px; height: 48px; border-radius: 16px;
      background: ${ACCENT_DIM};
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; font-weight: 800; color: ${ACCENT};
      font-family: 'Doto', monospace;
      transition: background 0.3s, color 0.3s;
    }
    #w7-chat-popup .chat-welcome p {
      margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.5);
      font-family: 'Alpha Lyrae', sans-serif;
    }
    #w7-chat-popup .chat-welcome-chips {
      display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;
      margin-top: 0.25rem;
    }
    #w7-chat-popup .chat-welcome-chips button {
      font-size: 0.7rem; padding: 0.35rem 0.75rem;
      border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
      background: transparent; color: rgba(255,255,255,0.45);
      cursor: pointer; font-family: 'Alpha Lyrae', sans-serif;
      transition: all 0.2s;
    }
    #w7-chat-popup .chat-welcome-chips button:hover {
      border-color: ${ACCENT}; color: ${ACCENT};
    }

    /* INPUT */
    #w7-chat-popup .chat-input-bar {
      display: flex; align-items: flex-end; gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-top: 1px solid rgba(255,255,255,0.06);
      background: #0a0a0a;
      z-index: 1;
    }
    #w7-chat-popup .chat-input-bar textarea {
      flex: 1; background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px; padding: 0.6rem 0.75rem;
      color: #f5f5f5; font-size: 0.8rem; resize: none;
      outline: none; font-family: 'Alpha Lyrae', sans-serif;
      max-height: 80px; min-height: 38px;
      transition: border-color 0.2s;
    }
    #w7-chat-popup .chat-input-bar textarea:focus {
      border-color: ${ACCENT}40;
    }
    #w7-chat-popup .chat-input-bar textarea::placeholder {
      color: rgba(255,255,255,0.2);
    }
    #w7-chat-popup .chat-input-bar button {
      width: 36px; height: 36px; border-radius: 10px;
      background: ${ACCENT}; border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: opacity 0.2s; flex-shrink: 0;
    }
    #w7-chat-popup .chat-input-bar button:disabled {
      opacity: 0.3; cursor: not-allowed;
    }
    #w7-chat-popup .chat-input-bar button svg {
      width: 16px; height: 16px;
    }

    /* MOBILE */
    @media (max-width: 480px) {
      #w7-chat-popup {
        bottom: 0; right: 0;
        width: 100vw; height: 100dvh;
        max-width: 100vw; max-height: 100dvh;
        border-radius: 0;
      }
      #w7-chat-popup .chat-input-bar textarea {
        font-size: 16px;
      }
      #w7-chat-popup .chat-clear {
        margin-right: 3.5rem;
      }
      #w7-chat-fab.open { bottom: auto; top: 0.5rem; right: 0.5rem; z-index: 90001; }
      #w7-chat-tooltip { display: none !important; }
    }
  `;
  document.head.appendChild(style);

  // Helper to personalize welcome message based on stored name
  function renderWelcomeSection(agentType) {
    const config = AGENT_CONFIGS[agentType];
    const name = localStorage.getItem("w7_user_name");
    let welcomeText = config.welcome;

    if (name && agentType === "web7") {
      welcomeText = `¡Hola de nuevo, ${name}! 👋 Preguntame sobre nuestros servicios, metodología o lo que necesites.`;
    } else if (name) {
      welcomeText = welcomeText.replace("¡Hola! 👋", `¡Hola de nuevo, ${name}! 👋`);
    }

    const welcomeDiv = document.createElement("div");
    welcomeDiv.className = "chat-welcome";
    welcomeDiv.innerHTML = `
      <div class="chat-welcome-icon">${config.avatar}</div>
      <p>${welcomeText}</p>
      <div class="chat-welcome-chips">
        ${config.chips.map(chip => `<button data-q="${chip.query}">${chip.label}</button>`).join("")}
      </div>
    `;

    // Add click listeners to the new chips
    welcomeDiv.querySelectorAll("button[data-q]").forEach((btn) => {
      btn.addEventListener("click", () => {
        inputEl.value = btn.dataset.q;
        sendMessage();
      });
    });

    return welcomeDiv;
  }

  // Extract user details dynamically from messages
  function extractUserData(historyList) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    let name = localStorage.getItem("w7_user_name") || "";
    let email = localStorage.getItem("w7_user_email") || "";

    historyList.forEach(msg => {
      if (msg.role === "user") {
        const emailMatch = msg.content.match(emailRegex);
        if (emailMatch && emailMatch[0]) {
          email = emailMatch[0].trim();
        }
        const nameIntroMatch = msg.content.match(/(?:me llamo|mi nombre es|soy)\s+([A-Z\xc0-\xdfa-z\xe0-\xff]+)/i);
        if (nameIntroMatch && nameIntroMatch[1]) {
          const candidate = nameIntroMatch[1].trim();
          if (candidate.length > 2 && candidate.length < 20) {
            name = candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
          }
        }
      }
      if (msg.role === "assistant") {
        const assistantGreetingMatch = msg.content.match(/(?:qué hacés|hola|un gusto|bienvenido),\s*([A-Z\xc0-\xdfa-z\xe0-\xff]+)/i);
        if (assistantGreetingMatch && assistantGreetingMatch[1]) {
          const candidate = assistantGreetingMatch[1].trim();
          if (candidate.length > 2 && candidate.length < 20 && !["hola", "asistente", "cómo", "amigo", "che", "juan"].includes(candidate.toLowerCase())) {
            name = candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
          }
        }
      }
    });

    if (name) localStorage.setItem("w7_user_name", name);
    if (email) localStorage.setItem("w7_user_email", email);
  }

  // ── Build DOM ──
  const SEND_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;

  // FAB button
  const fab = document.createElement("button");
  fab.id = "w7-chat-fab";
  fab.setAttribute("aria-label", "Abrir chat");
  fab.innerHTML = `
    <svg class="fab-open" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <svg class="fab-close" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;

  // Tooltip
  const tooltip = document.createElement("div");
  tooltip.id = "w7-chat-tooltip";
  tooltip.textContent = "¿En qué te puedo ayudar? 👋";

  // Popup
  const popup = document.createElement("div");
  popup.id = "w7-chat-popup";
  popup.innerHTML = `
    <div class="chat-header">
      <div class="chat-avatar">W7</div>
      <div class="chat-header-text">
        <h3>Asistente WEB7</h3>
        <div class="chat-status-indicator">
          <span class="chat-status-dot"></span>
          <p>En línea</p>
        </div>
      </div>
    </div>
    <div class="chat-messages" id="w7ChatMessages"></div>
    <div class="chat-input-bar">
      <textarea id="w7ChatInput" placeholder="Escribí tu mensaje..." rows="1"></textarea>
      <button id="w7ChatSend" disabled>${SEND_SVG}</button>
    </div>
  `;

  document.body.appendChild(popup);
  document.body.appendChild(fab);
  document.body.appendChild(tooltip);

  // ── Clear Chat ──
  const clearBtn = document.createElement("button");
  clearBtn.className = "chat-clear";
  clearBtn.textContent = "Limpiar";
  popup.querySelector(".chat-header").appendChild(clearBtn);

  clearBtn.addEventListener("click", () => {
    if (confirm("¿Querés borrar el historial de chat?")) {
      messages.length = 0;
      localStorage.removeItem("w7_chat_history");
      msgContainer.innerHTML = "";
      msgContainer.appendChild(renderWelcomeSection(activeAgent));
    }
  });

  // Update DOM headers and styling based on activeAgent
  function updateWidgetUI() {
    const config = AGENT_CONFIGS[activeAgent];
    if (!config) return;

    const avatarEl = popup.querySelector(".chat-avatar");
    if (avatarEl) {
      avatarEl.textContent = config.avatar;
      if (activeAgent === "web7") {
        avatarEl.style.background = ACCENT_DIM;
        avatarEl.style.color = ACCENT;
      } else {
        avatarEl.style.background = "rgba(56, 189, 248, 0.15)";
        avatarEl.style.color = "#38bdf8";
      }
    }

    const welcomeIconEl = popup.querySelector(".chat-welcome-icon");
    if (welcomeIconEl) {
      welcomeIconEl.textContent = config.avatar;
      if (activeAgent === "web7") {
        welcomeIconEl.style.background = ACCENT_DIM;
        welcomeIconEl.style.color = ACCENT;
      } else {
        welcomeIconEl.style.background = "rgba(56, 189, 248, 0.15)";
        welcomeIconEl.style.color = "#38bdf8";
      }
    }

    const titleEl = popup.querySelector(".chat-header-text h3");
    if (titleEl) titleEl.textContent = config.title;

    const statusEl = popup.querySelector(".chat-status-indicator p");
    if (statusEl) statusEl.textContent = config.status;

    const dot = popup.querySelector(".chat-status-dot");
    if (dot) {
      if (activeAgent === "web7") {
        dot.style.background = "#10B981";
        dot.style.boxShadow = "0 0 8px #10B981";
      } else {
        dot.style.background = "#38bdf8";
        dot.style.boxShadow = "0 0 8px #38bdf8";
      }
    }
  }

  // ── Global Switch Agent API ──
  window.w7ChatWidget = {
    switchAgent: function (agentType) {
      if (!AGENT_CONFIGS[agentType]) return;
      activeAgent = agentType;
      if (isOn7) {
        localStorage.setItem("w7_active_agent", agentType);
      }
      messages = [];
      localStorage.removeItem("w7_chat_history");

      msgContainer.innerHTML = "";
      msgContainer.appendChild(renderWelcomeSection(agentType));
      updateWidgetUI();

      if (!popup.classList.contains("open")) {
        fab.click();
      }
    }
  };

  // ── State ──
  let messages = [];
  try {
    const saved = localStorage.getItem("w7_chat_history");
    if (saved) {
      messages = JSON.parse(saved);
    }
  } catch (e) {
    messages = [];
  }
  let isStreaming = false;
  const msgContainer = document.getElementById("w7ChatMessages");
  const inputEl = document.getElementById("w7ChatInput");
  const sendBtn = document.getElementById("w7ChatSend");

  // Initialize UI & load history
  updateWidgetUI();
  if (messages.length === 0) {
    msgContainer.appendChild(renderWelcomeSection(activeAgent));
  } else {
    messages.forEach(msg => {
      addBubble(msg.role, msg.content);
    });
  }

  // ── Toggle ──
  fab.addEventListener("click", () => {
    const open = popup.classList.toggle("open");
    fab.classList.toggle("open", open);
    fab.setAttribute("aria-label", open ? "Cerrar chat" : "Abrir chat");
    if (open) {
      inputEl.focus();
      tooltip.classList.remove("show");
      sessionStorage.setItem("w7_chat_opened", "1");
    } else {
      sessionStorage.removeItem("w7_chat_opened");
    }
  });

  // ── Input handlers ──
  inputEl.addEventListener("input", () => {
    sendBtn.disabled = !inputEl.value.trim() || isStreaming;
    inputEl.style.height = "auto";
    inputEl.style.height = Math.min(inputEl.scrollHeight, 80) + "px";
  });

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  sendBtn.addEventListener("click", () => sendMessage());

  // ── Render helpers ──
  function clearWelcome() {
    const w = msgContainer.querySelector(".chat-welcome");
    if (w) w.remove();
  }

  function addBubble(role, content) {
    const div = document.createElement("div");
    div.className = `chat-msg ${role}`;
    if (role === "assistant") {
      div.innerHTML = formatMessage(content);
    } else {
      div.textContent = content;
    }
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return div;
  }

  function addTypingBubble() {
    const div = document.createElement("div");
    div.className = "chat-msg assistant";
    div.innerHTML = `<span class="typing-dots"><span></span><span></span><span></span></span>`;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return div;
  }

  function saveHistory() {
    try {
      localStorage.setItem("w7_chat_history", JSON.stringify(messages));
    } catch (e) {}
  }

  // ── Send message ──
  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isStreaming) return;

    clearWelcome();
    messages.push({ role: "user", content: text });
    saveHistory();
    addBubble("user", text);

    inputEl.value = "";
    inputEl.style.height = "auto";
    sendBtn.disabled = true;
    isStreaming = true;

    const typingBubble = addTypingBubble();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, agentType: activeAgent }),
      });

      if (!res.ok) throw new Error("API error");

      // Simulate human typing/thinking thought delay for 1.8s
      await new Promise(resolve => setTimeout(resolve, 1800));

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      // Replace typing dots with empty text
      typingBubble.textContent = "";

      let streamBuffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        streamBuffer += decoder.decode(value, { stream: true });
        const lines = streamBuffer.split("\n\n");
        streamBuffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;
          const data = trimmed.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            assistantContent += parsed.content || "";
            typingBubble.innerHTML = formatMessage(assistantContent);
            msgContainer.scrollTop = msgContainer.scrollHeight;
          } catch (err) {}
        }
      }

      messages.push({ role: "assistant", content: assistantContent });
      saveHistory();
      extractUserData(messages);
      handleChatActions(assistantContent);
    } catch {
      typingBubble.textContent = "Error al conectar. Intentá de nuevo.";
    } finally {
      isStreaming = false;
      sendBtn.disabled = !inputEl.value.trim();
    }
  }

  function isSamePage(targetUrl) {
    if (!targetUrl) return false;
    try {
      const currentUrl = new URL(window.location.href);
      const destUrl = new URL(targetUrl, window.location.origin);
      
      if (currentUrl.origin !== destUrl.origin) return false;
      
      let currentPath = currentUrl.pathname.replace(/\.html$/, "").replace(/\/$/, "");
      let destPath = destUrl.pathname.replace(/\.html$/, "").replace(/\/$/, "");
      
      if (currentPath === "/index" || currentPath === "") currentPath = "/";
      if (destPath === "/index" || destPath === "") destPath = "/";
      
      return currentPath === destPath;
    } catch (e) {
      return false;
    }
  }

  function executeScroll(selector, fallbackUrl) {
    const el = document.querySelector(selector);
    if (el) {
      if (window.innerWidth > 768) {
        if (window.lenis) {
          window.lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // En móvil cerramos el popup para que vean el scroll
        fab.click();
        setTimeout(() => {
          if (window.lenis) window.lenis.scrollTo(el);
          else el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      if (!isSamePage(fallbackUrl)) {
        window.location.href = fallbackUrl;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  function handleChatActions(text) {
    const lowercase = text.toLowerCase();

    // 1. Acciones explícitas (Tags ocultos del prompt)
    const mailMatch = text.match(/\[ACTION:\s*send-chat-email:\s*([^\]\s]+)\]/);
    if (mailMatch && mailMatch[1]) {
      const targetEmail = mailMatch[1].trim();
      // Dispatch call to send email API in background
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: targetEmail,
          history: messages
        })
      }).catch(err => console.error("Error sending email:", err));
    }

    if (text.includes("[ACTION: scroll-proyectos]") || text.includes("[ACTION: scroll-portfolio]")) {
      executeScroll("#proyectos", "proyectos.html");
      return;
    }
    if (text.includes("[ACTION: scroll-contacto]")) {
      executeScroll("#contacto", "contacto.html");
      return;
    }
    if (text.includes("[ACTION: scroll-metodo]")) {
      executeScroll("#metodo", "index.html#metodo");
      return;
    }
    if (text.includes("[ACTION: redirect-on7]")) {
      if (!isSamePage("on7.html")) {
        window.location.href = "on7.html";
      }
      return;
    }
    if (text.includes("[ACTION: redirect-proyectos]")) {
      if (!isSamePage("proyectos.html")) {
        window.location.href = "proyectos.html";
      }
      return;
    }
    if (text.includes("[ACTION: redirect-contacto]")) {
      if (!isSamePage("contacto.html")) {
        window.location.href = "contacto.html";
      }
      return;
    }

    // 2. Heurística básica por palabras clave
    if (lowercase.includes("sección de proyectos") || lowercase.includes("página de proyectos") || lowercase.includes("ver los proyectos")) {
      executeScroll("#proyectos", "proyectos.html");
    } else if (lowercase.includes("sección de contacto") || lowercase.includes("formulario de contacto") || lowercase.includes("escribinos por whatsapp")) {
      executeScroll("#contacto", "contacto.html");
    } else if (lowercase.includes("metodología") || lowercase.includes("método 7") || lowercase.includes("cómo trabajamos")) {
      executeScroll("#metodo", "index.html#metodo");
    } else if (lowercase.includes("conocer on7") || lowercase.includes("página de on7") || lowercase.includes("producto on7")) {
      if (!isSamePage("on7.html")) {
        setTimeout(() => { window.location.href = "on7.html"; }, 1500);
      }
    }
  }

  extractUserData(messages);

  // ── Entrance and Tooltip animations ──
  function initializeEntrance() {
    const chatOpened = sessionStorage.getItem("w7_chat_opened");
    if (chatOpened === "1") {
      fab.classList.add("visible");
      fab.classList.add("open");
      popup.classList.add("open");
      fab.setAttribute("aria-label", "Cerrar chat");
      setTimeout(() => { inputEl.focus(); }, 100);
    } else {
      setTimeout(() => {
        fab.classList.add("visible");
        setTimeout(() => {
          if (!popup.classList.contains("open")) {
            tooltip.classList.add("show");
            setTimeout(() => {
              tooltip.classList.remove("show");
            }, 5000);
          }
        }, 1000);
      }, 2000);
    }
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    initializeEntrance();
  } else {
    window.addEventListener("load", initializeEntrance);
  }
})();

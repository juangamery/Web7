/**
 * WEB7 Chat Widget
 * Floating popup chat powered by Groq AI
 */
(function () {
  "use strict";

  const isOn7 = document.title.toLowerCase().includes("on7");
  const ACCENT = isOn7 ? "#34D399" : "#DFFE02";
  const ACCENT_DIM = isOn7 ? "rgba(52,211,153,0.15)" : "rgba(223,254,2,0.15)";

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
      transition: transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s;
    }
    #w7-chat-fab:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 32px rgba(0,0,0,0.5);
    }
    #w7-chat-fab svg { width: 24px; height: 24px; }
    #w7-chat-fab .fab-close { display: none; }
    #w7-chat-fab.open .fab-open { display: none; }
    #w7-chat-fab.open .fab-close { display: block; }

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
      padding: 1rem 1.25rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: #0a0a0a;
    }
    #w7-chat-popup .chat-avatar {
      width: 32px; height: 32px;
      border-radius: 10px;
      background: ${ACCENT_DIM};
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; font-weight: 800;
      color: ${ACCENT};
      font-family: 'Doto', 'Space Grotesk', monospace;
    }
    #w7-chat-popup .chat-header-text h3 {
      margin: 0; font-size: 0.85rem; font-weight: 600; color: #f5f5f5;
      font-family: 'Manrope', sans-serif;
    }
    #w7-chat-popup .chat-header-text p {
      margin: 0; font-size: 0.65rem; color: rgba(255,255,255,0.35);
      font-family: 'Manrope', sans-serif;
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

    /* MESSAGES */
    #w7-chat-popup .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.08) transparent;
    }
    #w7-chat-popup .chat-msg {
      max-width: 85%;
      padding: 0.65rem 0.9rem;
      border-radius: 16px;
      font-size: 0.8rem;
      line-height: 1.5;
      font-family: 'Manrope', sans-serif;
      white-space: pre-wrap;
      word-break: break-word;
    }
    #w7-chat-popup .chat-msg.user {
      align-self: flex-end;
      background: ${ACCENT};
      color: #0a0a0a;
      border-bottom-right-radius: 4px;
    }
    #w7-chat-popup .chat-msg.assistant {
      align-self: flex-start;
      background: rgba(255,255,255,0.06);
      color: #e5e5e5;
      border-bottom-left-radius: 4px;
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
    }
    #w7-chat-popup .chat-welcome-icon {
      width: 48px; height: 48px; border-radius: 16px;
      background: ${ACCENT_DIM};
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; font-weight: 800; color: ${ACCENT};
      font-family: 'Doto', monospace;
    }
    #w7-chat-popup .chat-welcome p {
      margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.5);
      font-family: 'Manrope', sans-serif;
    }
    #w7-chat-popup .chat-welcome-chips {
      display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;
      margin-top: 0.25rem;
    }
    #w7-chat-popup .chat-welcome-chips button {
      font-size: 0.7rem; padding: 0.35rem 0.75rem;
      border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
      background: transparent; color: rgba(255,255,255,0.45);
      cursor: pointer; font-family: 'Manrope', sans-serif;
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
    }
    #w7-chat-popup .chat-input-bar textarea {
      flex: 1; background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px; padding: 0.6rem 0.75rem;
      color: #f5f5f5; font-size: 0.8rem; resize: none;
      outline: none; font-family: 'Manrope', sans-serif;
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
        width: 100vw; height: 100vh;
        max-width: 100vw; max-height: 100vh;
        border-radius: 0;
      }
      #w7-chat-fab.open { bottom: auto; top: 1rem; right: 1rem; z-index: 90001; }
    }
  `;
  document.head.appendChild(style);

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

  // Popup
  const popup = document.createElement("div");
  popup.id = "w7-chat-popup";
  popup.innerHTML = `
    <div class="chat-header">
      <div class="chat-avatar">W7</div>
      <div class="chat-header-text">
        <h3>Asistente WEB7</h3>
        <p>Responde en segundos</p>
      </div>
    </div>
    <div class="chat-messages" id="w7ChatMessages">
      <div class="chat-welcome">
        <div class="chat-welcome-icon">W7</div>
        <p>Hola! Preguntame sobre nuestros servicios, metodología o herramientas.</p>
        <div class="chat-welcome-chips">
          <button data-q="¿Qué servicios ofrece WEB7?">Servicios</button>
          <button data-q="¿Cómo funciona el Método 7?">Método 7</button>
          <button data-q="¿Qué es On7?">On7</button>
          <button data-q="Quiero hacer una consulta">Consultar</button>
        </div>
      </div>
    </div>
    <div class="chat-input-bar">
      <textarea id="w7ChatInput" placeholder="Escribí tu mensaje..." rows="1"></textarea>
      <button id="w7ChatSend" disabled>${SEND_SVG}</button>
    </div>
  `;

  document.body.appendChild(popup);
  document.body.appendChild(fab);

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
      
      const welcome = document.createElement("div");
      welcome.className = "chat-welcome";
      welcome.innerHTML = `
        <div class="chat-welcome-icon">W7</div>
        <p>Hola! Preguntame sobre nuestros servicios, metodología o herramientas.</p>
        <div class="chat-welcome-chips">
          <button data-q="¿Qué servicios ofrece WEB7?">Servicios</button>
          <button data-q="¿Cómo funciona el Método 7?">Método 7</button>
          <button data-q="¿Qué es On7?">On7</button>
          <button data-q="Quiero hacer una consulta">Consultar</button>
        </div>
      `;
      msgContainer.appendChild(welcome);
      
      welcome.querySelectorAll("[data-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          inputEl.value = btn.dataset.q;
          sendMessage();
        });
      });
    }
  });

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

  // ── Toggle ──
  fab.addEventListener("click", () => {
    const open = popup.classList.toggle("open");
    fab.classList.toggle("open", open);
    fab.setAttribute("aria-label", open ? "Cerrar chat" : "Abrir chat");
    if (open) inputEl.focus();
  });

  // ── Quick chips ──
  popup.querySelectorAll("[data-q]").forEach((btn) => {
    btn.addEventListener("click", () => {
      inputEl.value = btn.dataset.q;
      sendMessage();
    });
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
        body: JSON.stringify({ messages }),
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
      handleChatActions(assistantContent);
    } catch {
      typingBubble.textContent = "Error al conectar. Intentá de nuevo.";
    } finally {
      isStreaming = false;
      sendBtn.disabled = !inputEl.value.trim();
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
      window.location.href = fallbackUrl;
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
      window.location.href = "on7.html";
      return;
    }
    if (text.includes("[ACTION: redirect-proyectos]")) {
      window.location.href = "proyectos.html";
      return;
    }
    if (text.includes("[ACTION: redirect-contacto]")) {
      window.location.href = "contacto.html";
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
      if (!window.location.pathname.includes("on7.html")) {
        setTimeout(() => { window.location.href = "on7.html"; }, 1500);
      }
    }
  }

  function initHistory() {
    if (messages.length > 0) {
      clearWelcome();
      messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = `chat-msg ${msg.role}`;
        if (msg.role === "assistant") {
          div.innerHTML = formatMessage(msg.content);
        } else {
          div.textContent = msg.content;
        }
        msgContainer.appendChild(div);
      });
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }
  }

  initHistory();
})();

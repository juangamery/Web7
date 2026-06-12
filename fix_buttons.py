import re

with open('chat-widget.js', 'r') as f:
    content = f.read()

# 1. Remove minimize button from HTML
minimize_html = """        <button id="w7ChatMinimize" aria-label="Minimizar">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>"""
content = content.replace(minimize_html, '')

# 2. Fix JS event listener logic
old_js = """  // ── Window Controls ──
  const btnMinimize = document.getElementById("w7ChatMinimize");
  const btnMaximize = document.getElementById("w7ChatMaximize");

  btnMinimize.addEventListener("click", () => {
    popup.classList.remove("show");
    fab.classList.remove("hidden");
    if (tooltip && !localStorage.getItem("w7_tooltip_dismissed")) {
      tooltip.classList.add("show");
    }
  });

  btnMaximize.addEventListener("click", () => {
    popup.classList.toggle("expanded");
    if (popup.classList.contains("expanded")) {
      btnMaximize.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`; // Shrink icon
    } else {
      btnMaximize.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`; // Maximize icon
    }
  });"""

new_js = """  // ── Window Controls ──
  const btnMaximize = popup.querySelector("#w7ChatMaximize");
  if (btnMaximize) {
    btnMaximize.addEventListener("click", () => {
      popup.classList.toggle("expanded");
      if (popup.classList.contains("expanded")) {
        btnMaximize.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`; // Shrink icon
      } else {
        btnMaximize.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`; // Maximize icon
      }
    });
  }"""
content = content.replace(old_js, new_js)

# 3. Change CSS to use ACCENT color for buttons
old_button_css = """    #w7-chat-popup .chat-header-actions button {
      background: none;
      border: none;
      color: rgba(255,255,255,0.6);
      cursor: pointer;
      padding: 6px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    #w7-chat-popup .chat-header-actions button:hover {
      color: white;
      background: rgba(255,255,255,0.1);
    }"""

new_button_css = """    #w7-chat-popup .chat-header-actions button {
      background: none;
      border: none;
      color: var(--w7-brand, #DFFE02);
      cursor: pointer;
      padding: 6px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    #w7-chat-popup .chat-header-actions button:hover {
      background: rgba(255,255,255,0.1);
      transform: scale(1.05);
    }"""
content = content.replace(old_button_css, new_button_css)

# Inject the variable --w7-brand
inject_var = """  document.body.appendChild(popup);
  popup.style.setProperty("--w7-brand", ACCENT);"""
content = content.replace('  document.body.appendChild(popup);', inject_var)

with open('chat-widget.js', 'w') as f:
    f.write(content)

print("Fix applied successfully.")

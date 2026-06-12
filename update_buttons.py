import re

with open('chat-widget.js', 'r') as f:
    content = f.read()

# Add CSS
css_to_add = """
    #w7-chat-popup.expanded {
      width: calc(100vw - 40px);
      height: calc(100vh - 40px);
      max-width: none;
      max-height: none;
      bottom: 20px;
      right: 20px;
      border-radius: 12px;
    }
    @media (max-width: 480px) {
      #w7-chat-popup.expanded {
        width: 100vw;
        height: 100vh;
        bottom: 0;
        right: 0;
        border-radius: 0;
      }
    }
    #w7-chat-popup .chat-header-actions {
      display: flex;
      gap: 0.25rem;
      margin-left: 0.5rem;
    }
    #w7-chat-popup .chat-header-actions button {
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
    }
"""
content = content.replace('/* === DOM STRUCTURE & STYLES === */', '/* === DOM STRUCTURE & STYLES === */' + css_to_add)

# Change .chat-header CSS to push actions to right
content = content.replace('      position: relative;\n    }', '      position: relative;\n      justify-content: space-between;\n    }')

# Update HTML
old_html = """    <div class="chat-header">
      <div class="chat-avatar">W7</div>
      <div class="chat-header-text">
        <h3>Asistente WEB7</h3>
        <div class="chat-status-indicator">
          <span class="chat-status-dot"></span>
          <p>En línea</p>
        </div>
      </div>
    </div>"""

new_html = """    <div class="chat-header">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="chat-avatar">W7</div>
        <div class="chat-header-text">
          <h3>Asistente WEB7</h3>
          <div class="chat-status-indicator">
            <span class="chat-status-dot"></span>
            <p>En línea</p>
          </div>
        </div>
      </div>
      <div class="chat-header-actions">
        <button id="w7ChatMaximize" aria-label="Agrandar">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
        </button>
        <button id="w7ChatMinimize" aria-label="Minimizar">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>"""
content = content.replace(old_html, new_html)

# Add event listeners for new buttons
js_to_add = """
  // ── Window Controls ──
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
  });
"""

content = content.replace('  document.body.appendChild(tooltip);', '  document.body.appendChild(tooltip);\n' + js_to_add)

# Change append child of clear btn
content = content.replace('popup.querySelector(".chat-header").appendChild(clearBtn);', 'popup.querySelector(".chat-header-actions").insertAdjacentElement("afterbegin", clearBtn);')

with open('chat-widget.js', 'w') as f:
    f.write(content)

print("Widget buttons added successfully.")

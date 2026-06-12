import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

# Update api/chat.js
replace_in_file('api/chat.js', [
    ('"Centro Médico Salud7"', '"Salud7"'),
])

# Update chat-widget.js
robot_svg = '<svg class="fab-open" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none"><path d="M19 21H5v-2h14v2ZM5 19H3v-4H1v-2h2V9h2v10Zm16-6h2v2h-2v4h-2V9h2v4Zm-11 3H8v-4h2v4Zm6 0h-2v-4h2v4Zm-3-9h6v2H5V7h6V5h2v2Zm-2-2H7V3h4v2Z"/></svg>'

old_fab_svg = """<svg class="fab-open" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none">
      <path d="M4 2h16v2h2v12h-2v2h-6v2h-2v2h-2v-2H8v-2H4v-2H2V4h2V2zm2 2v12h4v2h2v2h2v-2h2v-2h6V4H6z"/>
    </svg>"""

replace_in_file('chat-widget.js', [
    ('Centro Médico Salud7', 'Salud7'),
    (old_fab_svg, robot_svg),
])

# Update on7.html
replace_in_file('on7.html', [
    ('<h4>Centro Médico Salud7</h4>', '<h4>Salud7</h4>'),
    ('Centro Médico Salud7', 'Salud7'),
    ('<h4>Concesionaria7 Usados</h4>', '<h4>Concesionaria7</h4>'),
])

print("Changes applied successfully.")

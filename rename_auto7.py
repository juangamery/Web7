import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('api/chat.js', [
    ('"Auto7"', '"Concesionaria7"'),
])

replace_in_file('chat-widget.js', [
    ('Auto7 — Ventas', 'Concesionaria7 — Ventas'),
    ('Bienvenido a Auto7', 'Bienvenido a Concesionaria7'),
])

replace_in_file('on7.html', [
    ('<h4>Auto7 Usados</h4>', '<h4>Concesionaria7 Usados</h4>'),
])

print("Auto7 renamed to Concesionaria7 successfully.")

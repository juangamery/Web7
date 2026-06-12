import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

# Update chat-widget.js
replace_in_file('chat-widget.js', [
    ('"Norte Propiedades — Asesor Inmobiliario"', '"Inmobiliaria7 — Asesor Inmobiliario"'),
    ('Norte Propiedades en Posadas', 'Inmobiliaria7 en Posadas'),
    ('"Primicia — Asistente de Compra"', '"Yerba7 — Asistente de Compra"'),
    ('Yerba Mate Primicia.', 'Yerba7.'),
])

# Update on7.html
replace_in_file('on7.html', [
    ('<h4>Norte Propiedades</h4>', '<h4>Inmobiliaria7</h4>'),
    ('<h4>Yerba Mate Primicia</h4>', '<h4>Yerba7</h4>'),
])

# Update api/chat.js
replace_in_file('api/chat.js', [
    ('"Norte Propiedades"', '"Inmobiliaria7"'),
    ('"Yerba Mate Primicia"', '"Yerba7"'),
    ('Yerba Primicia Tradicional', 'Yerba7 Tradicional'),
    ('Yerba Primicia Suave', 'Yerba7 Suave'),
    ('Yerba Primicia Barbacuá', 'Yerba7 Barbacuá'),
])

print("Names updated successfully.")

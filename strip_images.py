import re

with open('api/chat.js', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '- Foto: ![' in line:
        continue
    if '**REGLA ESTRICTA SOBRE FOTOS:**' in line or '**IMPORTANTE sobre fotos:**' in line:
        # We need to strip out the photo rule sentence but keep the rest of the line, or just replace the photo rule sentence.
        line = re.sub(r' \*\*REGLA ESTRICTA SOBRE FOTOS:\*\*.*?(?=(\d+\.|$))', '', line)
        line = re.sub(r'\*\*REGLA ESTRICTA SOBRE FOTOS:\*\*.*?(?=(\d+\.|$))', '', line)
        line = re.sub(r' \*\*IMPORTANTE sobre fotos:\*\*.*?(?=(\d+\.|$))', '', line)
    new_lines.append(line)

with open('api/chat.js', 'w') as f:
    f.writelines(new_lines)

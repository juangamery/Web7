import re

svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Food-Drink-Hamburger--Streamline-Pixel" height="32" width="32">
  <desc>
    Food Drink Hamburger Streamline Icon: https://streamlinehq.com
  </desc>
  <title>food-drink-hamburger</title>
  <g>
    <path d="m30.47 19.05 -1.52 0 0 -1.53 -1.53 0 0 1.53 -1.52 0 0 1.52 -3.05 0 0 -1.52 -1.52 0 0 -1.53 -4.57 0 0 1.53 -3.05 0 0 1.52 -4.57 0 0 -1.52 -1.53 0 0 -1.53 -4.57 0 0 1.53 -1.52 0 0 1.52 1.52 0 0 4.57 1.53 0 0 -3.05 22.85 0 0 3.05 1.53 0 0 -3.05 1.52 0 0 -1.52 1.53 0L32 16l-1.53 0 0 3.05z" fill="#000000" stroke-width="1"></path>
    <path d="M25.9 25.14h1.52v1.53H25.9Z" fill="#000000" stroke-width="1"></path>
    <path d="M25.9 8.38h1.52V9.9H25.9Z" fill="#000000" stroke-width="1"></path>
    <path d="M24.38 6.86h1.52v1.52h-1.52Z" fill="#000000" stroke-width="1"></path>
    <path d="M6.09 26.67H25.9v1.52H6.09Z" fill="#000000" stroke-width="1"></path>
    <path d="M21.33 8.38h1.52V9.9h-1.52Z" fill="#000000" stroke-width="1"></path>
    <path d="M21.33 5.33h3.05v1.53h-3.05Z" fill="#000000" stroke-width="1"></path>
    <path d="M18.28 9.9h1.53v1.53h-1.53Z" fill="#000000" stroke-width="1"></path>
    <path d="M18.28 6.86h1.53v1.52h-1.53Z" fill="#000000" stroke-width="1"></path>
    <path d="M15.23 8.38h1.53V9.9h-1.53Z" fill="#000000" stroke-width="1"></path>
    <path d="M12.19 9.9h1.52v1.53h-1.52Z" fill="#000000" stroke-width="1"></path>
    <path d="M12.19 6.86h1.52v1.52h-1.52Z" fill="#000000" stroke-width="1"></path>
    <path d="M10.66 3.81h10.67v1.52H10.66Z" fill="#000000" stroke-width="1"></path>
    <path d="M9.14 8.38h1.52V9.9H9.14Z" fill="#000000" stroke-width="1"></path>
    <path d="M7.61 5.33h3.05v1.53H7.61Z" fill="#000000" stroke-width="1"></path>
    <path d="M6.09 6.86h1.52v1.52H6.09Z" fill="#000000" stroke-width="1"></path>
    <path d="M4.57 25.14h1.52v1.53H4.57Z" fill="#000000" stroke-width="1"></path>
    <path d="M4.57 8.38h1.52V9.9H4.57Z" fill="#000000" stroke-width="1"></path>
    <path d="m30.47 16 0 -1.53 -1.52 0 0 -4.57 -1.53 0 0 4.57 -22.85 0 0 -4.57 -1.53 0 0 4.57 -1.52 0 0 1.53 28.95 0z" fill="#000000" stroke-width="1"></path>
    <path d="M0 16h1.52v3.05H0Z" fill="#000000" stroke-width="1"></path>
  </g>
</svg>"""

svg = svg.replace('fill="#000000"', 'fill="currentColor"')
svg = svg.replace('stroke-width="1"', '')
svg = svg.replace('height="32" width="32"', 'class="pixel-icon" width="24" height="24"')
svg = re.sub(r'<desc>.*?</desc>', '', svg, flags=re.DOTALL)
svg = re.sub(r'<title>.*?</title>', '', svg, flags=re.DOTALL)
svg = re.sub(r'\s+>', '>', svg)
svg = '\n'.join([line for line in svg.split('\n') if line.strip() != ''])

target_svg = """<svg viewBox="0 0 24 24" fill="currentColor" class="pixel-icon" width="24" height="24">
            <path d="M4 4h16v2H4zm0 2h2v8H4zm2 8h10v2H6zm14-8h2v4h-2zm-2 4h2v2h-2zm-2-4h2v8h-2zM2 18h18v2H2z"/>
          </svg>"""

with open('on7.html', 'r') as f:
    content = f.read()

content = content.replace(target_svg, svg)

with open('on7.html', 'w') as f:
    f.write(content)

print("Icon replaced successfully")

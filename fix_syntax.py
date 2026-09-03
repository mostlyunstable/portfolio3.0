import re

with open('src/data/projects.ts', 'r') as f:
    content = f.read()

# I will just find the consecutive `},` lines and fix them.
content = content.replace("  },\n  \n  },\n  {", "  },\n  {")
# Or a regex to remove multiple closing braces:
content = re.sub(r'\},\s*\},', '},', content)

with open('src/data/projects.ts', 'w') as f:
    f.write(content)

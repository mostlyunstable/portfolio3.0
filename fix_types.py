import re

# Fix projects.ts
with open('src/data/projects.ts', 'r') as f:
    content = f.read()

# Replace links: { ... } with just adding it to type (wait, it's easier to add `links?: { live?: string, github?: string }` to Project type)
with open('src/types/index.ts', 'r') as f:
    types = f.read()

types = types.replace(
    '  thumbnail: string;',
    '  links?: { live?: string; github?: string; };\n  thumbnail: string;'
)

with open('src/types/index.ts', 'w') as f:
    f.write(types)

# Fix page.tsx to use year instead of timeline
with open('src/app/work/[slug]/page.tsx', 'r') as f:
    page = f.read()

page = page.replace('project.timeline', 'project.year')
page = page.replace('project.caseStudy.overview.problem', 'project.caseStudy.problem.description')
page = page.replace('project.caseStudy.overview.approach', 'project.caseStudy.approach.description')

with open('src/app/work/[slug]/page.tsx', 'w') as f:
    f.write(page)

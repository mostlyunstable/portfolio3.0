with open('src/app/work/[slug]/page.tsx', 'r') as f:
    page = f.read()

page = page.replace('project.links.github', 'project.links?.github')

with open('src/app/work/[slug]/page.tsx', 'w') as f:
    f.write(page)

# Lomond Robotics website

## Purpose

This is the Hugo static website for Lomond Robotics, a business providing laboratory automation, robotics and hardware integration, AI implementation, measurement systems, data processing, and bespoke engineering support. Do not describe it as only a 3D printing service. Production is https://lomondrobotics.com/.

This guidance incorporates the project context in `../CLAUDE.md` and the user's design direction of 3 October 2026.

## Working on the site

- Preserve existing uncommitted work. Check `git status` and the relevant diffs before editing. Distinguish changes already present from changes made in the current task.
- Read applicable directory instructions before editing. Within each directory, use the first non-empty file in this order: `AGENTS.override.md`, `AGENTS.md`, `CLAUDE.md`.
- Main styling is `assets/css/style.css`, processed by Hugo, not an SCSS entry point. The final section holds the current design system over the original theme.
- `layouts/_default/baseof.html` is the page shell. `layouts/index.html` assembles homepage partials from `layouts/partials/`.
- Site and hero copy live in `config/_default/params.toml`; menus in `config/_default/menus.en.toml`; homepage section data in `data/en/*.yml`; inner page text in `content/english/`.
- `static/` contains assets copied directly into the build. `public/` and `resources/_gen/` are generated and ignored. Do not edit generated output as source.
- The contact form posts to Formspree. Do not send a test enquiry without explicit authorization.

## Design and writing

- Use a technical, restrained monochrome aesthetic inspired by a dark code editor. Graphite backgrounds, off-white text, neutral grey borders, flat controls, and monospace navigation or small labels are appropriate.
- The user dislikes gold. Do not introduce gold, warm orange, cream, colourful gradients, glow effects, or decorative marketing imagery. A white/black variant is also acceptable if requested.
- Keep body copy readable with a system sans-serif font. Reserve monospace for short labels and navigation. Support small screens and visible keyboard focus with sufficient contrast.
- Dark is the default. The header light/dark switch persists an explicit choice in local storage through `assets/js/theme.js`, loaded before styles. Keep both themes readable, including logos, forms and mobile navigation. Theme colours are CSS variables in the final design-system section.
- Preserve factual uncertainty. Do not invent customer results, certifications, partnerships, performance figures, or operational status indicators.
- Use direct technical language. Do not use em dashes in site copy.

## Local preview and deployment

Run commands from this directory. GitHub Pages CI pins Hugo Extended **0.152.2** in `.github/workflows/gh-pages.yml`. Use that version for deployment parity; check `hugo version` because the installed version may differ.

```powershell
hugo server --bind 127.0.0.1 --baseURL http://localhost:1313/ --port 1313 --disableFastRender
# npm run dev also starts the Hugo development server.
hugo --gc --minify
```

Preview at http://localhost:1313/. A local server is sufficient to review the site. Keep production `baseURL` in `hugo.toml` unchanged; override it on the preview command line.

Pushing to `main` triggers a build and public deployment through GitHub Pages. Treat local preview and public publishing as separate actions. Do not push or publish merely to show a local change.

Validate with a production build and HTTP checks for Home, About, Services, Contact and their linked assets. When a browser is available, inspect desktop and mobile layouts, navigation, focus, and form appearance. Report any missing visual or interaction verification accurately.

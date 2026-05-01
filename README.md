# Lomond Robotics

Static Hugo website for Lomond Robotics.

Live site:

`https://michaeljirasek.com/lomondrobotics/`

## What The Site Covers

Lomond Robotics provides practical engineering and implementation support, including:

- Automation and robotics solutions.
- Hardware integration.
- AI tool consultation and implementation for companies.
- Custom measurement and data capture devices.
- Engineering prototypes and one-off technical builds.
- On-demand solutions for unusual technical requirements.

The site should not describe the business as only a 3D printing service. 3D printing may be part of prototyping, but the broader offer is custom automation, integration, AI implementation, and engineering problem solving.

## How It Works

This is a Hugo static site. Hugo reads content from `content/`, configuration from `hugo.toml` and `config/_default/`, data-driven homepage sections from `data/en/`, and templates from `layouts/`.

The published site is generated into `public/` when Hugo builds. The `public/` directory is ignored locally because GitHub Actions builds it during deployment.

## Local Development

Install Hugo Extended, then run:

```bash
hugo server -D
```

Build locally with:

```bash
hugo --gc --minify
```

Or use the npm aliases:

```bash
npm run dev
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/gh-pages.yml`.

The workflow:

1. Checks out the repository.
2. Installs Hugo Extended.
3. Runs `hugo --minify`.
4. Uploads `public/` as a GitHub Pages artifact.
5. Deploys it with `actions/deploy-pages`.

The configured Hugo `baseURL` is:

```toml
baseURL = "https://michaeljirasek.com/lomondrobotics/"
```

That means the generated links are intended for the `/lomondrobotics/` path.

For deployment to work, the GitHub repository must have Pages configured to use GitHub Actions as the source, and the push must land on the `main` branch.

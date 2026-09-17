# AIPA Website

Responsive AIPA corporate website built with React, TypeScript and Vite.

## Requirements

- Node.js 22
- pnpm 10

## Development

```bash
pnpm install
pnpm dev
```

The default URL is `http://localhost:8443`.

## Production build

```bash
pnpm run check
```

Deploy the generated `dist/` directory. The server must return `index.html` for application routes that do not match a physical file.

Main routes include `/`, `/about`, `/services`, `/contact` and `/products/<category>`.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for server configuration. The TecDoc catalogue button remains inactive until its production URL is supplied.

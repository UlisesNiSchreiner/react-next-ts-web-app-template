# react-next-ts-web-aap-template

A production-minded **Next.js + React + TypeScript** template.

- App Router setup (Next.js)
- ESLint 9 flat config + Prettier
- Unit tests with Vitest + Testing Library
- GitHub Actions CI (lint, typecheck, tests, build)
- Code coverage ready (Codecov)
- Dockerfile for clean container deployments (DigitalOcean, Fly, Render, etc.)
- Husky + lint-staged + commitlint

![CI](https://img.shields.io/github/actions/workflow/status/<YOUR_GH_ORG>/<YOUR_REPO>/ci.yml?label=CI)
[![Coverage](https://codecov.io/gh/<YOUR_GH_ORG>/<YOUR_REPO>/branch/main/graph/badge.svg)](https://codecov.io/gh/<YOUR_GH_ORG>/<YOUR_REPO>)
![license](https://img.shields.io/badge/License-MIT-green)
![typescript](https://img.shields.io/badge/TypeScript-5.x-blue)

---

## Getting started

```bash
npm ci
npm run dev
```

Open http://localhost:3000

---

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run typecheck` | TypeScript check |
| `npm run test` | Unit tests (Vitest) |
| `npm run test:coverage` | Coverage report |

---

## CI

The workflow runs on pushes and PRs:

- install (npm ci)
- lint
- typecheck
- tests + coverage
- build

To enable coverage reporting, set `CODECOV_TOKEN` in your repo secrets (or use Codecov GitHub App).

---

## Docker

Build and run:

```bash
docker build -t webapp .
docker run -p 3000:3000 webapp
```

This Dockerfile produces a minimal runtime image using Next.js output tracing.

---

## Template initialization

When you create a repo from this template, you can quickly rename it:

```bash
npm run init-template my-new-app
```

That script updates `package.json` and README placeholders.

---

## Project structure

```
.
├── app/                 # Next.js App Router
├── components/          # UI components
├── lib/                 # Utilities
├── test/                # Unit tests
├── .github/workflows/   # CI
├── .husky/              # Git hooks
└── Dockerfile
```

---

## License

MIT © Ulises Schreiner

# Minimalist Personal Portfolio

A responsive single-page portfolio site with editable placeholders for a designer/developer's work, services, experience, and contact details.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/minimalist-portfolio/src/App.tsx` — the portfolio content, section structure, navigation, and motion behavior
- `artifacts/minimalist-portfolio/src/index.css` — the visual system, responsive layout, typography, and reveal animation styles
- `artifacts/minimalist-portfolio/package.json` — the web app scripts and frontend dependencies

## Architecture decisions

- The portfolio is frontend-only; editable placeholder content lives in the page source so it can be replaced without backend setup.
- The page uses anchor navigation and IntersectionObserver-based reveals rather than a client-side routing flow.
- Project artwork is intentionally CSS-built so the starter stays lightweight and image-free.
- The accent green is reserved for availability/status dots and small emphasis marks.

## Product

- Sticky responsive navigation with Work, Service, Experience, Contact, and Let's Talk anchors
- Editorial hero with outlined/filled name treatment
- Selected work cards with CSS-built visual thumbnails
- Services list, about copy, dark experience block, and contact CTA
- Scroll-reveal motion with reduced-motion support

## User preferences

- Keep the site minimal, light, spacious, and easy to personalize with placeholders.

## Gotchas

- Replace bracketed placeholder content in `artifacts/minimalist-portfolio/src/App.tsx` before publishing.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

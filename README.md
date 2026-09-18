# stjoseph-site

The site for [St. Joseph Works](https://github.com/stjosephworks): what the organization is for, its
mission, and the tools it has built. Each tool is a card leading to that tool's own site.

Published at [stjosephworks.org](https://stjosephworks.org). Prumo, the first tool, is at
[prumo.stjosephworks.org](https://prumo.stjosephworks.org).

## Requirements

Node 22.17 or later, and pnpm. The build downloads its font from Google Fonts, so it needs network access.

## Running it

```sh
pnpm install
pnpm dev
```

The site runs on `http://localhost:3300`, leaving 3000 to an API and 3200 to `prumo-site`. It calls no API;
every page is static.

## Everyday commands

| Command | What it does |
|---|---|
| `pnpm test` | Checks the dictionaries agree, and that every tool and member has copy in both languages |
| `pnpm lint` | Biome |
| `pnpm typecheck` | Generates Next's route types, then `tsc --noEmit`; also run before every push |
| `pnpm build` · `pnpm start` | Production build, then serves it |

## Adding a tool

Add it to [`src/features/tools/tools.ts`](src/features/tools/tools.ts), then add its name, tagline and
description to both dictionaries under `tools.items`. The test fails until both languages have it.

## Adding a team member

Add them to [`src/features/team/team.ts`](src/features/team/team.ts) with their photo, GitHub and where
they work, then add their role, description and devotion to both dictionaries under `team.items`. Every
member is rendered by the same card, so nothing else changes. A photo hosted somewhere other than GitHub
needs its host added to `images.remotePatterns` in `next.config.ts`.

## Conventions

The rules this project follows live in `.prumo/`, and `AGENTS.md` points to them. Read those before
changing how something is done.

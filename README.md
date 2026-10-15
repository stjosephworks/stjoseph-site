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

## Languages

English, Portuguese and Spanish, under `/en`, `/pt` and `/es`. Each language is one entry in
[`src/features/i18n/locales.ts`](src/features/i18n/locales.ts), with its dictionary in
`src/features/i18n/dictionaries/`; the tests walk every entry, so a new language fails them until its dictionary
is complete.

A path without a locale, `/` included, is answered by `src/proxy.ts` with a redirect to the visitor's language: the
one picked in the language menu, kept for a year in the `locale` cookie, else the first one their browser accepts
(`es-AR` reaching `es`), else English. A path that names a locale is never redirected.

## Everyday commands

| Command | What it does |
|---|---|
| `pnpm test` | Checks the dictionaries agree, that every tool and member has copy in every language, and the language negotiation |
| `pnpm lint` | Biome |
| `pnpm typecheck` | Generates Next's route types, then `tsc --noEmit`; also run before every push |
| `pnpm build` · `pnpm start` | Production build, then serves it |

## Adding a tool

Add it to [`src/features/tools/tools.ts`](src/features/tools/tools.ts), then add its name, tagline and
description to every dictionary under `tools.items`. The test fails until every language has it.

## Adding a team member

Add them to [`src/features/team/team.ts`](src/features/team/team.ts) with their photo, GitHub and where
they work, then add their role, description and devotion to every dictionary under `team.items`. Every
member is rendered by the same card, so nothing else changes. A photo hosted somewhere other than GitHub
needs its host added to `images.remotePatterns` in `next.config.ts`.

## Conventions

The rules this project follows live in `.prumo/`, and `AGENTS.md` points to them. Read those before
changing how something is done.

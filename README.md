# Baixada design system

The public source of truth for the visual and verbal identity behind
[baixada.cards](https://baixada.cards): a quiet, tactile home for card-game
products and study tools.

This repository keeps three things together because they evolve as one system:

- `docs/` — naming, visual language, logo rules, voice, routes, applications,
  and the append-only decision log;
- `src/tokens.css` — canonical walnut, paper, Spanish-card, suit, brass,
  typography, texture, and study-data tokens;
- `src/` — accessible React marks and the shared game-icon chassis.

It does **not** contain full game screens or gameplay code. Truco, Escopa, and
future games consume this system; they do not define competing versions of it.

## Start here

Read [the handoff](docs/00-README.md), then:

1. [Naming](docs/01-naming.md)
2. [Visual system](docs/02-visual-system.md)
3. [Logo system](docs/03-logo-system.md)
4. [Voice and tone](docs/04-voice-and-tone.md)
5. [Decision log](docs/08-decision-log.md)

The original design canvases remain in `docs/assets/`. They are public,
viewable artifacts that use integrity-pinned browser dependencies. The
production-ready token and React sources live in `src/`.

## Use from a consumer

During the migration, consumers pin an exact signed Git repository commit.
The `prepare` hook builds JavaScript and declarations for Git-based installs;
CSS stays available through the explicit package exports. Do not depend on
moving `main`. Registry publication is deliberately disabled until there is a
real release consumer and an agreed compatibility policy.

The intended import surface is:

```tsx
import '@baixada-cards/design-system/tokens.css'
import '@baixada-cards/design-system/brand.css'
import { BaixadaWordmark, TrucoIcon } from '@baixada-cards/design-system'
```

Components expect the canonical CSS variables from `tokens.css`. React is a
peer dependency so product applications keep one React runtime.

## Develop

Requirements: Node 24.12 and pnpm 10.26.

```sh
sfw pnpm install --frozen-lockfile
make check
```

`make check` validates Action pinning, the brand contract, ESLint, strict
TypeScript, declaration/JavaScript builds, token invariants, and server-rendered
accessibility behavior.

## Governance

Brand changes are architectural changes. Update the guide that owns the rule
and append the rationale, alternatives, and date to
`docs/08-decision-log.md`. Do not silently change a token or mark in isolation.

This repository is MIT-licensed. See [LICENSE](LICENSE).

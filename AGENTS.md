# Agent Instructions

## Repository purpose

This repository is the canonical source for Baixada's brand governance,
design tokens, reusable marks, game-icon family, and public design artifacts.

## Boundaries

- Record naming, visual-language, voice, route, icon, or brand-governance
  changes in the relevant guide and append `docs/08-decision-log.md`.
- Keep shared tokens and marks game-agnostic. Complete game screens, gameplay
  rules, and product-only components belong in their product repositories.
- `baixada-cards/truco-web` owns the Truco product. `baixada-cards/escopa`
  owns Escopa. This repository owns the family resemblance between them.
- Do not introduce a second token source inside a consumer. Consumers should
  pin a reviewed design-system revision and deliberately sync or install it.

## Workflow

- Read `docs/01-naming.md`, `docs/02-visual-system.md`, and
  `docs/03-logo-system.md` before changing public brand surfaces.
- Use `sfw` for public-registry dependency fetches.
- Preserve the seven-day pnpm release-age gate and frozen lockfile installs.
- Run `make check` before wrapping up a change.
- Render and inspect affected marks at large and favicon sizes after visual
  changes.
- Sign commits.

## Security and publishing

- Never add credentials, private operational state, personal contact details,
  commercially licensed media, or consumer-specific secrets.
- The npm package is intentionally private during migration. Publishing a
  package or release requires an explicit versioning and consumer plan.
- Preserve full-SHA GitHub Action references and read-only workflow tokens.

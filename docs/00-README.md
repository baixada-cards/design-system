# Baixada — Brand Handoff

> A living guidebook for the Baixada brand: the umbrella site (`baixada.cards`), the individual card-game apps (Truco, Escopa, Bisca), and the lab/study modes built on top of them.

This package is the **single source of truth** for branding decisions on this project. It is meant to be read first by anyone — designer, engineer, or AI agent — joining the project, and consulted thereafter whenever a brand-touching decision needs to be made.

---

## What's in this package

| File | Purpose |
|---|---|
| `00-README.md` | This file. Orientation + how to use the package. |
| `01-naming.md` | The umbrella name, per-game names, the `· Lab` suffix, and naming rules going forward. |
| `02-visual-system.md` | Color tokens, typography, ornaments, textures. The Tactile inheritance. |
| `03-logo-system.md` | Wordmarks, lockups, app icons, do-and-don't usage. |
| `04-voice-and-tone.md` | How Baixada sounds. PT/EN bilingual conventions. |
| `05-applications.md` | Web, mobile, app stores, social, marketing surfaces. |
| `06-easter-eggs.md` | Family / farm references — what to lean into, what to avoid. |
| `07-domains-and-routes.md` | URL structure, subdomains, app-store listing names. |
| `08-decision-log.md` | Rationale for the major decisions, dated, with alternatives considered. |
| `09-truco-icon.md` | The Truco app icon — spec, family system, and favicon/title rules. |
| `../src/tokens.css` | The canonical production token file. |
| `assets/branding.css` | Brand-level utility styles used in the canvas. |
| `assets/Baixada Branding.html` | The original design canvas as a viewable artifact. |
| `assets/ornaments.jsx` + `assets/artboards.jsx` | The React source for the canvas. Useful when porting marks to other surfaces. |
| `assets/Truco Icon.html` | The Truco-icon canvas as a viewable artifact. |
| `assets/truco-icon.jsx` + `assets/truco-artboards.jsx` | The React source for the Truco icon family. Copy into product surfaces. |

---

## How to use this package

**For an engineer or coding agent building product surfaces:**

1. Read `01-naming.md` and `03-logo-system.md` first. Together they answer 90% of "what do I call this thing / how do I render it" questions.
2. Consume `../src/tokens.css` from an exact reviewed design-system revision. Every brand color and font lives there. **Do not invent new tokens.**
3. Use the production React marks exported from `../src/index.ts`. The older artboard sources in `assets/` preserve the design exploration; they are not a second component library.
4. Before adding a new color, font, or ornament: check `02-visual-system.md`. If it's not there, the answer is probably "use what we have differently." If you genuinely need to extend, propose the addition and we'll update the system together.

**For brand decisions (a new game, a partnership, a microsite):**

1. Re-read `08-decision-log.md` for context on *why* the system is the way it is.
2. Write the proposed addition as a new section in the relevant doc.
3. Add an entry to `08-decision-log.md` describing the change and the rationale.

---

## The one-paragraph version

> **Baixada** is a quiet, scholarly home for traditional card games of the Italian-Brazilian south. It hosts **Truco**, **Escopa**, and **Bisca** as standalone apps under one umbrella, all built on the same Tactile visual language: walnut, cream paper, ochre Spanish-card frames, bordeaux backs, and a single brass accent. The flagship product is **Truco · Lab** — a CFR-solved opponent and a study tool for the equilibria of 1v1 truco paulista. Other games may earn the `· Lab` suffix later; until they do, they ship as plain `Escopa` and `Bisca`. The brand is bilingual (PT/EN) and refuses both gauchesque cliché and corporate game-app gloss.

---

## What this package is not

- **Not a finished design system.** The Tactile token set is mature for Truco; expect to extend it for Escopa and Bisca surfaces. When you do, document the extension in `02-visual-system.md`.
- **Not a marketing strategy.** It tells you what the brand looks and sounds like, not where to spend ad dollars.
- **Not legally vetted.** "Baixada" is a common Portuguese noun. If/when this project becomes a commercial concern, do a real trademark search before relying on the name.

---

## A note on intent

This brand carries a personal weight. The project's author grew up playing these games on a farm referred to as *a baixada*, with extended family of Italian descent in southern Brazil. The brand is meant to honor that — **without** trading on caricature of the place or the people. When in doubt, choose the warmer, quieter option over the louder one.

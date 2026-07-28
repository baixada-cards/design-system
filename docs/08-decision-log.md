# 08 — Decision Log

This document records *why* the brand is the way it is. New decisions append; old decisions stay even when superseded (mark them with strikethrough or "superseded by"). Date everything.

The format for each entry: a heading with the date, a short statement of the decision, the alternatives considered, and the reasoning that broke the tie.

---

## 2026-04-28 · Umbrella name: Baixada

**Decision.** The umbrella brand is `Baixada`, kept untranslated. Tagline: *a lab for the card games of the south*.

**Status.** The name remains canonical. The tagline is superseded by the
2026-07-28 descriptor decision below.

**Alternatives considered.**

- *Sobremesa* — bilingual-friendly, evocative of post-meal lingering.
- *A Baixada* — same word, with the article. More place-like.
- *Translated* options: *The Long Table*, *Card Table*, *Mesa*, *The Hollow*.
- *Sentimental* options: *Família*, *Reunião*, *Domingo*.
- An invented portmanteau (*Baixacards*, *Baixadinha*).

**Why Baixada won.**

1. It is a real personal proper noun rather than an invented brand name.
2. Specific Portuguese nouns travel as evocative, not awkward, on portfolios for non-Brazilian audiences.
3. It scales — a single-word umbrella works for a multi-game family without renaming.
4. The personal origin does not need to become public-facing copy.

**Risks accepted.**

- Pronunciation is opaque to non-Brazilians. Mitigated by tagline and a phonetic gloss in About; not by changing the name.
- The word *baixada* refers to several real places (Baixada Fluminense, Baixada Santista). Trademarkability is therefore uncertain. We choose the name anyway and accept that the defensible mark is the combination *baixada.cards*, not the bare word.

---

## 2026-04-28 · Per-game naming: real names, with `· Lab` suffix

**Decision.** Games keep their real names: `Truco`, `Escopa`, `Bisca`. The CFR study mode is marked with a `· Lab` suffix: `Truco · Lab`. The umbrella appears as an eyebrow in lockups and as a subdomain in URLs, but does not become part of the game name.

**Alternatives considered.**

- *Game name only* with no suffix; lab-mode unmarked.
- *Game + "Solver"*: `Truco Solver`. More technical.
- *Game + "Baixada"*: `Truco da Baixada`. Folksy.
- *Game + place noun*: `Truco Mesa`, `Truco Sala`.

**Why this won.**

- Renaming Truco would be like renaming Poker. Recognized names rank in app-store search.
- The `· Lab` suffix is a *mode* marker, not a flavor. It scales: when Escopa earns a solver, it becomes `Escopa · Lab` with no system change.
- Brand survives if Escopa and Bisca never get solvers. The lab is a room, not the house.

---

## 2026-04-28 · Lab visibility: medium

**Decision.** The lab is one of the umbrella's pillars but not its definition. The umbrella tagline mentions "a lab"; the homepage hero leads with warmth and the table; the lab is a clearly-marked destination one click in.

**Alternatives considered.**

- *Loud*: "Baixada — a research tool for solved card games."
- *Quiet*: don't mention the lab in the tagline at all.

**Why medium.** Loud loses Escopa and Bisca players who don't care about CFR. Quiet wastes the actual differentiator. Medium works for both audiences.

---

## 2026-04-28 · Visual language: inherit Tactile

**Decision.** Baixada inherits its visual language entirely from the Tactile direction already developed for Truco. No new tokens, fonts, or textures are introduced for the umbrella brand. Per-game accent colors are pulled from the existing `--suit-*` tokens.

**Alternatives considered.**

- A separate "umbrella" palette with its own colors, distinct from Tactile.
- A neutral, brand-only palette (greys + brass) for the umbrella, with each game having its own palette.

**Why inheritance.** Two reasons: (a) the umbrella's job is to feel like the same place as the games, not a separate marketing world; (b) the Tactile palette is already mature and considered, and a parallel system would compete with it.

---

## 2026-04-28 · Per-game accent: Spanish suits

**Decision.** Each game is marked with one of the Spanish suit colors. Truco = copas (red). Escopa = bastos (green). Bisca = oros (ochre). Espadas (black) is reserved for system / tournament use.

**Why this mapping.**

- The colors were already in the system as suit tokens; using them as game accents avoids inventing new ones.
- The mapping has **no rule basis** — Truco doesn't preferentially involve copas. The mapping is a brand convention, chosen for color separation: red/green/ochre are visually distinct at a glance.
- The mapping is **stable**. We commit to it; we don't move it.

---

## 2026-04-28 · Truco · Lab uses brass, not copas

**Decision.** When Truco is in lab register, its accent is brass (`--brass-1`), not copas-red. Casual Truco uses copas-red as expected.

**Why.** The lab is the umbrella's flagship feature, and brass is the umbrella's metal. Promoting brass when the lab is on signals kinship with the umbrella; using copas would put the lab at the same hierarchy level as casual play.

---

## 2026-04-28 · Family references: named achievements, not portraits

**Decision.** The personal/family layer of the brand is delivered through (a) the recurring porch-lamp mark, (b) named hands and plays in handwritten Kalam, (c) lobby room names from the farm. **Not** through stylized portraits of family members.

**Alternatives considered.**

- *Stylized portraits as achievement art.* Rejected — uncanny, hard to do well, locks the brand to one illustrator's style.
- *A single recurring place illustration* (the gate). Kept as a *future* element pending real commissioned art; placeholder until then.
- *Names only.* Adopted as the primary family layer.

---

## 2026-04-28 · Domain top pick: baixada.cards

**Decision.** Primary domain `baixada.cards`. Per-game subdomains `truco.baixada.cards`, `escopa.baixada.cards`, `bisca.baixada.cards`. The lab is a path (`/lab`), not a subdomain.

**Why.** The TLD `.cards` carries meaning; the path-based lab keeps the lab a feature of Truco rather than a separate product.

---

## 2026-04-28 · App-store name order: game-first

**Decision.** On app stores, names lead with the game: `Truco · Baixada`. On the web, names lead with the umbrella: `Baixada · Truco`. Inside the app, just the game name.

**Why.** App-store search ranks leading words; we want generic searches for "Truco" to find us. On the web, the user is browsing the umbrella; the game is the room.

---

## 2026-04-28 · Bilingual posture: equal

**Decision.** Portuguese and English are first-class. Strings are translated, not paraphrased. The brand name `Baixada` and the game names `Truco`, `Escopa`, `Bisca` are never translated. The `· Lab` suffix is the same in both languages.

**Status.** Superseded by the 2026-07-28 trilingual decision below.

**Why.** PT for the cultural truth, EN for the portfolio reach. Equality avoids the hierarchy problem (which one is the "default"?).

---

## 2026-04-28 · Truco app icon: 1 de espadas on shared chassis

**Decision.** The standalone Truco app icon uses the 1 de espadas centered on the bordeaux/brass icon chassis. The Baixada umbrella keeps the brass `B` monogram tile. Future games keep the same chassis and swap only the face: Escopa = 1 de bastos, Bisca = 1 de oros.

**Alternatives considered.**

- A `T` monogram matching the Baixada `B`.
- A fanned 1 + 7 de espadas pair.
- Three card backs to suggest a deal.
- An oversized espadas glyph.
- A custom `T`/sword hybrid.

**Why the 1 de espadas won.** It is the clearest Truco-specific card at app-icon scale, keeps the Spanish-deck vocabulary visible, and still reads as part of the Baixada family because the chassis, brass frame, bordeaux weave, and lamp wash are shared.

**Rules accepted.**

- Do not create a separate `· Lab` icon; Lab is a mode of Truco.
- Do not recolor the chassis per game; only the face changes.
- Use the Truco icon only for standalone Truco surfaces (`truco.baixada.cards`, installed Truco PWA/native app, store listings, lobby tile, and Truco share images). `baixada.cards` chrome keeps the Baixada `B`.

---

## 2026-05-15 · Menu screens use table walnut, not separate chestnut

**Decision.** Paper-on-wood menu surfaces use the same walnut base as the playing table (`#3d2e20`), with a soft vignette as the default title-screen light treatment. The previous darker chestnut stage is retained only as a compatibility selector name in code.

**Alternatives considered.**

- Keep the darker chestnut backing and tune its highlights down.
- Use the table's overhead lamp pool as the default for menu screens.
- Use the table walnut with a center vignette.

**Why walnut vignette won.** The separate chestnut read as a different piece of furniture, and its wider highlight cadence created visible plank seams beside cream paper cards. Reusing the table walnut keeps menus and play in the same room, while the vignette gives central paper cards enough weight without adding another material.

---

## 2026-07-14 · Study charts use five CVD-safe action colors

**Decision.** Strategy charts use a five-color Okabe–Ito subset for action
data: blue (play highest / accept), vermillion (play lowest / fold), teal
(hide highest), orange (play middle / hide lowest), and purple (raise). The
mapping is shared by the Lab and guide figures through the chart-cell
renderer. Labels, hover values, percentage filtering, and the pressed legend
state remain part of the encoding; color never stands alone.

**Alternatives considered.**

- Keep the muted suit/brass palette: its ochre and brass colors have weak
  separation on paper, while its red/green pair is risky for red–green CVD.
- Give every abstract action role a unique color: unnecessary visual noise,
  because no rules-legal decision presents all nine roles at once.

**Why five colors.** A later-round card decision can legally offer exactly
five simultaneous actions: show either of two cards, hide either of two
cards, or raise. The palette gives that full set distinct colors. Orange is
reused for play-middle and hide-lowest because hiding is illegal in the
first, three-card round, so those roles cannot coexist.

## 2026-07-14 · Study charts reserve warm yellow for materials

**Decision.** Sky blue (`#56b4e9`) replaces orange as the fifth Study action
color. It represents play-middle / hide-lowest; the prior chart-palette
decision above is superseded only on that point. Brass and card-edge yellows
are reserved for the room's material language, while per-action win and cost
figures stay graphite-neutral rather than borrowing action colors.

**Alternatives considered.**

- Keep orange because it is a canonical Okabe–Ito color.
- Retain red/green performance values as a separate success/failure cue.

**Why sky blue and neutral figures.** The yellow-orange action segment sat
too close to the brass controls and ochre card frames, making data read as
decoration. Sky blue remains part of the CVD-safe Okabe–Ito set and separates
the full five-action late-round decision from the warm material palette.
Neutral ledger values keep their meaning in the number and signed cost, not a
second competing color system.

## 2026-07-23 · Brand governance lives in a public design-system repository

**Decision.** The Baixada guide, canonical production tokens, and reusable
React marks live together in `baixada-cards/design-system`. Product
repositories consume an exact reviewed revision; they do not independently
evolve copied brand sources.

**Alternatives considered.**

- Keep the guide and shared marks inside the Truco application.
- Put documentation in the organization profile and leave components in each
  product.
- Split brand governance, CSS tokens, and React marks into three repositories.

**Why one design-system repository.** The visual identity belongs to Baixada,
not to its first game. Keeping governance and implementation adjacent makes a
token or mark change reviewable against its rationale, while one small
repository avoids artificial package boundaries. Historical canvases remain
as design evidence; `src/` is the single production API.

## 2026-07-28 · Rich photographic walnut and warm cotton stock are canonical

**Decision.** The approved rich-walnut photograph becomes the canonical table
material for Baixada products. Product repositories provide an optimized,
local copy through `--walnut-surface-image`; the design system retains a
deterministic CSS fallback. Score pads, dialogs, Guide pages, Lab panels, and
cards move to one warmer cotton-stock family. Functional and transient text is
Inter; Cormorant remains editorial; Kalam is reserved for actual marginalia.

**Alternatives considered.**

- Keep the synthetic CSS grain on every surface.
- Apply the photograph only to the live table and leave the Lab and Guide as
  separate visual systems.
- Make every overlay dark translucent software chrome.

**Why the material system won.** The richer wood gives the table the depth the
brand promises, while one related paper family makes play, study, help, and
reference surfaces feel made together. A shared fallback preserves portability
without forcing each product or route to invent its own wood. Paper dialogs
keep dense controls legible and avoid turning the product into generic dark UI.

## 2026-07-28 · Descriptor makes no geographic-origin claim

**Decision.** The umbrella wordmark descriptor is *card games and optimal
play*. Its canonical translations are *jogos de carta e estratégia ótima*
(PT-BR) and *juegos de cartas y estrategia óptima* (ES). Public copy does not
describe the games as “from the south” or the software as “made in the south.”
English, Brazilian Portuguese, and Spanish are first-class.

**Alternatives considered.**

- Keep *a lab for the card games of the south* as an evocative origin story.
- Use *card games and counterfactual-regret minimization*, which is precise but
  too long for the wordmark and too narrow for future games.
- Remove the descriptor entirely.

**Why this wording won.** Baixada's name carries a real personal association
with southern Brazil, but Truco and the other games have broader histories,
and the software is made wherever its author happens to be. The descriptor
should say what the project contributes—play and study—without converting a
personal story into a false provenance claim. Spanish is already a supported
product language and therefore belongs in the brand contract, not as an
afterthought.

## Future decisions to record

When adding a new decision, copy the heading format above. Always include alternatives and the tie-breaker. **Resist the urge to delete superseded decisions.** Mark them as superseded and link to the new entry.

Examples of decisions that will need recording soon:
- The first illustrator for the postcard, when commissioned.
- Motion language (when the games' core animations stabilize).
- The first hidden Easter egg, when shipped (log it in `06-easter-eggs.md` and link from here).
- Trademark posture, when this becomes a commercial project.

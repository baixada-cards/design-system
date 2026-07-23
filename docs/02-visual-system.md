# 02 — Visual System

Baixada inherits its visual language from **Tactile**, the design direction established for Truco. New product surfaces should use these tokens directly. Do not introduce new colors, fonts, or textures without updating this document.

The canonical token file is shipped in `../src/tokens.css`. Consume it from an
exact reviewed design-system revision and reference the variables; do not
hardcode values. `assets/tokens.css` is retained only so the historical design
canvas remains viewable.

---

## The two registers

Tactile expresses two coexisting moods:

- **The table** — walnut wood, cream paper, ochre-framed Spanish cards. Warm, lit by a single overhead lamp. This is the dominant register; nearly every surface lives here.
- **The study** — the same room at night, paper notes pinned up under brass desk-light. Same materials, more contrast, hand-written marginalia. This is where `· Lab` lives.

We do not have a separate "dark mode" — the lamp light + walnut already function as a dim register. We do not have a separate "light mode" — the cream paper already functions as a light surface against walnut.

---

## Color palette

All production values are in `../src/tokens.css` as CSS custom properties.

### Wood — the table surface

| Token | Hex | Use |
|---|---|---|
| `--wood-0` | `#1f1610` | Deepest shadow under cards, page background at very low light |
| `--wood-1` | `#2a1e15` | Shadow areas of the walnut texture |
| `--wood-2` | `#3d2e20` | **Default walnut surface** — page background |
| `--wood-3` | `#5a4230` | Mid grain, secondary surfaces |
| `--wood-4` | `#785538` | Highlight grain, never used as a fill |

### Paper — score pad, lab notes, light surfaces

| Token | Hex | Use |
|---|---|---|
| `--paper-0` | `#ede4d0` | **Default cream paper** — light surface fill |
| `--paper-1` | `#e4d9bf` | Recessed paper areas, sticky-note backgrounds |
| `--paper-2` | `#d5c7a4` | Paper edge / border on cream surfaces |
| `--study-stock` | `#e9e7e1` | Neutral card stock for long-form study guides; less yellow than score-pad paper |
| `--study-stock-edge` | `#cfcdc5` | Edge and rule for study-stock surfaces |
| `--ink-0` | `#2a241b` | **Primary text on paper** |
| `--ink-1` | `#4a4032` | Secondary text on paper |
| `--ink-2` | `#7a6d56` | Tertiary text, kickers, captions |

### Card — the Spanish-deck card itself

| Token | Hex | Use |
|---|---|---|
| `--card-0` | `#f6edd7` | Card face top |
| `--card-1` | `#ede2c3` | Card face bottom (gradient) |
| `--card-edge` | `#c8a040` | **The signature ochre frame** |
| `--card-edge-deep` | `#9a7a2e` | Embossed shadow on the frame |
| `--card-back-a` | `#5a2a26` | **Bordeaux card-back base** |
| `--card-back-b` | `#3a1a18` | Bordeaux card-back deep |

### Suit colors — used as per-game accent rules

| Token | Hex | Suit | Game it identifies |
|---|---|---|---|
| `--suit-red` | `#a23c2c` | Copas | **Truco** accent |
| `--suit-green` | `#4a5a2a` | Bastos | **Escopa** accent |
| `--suit-ochre` | `#b88528` | Oros | **Bisca** accent |
| `--suit-black` | `#1e1a14` | Espadas | Reserved (e.g. tournaments, system messages) |

The mapping of suit to game is a brand convention, not a rules-of-the-game decision. It is stable.

### Brass — the metal accent

| Token | Hex | Use |
|---|---|---|
| `--brass-0` | `#8a6a28` | Deepest metal — engraved details |
| `--brass-1` | `#a88540` | **Default brass** — primary accent, plaques, dividers |
| `--brass-2` | `#d4b36a` | Polished metal — used on dark surfaces |
| `--brass-hi` | `#ecd999` | Specular highlight, lamp glow |

Brass is the **only** metallic accent. We do not introduce silver, copper, or gold-foil effects.

### Study action colors — CVD-safe data encoding

Strategy charts use this five-color Okabe–Ito subset for **action data only**;
it does not replace the suit or brass brand accents. Labels, percentages,
hover values, and pressed states remain required: color is never the only
meaning-bearing cue.

| Token | Hex | Strategy role |
|---|---|---|
| `--study-action-blue` | `#0072b2` | Play highest; accept |
| `--study-action-vermillion` | `#d55e00` | Play lowest; fold |
| `--study-action-teal` | `#009e73` | Hide highest |
| `--study-action-sky` | `#56b4e9` | Play middle; hide lowest |
| `--study-action-purple` | `#cc79a7` | Raise |

Sky blue is deliberately reused because hides are illegal in the first round:
play-middle and hide-lowest cannot be valid together. This gives every
possible five-action late-round decision a distinct color.

Warm yellow remains exclusive to brass and card edges, so data does not
compete with the room's material language.

---

## Typography

Three faces, three jobs. Loaded from Google Fonts.

### Cormorant Garamond — display & wordmarks
- **CSS:** `--font-serif`
- **Italic, weight 500** is the *Baixada* wordmark default. Tagged `font-style: italic; font-weight: 500;` everywhere.
- **Roman, weight 400-500** for editorial titles inside lab/study pages.
- **Letter-spacing** typically `-0.02em` at large sizes, neutral at body sizes.
- Never use Cormorant below 18px — it disappears.

### Inter — UI & utility
- **CSS:** `--font-sans`
- For all functional UI: buttons, form fields, navigation, body copy in marketing.
- Weights in use: 400, 500, 600, 700.
- Kicker labels: weight 600, `letter-spacing: 0.22em` to `0.42em`, uppercase, tracked. Used everywhere a small all-caps label is needed.

### Kalam — the warmer voice
- **CSS:** `--font-hand`
- Used **sparingly**: achievement names, rule annotations on the game table, marginalia in the lab, signature lines.
- **Never** as primary UI. Never as a button label. Never as body copy.
- Sizes 14–22px work best.

### JetBrains Mono — numbers, hands, paths
- Loaded inline (no token; declared `font-family: 'JetBrains Mono', ui-monospace, monospace`).
- For tabular numbers, hand notation, file paths in handoffs, domain names in copy.
- Tabular-nums variant where alignment matters.

### Pairings cheat-sheet

```
Display heading        →  Cormorant 500 italic, -0.02em
Editorial heading      →  Cormorant 500 roman
Section eyebrow        →  Inter 600, 0.3em letter-spacing, uppercase, ink-2
Body copy              →  Inter 400, 1.55 line-height, ink-1
UI button              →  Inter 600, 0.04em, no transform
Achievement title      →  Kalam 400, 18-20px, ink-0
Hand-written note      →  Kalam 400, 14-17px, ink-1 or ink-2
Numeric data           →  JetBrains Mono 500, tabular-nums
```

---

## Textures

Two are canonical, defined as utility classes in `tokens.css`.

### `.walnut`

A layered repeating-linear-gradient + radial-gradient stack that produces the walnut grain. Used on every "table" surface. Do not replace with an image; the CSS version is crisp at any zoom and theme-stable.

### `.paper`

A subtler stack producing mottled cream with faint horizontal ruling. Used on every "paper" surface — score pad, lab note panels, marketing pages.

### Lamp light overlay

Defined as `--lamp` (a radial gradient). Apply as an overlay to walnut surfaces to suggest the overhead lamp. Always centered around the focal point of the layout, not always the geometric center.

### What we don't have

- No noise filters beyond what's already in the textures.
- No film grain.
- No skeuomorphic shadow casts beyond `--shadow-card` and `--shadow-card-low`.
- No glassmorphism, neumorphism, or backdrop-filter blur.

---

## Ornaments

A small, named set. Each lives in `assets/ornaments.jsx` as a React component.

- **`<PorchLamp>`** — the brass-shade hanging lamp. The umbrella's recurring mark. Single light source per surface.
- **`<SuitGlyph kind="…">`** — Spanish-suit glyphs (`oros`, `copas`, `espadas`, `bastos`). Geometric, not illustrative.
- **`<SuitRow>`** — all four suits inline; used as a quiet ornament in footers and section breaks.
- **`<Plaque>`** — the brass-foil plaque used for the `· Lab` suffix. Inter 600, paper-on-brass.
- **`<HandUnderline>`** — the wavy hand-drawn underline beneath wordmarks. Brass color by default.

These are the canonical ornaments. **Do not draw new SVG illustrations** for the brand without explicit discussion. If you need an illustration we don't have, propose it and we'll either commission it or define a placeholder convention.

---

## Shadows & elevation

Two shadow tokens, intentionally limited.

| Token | Use |
|---|---|
| `--shadow-card` | Cards lying on the table. Default elevation. |
| `--shadow-card-low` | Inline UI: plaques, paper notes, secondary cards. Very subtle. |

Drop shadows from the brand are always **warm-tinted black** (rgba on the deep wood values), never neutral grey, and never blue.

---

## Motion

Not yet codified — we will write a `09-motion.md` once the game's core animations stabilize. Until then: respect `prefers-reduced-motion`, avoid bouncing easings, prefer the dignity of slow ease-outs over playful overshoots.

# 03 — Logo System

This document is the rulebook for the Baixada wordmark, the per-game lockups, and how they appear in product. The canvas at `assets/Baixada Branding.html` shows them rendered; this doc is the how-to-build-it spec.

---

## The master lockup — Baixada

**Form:** Cormorant Garamond, italic, weight 500, letter-spacing `-0.02em`, in `--paper-0` on walnut, or `--ink-0` on paper.

**Hand-drawn underline** (`<HandUnderline>`): brass on dark backgrounds, brass on light backgrounds. Width is roughly 60–80% of the wordmark.

**Tagline** (optional, used only on hero surfaces): Inter 500, 13px, letter-spacing `0.42em`, uppercase, in `--brass-2` on dark or `--ink-2` on light.

```
                ──── ✶ ────
                  Baixada                 ← Cormorant 500 italic
              ~~~~~~~~~~~~~~              ← brass HandUnderline
       A LAB FOR THE CARD GAMES OF THE SOUTH   ← Inter 500, tracked
```

**Minimum size:** 48px cap-height. Below that, switch to the **stamp monogram** (the bordeaux tile with a brass `B`).

**Clear space:** at least 0.75× the cap-height of "B" on every side. No badges, no plaques, nothing intruding.

---

## The three umbrella registers

| Register | When to use | Components |
|---|---|---|
| **Master · italic serif** | Marketing hero, About pages, splash, anywhere the brand has room to breathe. | Wordmark + HandUnderline + (optional) tagline. |
| **Stamp · monogram tile** | App icons, favicons, social-media avatars, anywhere ≤ 64×64. | Bordeaux rounded square, brass `B` italic, brass inner rule. |
| **Horizontal · with mark** | Nav bars, footers, document headers, anywhere we need an inline lockup. | `<PorchLamp>` mark + wordmark on a single line + (optional) tracked sub-label. |

Each is shown in artboard A3 of the canvas.

---

## Per-game lockups

The system: an Inter eyebrow that says **"Baixada"**, a short brass divider, then the game name in Cormorant italic. Optional `· Lab` plaque underneath.

```
        BAIXADA              ← Inter 600, tracked, ink-2
          ─                   ← brass divider, 28px wide
         Truco                ← Cormorant 500 italic, 76px
        ┌─────────┐
        │ · LAB  │            ← brass Plaque (only when applicable)
        └─────────┘
```

### Per-game accent colors

When the game's wordmark or accent rule is colored, use the suit assigned to it:

| Game | Accent | Suit |
|---|---|---|
| Truco | `--suit-red` (#a23c2c) | Copas |
| Truco · Lab | `--brass-1` (#a88540) | Brass overrides — the lab is a *brass* register |
| Escopa | `--suit-green` (#4a5a2a) | Bastos |
| Bisca | `--suit-ochre` (#b88528) | Oros |

**Truco · Lab is the only mode that uses brass instead of its game's suit.** This is intentional: the lab is the umbrella's flagship feature; brass is the umbrella's accent; the kinship is visible in the color.

### Wordmark italics

All four game names render in Cormorant **italic**. We do not switch to roman for any of them. Italic is what makes the marks feel hand-set rather than software-generated.

---

## App icons

Two formats. **Always ship both** for any platform that supports it.

The Baixada umbrella still uses the `B` monogram tile below. The Truco app icon
is now defined by `09-truco-icon.md`: the 1 de espadas on the shared
bordeaux/brass chassis. That spec supersedes the older `T`-monogram idea for
Truco while preserving the same family chassis.

### iOS / macOS / Android — rounded square

- **Background:** bordeaux gradient (`--card-back-a` → `--card-back-b`).
- **Border (inner):** 1.5px brass-1 rule, inset 6% of the icon's edge length.
- **Glyph:** a single Cormorant italic letter.
  - **Baixada umbrella:** `B`.
  - **Truco:** see `09-truco-icon.md`; it uses the 1 de espadas, not a `T`.
  - **Escopa:** `E`. **Bisca:** `B` (same letter as umbrella — disambiguate by context; the umbrella icon is never installed alongside individual games).
- **Glyph color:** `--brass-2`.

### Favicon — 32×32

A simplified version: bordeaux fill, no inner rule when the frame disappears at small sizes. Baixada uses the brass `B`; Truco uses the 1 de espadas silhouette from `09-truco-icon.md`.

---

## When NOT to use the wordmark

- Inside the game's own play surface — the player is already in `Truco`; rendering the wordmark again is noise.
- On loading spinners — use the porch-lamp mark alone, not the wordmark.
- In running prose — the brand becomes a regular noun: "Baixada is shipping Truco first." No special styling, no italics; just the noun.

---

## Don't list

A short, opinionated set of things never to do.

1. **Do not** rasterize the wordmark. Always render with live type.
2. **Do not** stretch, condense, or skew the wordmark. If it doesn't fit, switch to the monogram.
3. **Do not** outline the wordmark. No stroke effects.
4. **Do not** drop-shadow the wordmark. The HandUnderline is the only graphic associated with it.
5. **Do not** set the wordmark in any color other than `--ink-0`, `--paper-0`, or `--brass-1`. No "purple Baixada" for Pride; no "red Baixada" for Christmas. The mark's color carries meaning (paper-on-walnut = warm; ink-on-paper = quiet; brass = ceremonial).
6. **Do not** combine the wordmark with another logo on the same line without at least 3× clear-space between them.
7. **Do not** put the wordmark inside a containing shape ("Baixada in a circle"). The HandUnderline is the only enclosure.

---

## Lockups in code

Use the reviewed components exported from `../src/index.ts`:

- Master umbrella: `<BaixadaWordmark>`.
- Horizontal register: `<BaixadaHorizontalLockup>`.
- Small mark: `<BaixadaStamp>`.
- Per-game: `<BaixadaGameLockup game="Truco" suffix="· Lab">`.

The sources in `assets/artboards.jsx` preserve the original exploration and
remain useful as visual reference, but they are not the production API. If a
surface needs a new variant we have not built, propose it via
`08-decision-log.md` first.

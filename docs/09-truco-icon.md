# 09 — Truco App Icon

The umbrella `B` mark (see `03-logo-system.md`) covers `baixada.cards` and the umbrella app. Truco — as the first standalone game — needs its **own** app icon for the installed PWA, app-store listings, lobby tile, and OG share image.

This doc specifies the Truco icon, the family system it belongs to, and the rules for when each icon (Baixada vs Truco) is used. The canvas at `assets/Truco Icon.html` shows everything rendered.

---

## The mark

**Form:** the **1 de espadas** — a single Spanish playing card, centered on the bordeaux card-back chassis, with a brass inner frame and the lamp wash from above.

```
      ┌──────────────────────┐
      │ ░░░░░░░░░░░░░░░░░░░░ │   ← bordeaux card-back, diagonal weave
      │ ┌──────────────────┐ │   ← brass inner frame
      │ │   ┌──────────┐   │ │
      │ │   │ 1        │   │ │
      │ │   │          │   │ │   ← cream Spanish card
      │ │   │    ✦     │   │ │     with espadas glyph
      │ │   │          │   │ │
      │ │   │        1 │   │ │
      │ │   └──────────┘   │ │
      │ └──────────────────┘ │
      └──────────────────────┘
```

**Why the 1 de espadas:** in a 40-card Spanish deck, the *1 de espadas* is
truco's highest card after the matched manilhas — the most iconic single card
in the game. It identifies the Spanish-deck tradition without making a
geographic-origin claim. It scales — at 16px the numeral disappears and the
bordeaux+ochre+espadas-black silhouette still reads as Truco.

**The chassis is shared.** Same bordeaux gradient, same diagonal weave, same brass inner frame, same lamp wash as the Baixada `B` monogram tile. **Only the face changes per game.** That kinship is the entire family system.

---

## Specs

| Element | Value |
|---|---|
| Tile shape | Rounded square. Radius = 22% of edge length (matches iOS app-icon convention). |
| Tile background | `linear-gradient(155deg, --card-back-a 0%, --card-back-b 100%)` |
| Tile weave | Diagonal stripes at 45°, alternating `rgba(212,179,106,0.07)` and `rgba(0,0,0,0.10)`, blend `overlay`. Stripe width ≈ 2.5% of edge. |
| Lamp wash | `radial-gradient(ellipse 70% 55% at 50% 28%, rgba(255,220,160,0.18) 0%, transparent 80%)` |
| Inner frame | 1px solid `--brass-1`, opacity 0.7, inset 5.5% of edge length. **Drop the frame at ≤ 32px** — it disappears anyway, and the extra pixels go to the card. |
| Card | Single Spanish card, cream stock, ochre frame. Card width ≈ 62% of tile edge. Centered, upright (no tilt). |
| Numeral | Cormorant Garamond 600, color `--suit-black`, opposing corners. |
| Suit glyph | `<SuitGlyph kind="espadas">` from `ornaments.jsx`. Centered on the card, ~50% of card width. |

The production implementation is `<TrucoIcon size={N} />` from
`../src/TrucoIcon.tsx`. It composes the shared `<BaixadaIconTile>` chassis and
`<SpanishIconCard>` face. The older `assets/truco-*.jsx` files preserve the
direction study; do not treat them as a competing product API.

---

## Sizes & exports

| Use | Size | Notes |
|---|---|---|
| Favicon (`/favicon.ico`) | 32×32 | Drop the inner brass frame. Numeral disappears; the bordeaux+ochre+espadas silhouette carries it. |
| Favicon (modern) | 16, 32, 48 | Provide all three in `.ico`. |
| Apple touch icon | 180×180 | Full chassis with frame. No transparency — iOS already rounds. |
| PWA manifest | 192, 512 | `purpose: "any maskable"`. The chassis already has safe padding for masks. |
| Android adaptive | 432×432 foreground | Render the card-only (face) on a transparent canvas; the bordeaux background goes in the `background` layer. |
| App Store listing | 1024×1024 | Same composition, no rounding; the store rounds. |
| OG / share | 1200×630 | Use the **horizontal Truco lockup** (icon + wordmark) — see `assets/Truco Icon.html → T5`. |

Provide both **PNG raster exports** for stores and a **live React component** for product surfaces. Do not rasterize for in-app use.

---

## The family

The icon system across the Baixada apps:

| App | Face | Suit accent on face |
|---|---|---|
| **Baixada** (umbrella) | Cormorant italic `B` in `--brass-2` | — |
| **Truco** | 1 de espadas | `--suit-black` (espadas) |
| **Escopa** *(future)* | 1 de bastos | `--suit-green` (bastos) |
| **Bisca** *(future)* | 1 de oros | `--suit-ochre` (oros) |

Same bordeaux chassis. Same brass frame. Same lamp. The face is the only thing that changes. **Do not invent new chassis treatments per game** — that breaks the family.

> A note on the Baixada `B` icon: it remains the monogram tile spec'd in `03-logo-system.md`. The Truco icon is a **sibling**, not a replacement.

---

## When to use which

The favicon and the page title belong to the **domain you're on**, not the game you're playing. They do not shapeshift mid-session.

### `baixada.cards` (umbrella, lobby, marketing, account)

- **Favicon:** Baixada `B` monogram. Always.
- **Page title:** `Baixada — <page>`. e.g. `Baixada — Truco` on the in-lobby Truco landing page.
- **Apple touch icon / PWA install icon:** Baixada `B`.

When the user opens the Truco room *within the lobby SPA*, the favicon does **not** change. They are still in the house.

### `truco.baixada.cards` (the standalone Truco web app) and the installed Truco PWA / native app

- **Favicon:** Truco icon (1 de espadas).
- **Page title:** `Truco · <mode> — Baixada`. e.g. `Truco · Lab — Baixada`. Brand trails as the surname.
- **Mid-match:** append the score in parentheses. e.g. `Truco · Lab (4–2) — Baixada`. Useful when a player has many tabs.
- **Apple touch icon / PWA install icon:** Truco.

### App-store listing names

Per `01-naming.md`: list with the game name first, brand as suffix.

- **iOS / Google Play:** `Truco · Baixada` (display name), `Truco — Baixada` (full).
- **Reverse on the web** (where the brand carries the search): `Baixada — Truco`.

### Lobby tile on `baixada.cards`

The Truco icon **does** appear inside the lobby — on the Truco game tile, alongside the other games. Same tile size as the other lobby tiles. This is the only place where multiple game icons are visible at once.

---

## OG / share image

When a Truco match or lab session is shared, the OG image is **horizontal**:

- 1200×630, bordeaux background, lamp wash from upper-right.
- Truco icon at left (88×88), then the lockup: `BAIXADA` (Inter 600 tracked, brass-2) above, `Truco · Lab` (Cormorant 500 italic, paper-0) below, then a one-line tagline in brass-2.

See `assets/Truco Icon.html → T5` for the full composition. Re-render on demand at 1200×630 — do not pre-rasterize multiple variants.

---

## Don't list

1. **Do not** tilt or rotate the card on the icon. The 1 de espadas is always upright. (We tested a tilted variant; it fights the icon-grid alignment on phone homescreens.)
2. **Do not** add a second card peeking behind the first on the icon. Reserve that composition for the *hero illustration* on the Truco product page, not the launcher.
3. **Do not** swap the chassis bordeaux for the suit's color (i.e. no green chassis for Escopa). The chassis is the brand; only the face is the game.
4. **Do not** add a `· Lab` plaque to the icon. The lab is a *mode* of the Truco app, not a separate app — there is one Truco icon, not two.
5. **Do not** render the icon without the lamp wash. The wash is what makes the chassis feel lit-from-above rather than flat.
6. **Do not** use the Truco icon on `baixada.cards` chrome (favicon, page title prefix). It belongs to the Truco surface only.

---

## Files

- `assets/truco-icon.jsx` — `<IconTile>`, `<SpanishCard>`, `<SpanishCardBack>`, and the six face components (A–F). The icon family is composed from these primitives.
- `assets/truco-artboards.jsx` — `<TrucoIcon direction="A" size={N} />` plus the canvas artboards.
- `assets/Truco Icon.html` — the canvas, viewable as a single artifact.

When you wire the icon into a real product surface:

1. Import `<TrucoIcon size={N} />` from the design-system package and use it directly.
2. For raster exports (favicons, store icons), render the React at the target size in a sandbox HTML page and screenshot — don't hand-trace.
3. For Escopa or Bisca, use `<FutureGameIcon game="Escopa">` or
   `<FutureGameIcon game="Bisca">`; propose a new face through the decision log
   before extending the family.

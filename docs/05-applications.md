# 05 — Applications

Where the brand actually shows up. Each surface has a default lockup, a default register, and a default register switch.

## Web — `baixada.cards`

**Homepage.** Walnut background, the master umbrella lockup centered, with a single porch-lamp mark above it. Tagline below the HandUnderline. Below the fold: a card grid showing the three games (Truco active, Escopa and Bisca as "soon" tiles).

**Game-room pages** (`truco.baixada.cards`, etc.). Walnut background. The per-game lockup top-left of the nav. Inside the app: just the game name, no umbrella.

**Lab** (`truco.baixada.cards/lab`). The walnut becomes slightly darker (use `--wood-1` instead of `--wood-2` as the base), the brass becomes more prominent, lab-style paper notes pinned in margins. The `· Lab` plaque appears in the top nav.

**About / press / portfolio.** Paper background. Editorial. Cormorant 400-500 roman for body, italic for pull-quotes.

**Footer (umbrella).**
```
Baixada · est. 2026 · made in the south
PorchLamp icon — small, brass-0
links: about · press · github · contact
```

## Mobile apps

**One app per game.** Three planned: `Truco`, `Escopa`, `Bisca`. The umbrella is web-only.

- **Splash:** the per-game lockup centered on walnut. The umbrella eyebrow is included.
- **App icon:** the shared bordeaux/brass chassis with the game's face. Truco uses the 1 de espadas from `09-truco-icon.md`; future games follow that family rule.
- **Inside the app:** game-name only; umbrella appears in About.

**Truco · Lab is a mode toggle inside the Truco app**, not a separate app. The toggle moves the user from the casual surface to the lab surface; the app icon does not change. (Power-users get a quick-launch shortcut from the app icon's long-press menu, on platforms that support it.)

## App-store listings

| Field | Value |
|---|---|
| **App name (Truco)** | `Truco · Baixada` |
| **App name (Escopa)** | `Escopa · Baixada` |
| **Subtitle (Truco)** | `truco paulista, with a lab` |
| **Subtitle (Escopa)** | `escopa de quinze` |
| **Description, opening line** | "Baixada makes quiet, considered card-game apps for the games of the south." |

The game name leads on stores; the umbrella follows. This is the inverse of the web; documented in `01-naming.md`.

## Social media

- **Profile name:** `Baixada` (the umbrella runs the social presence).
- **Avatar:** the stamp monogram (bordeaux + brass `B`).
- **Banner:** master lockup on walnut, lamp above.
- **Posts about a specific game:** lead with the per-game lockup, then carousel into screenshots.

We do not run separate social accounts for individual games. One umbrella account, one voice.

## Marketing & press surfaces

If we ever produce a press kit, it lives in `press/` and contains:

1. The lockups as SVGs at multiple sizes (master, stamp, horizontal, per-game ×3).
2. The icon set at platform sizes.
3. A one-page fact sheet (this `00-README.md` essentially).
4. Two screenshots per game, lab-mode and casual-mode.
5. A 200-word boilerplate (the "one-paragraph version" from the README, padded).

## Print / handout surfaces

Should we ever need a printed business card or postcard:

- **Stock:** uncoated cream cover, ~280gsm. Brass foil for the underline if budget permits, otherwise printed in `--brass-1`.
- **Front:** wordmark large, tagline small, edge-bleed walnut on the back.
- **Back:** porch-lamp mark, web URL, nothing else.

## Forbidden surfaces

The brand should never appear on:

- Generic SaaS marketing templates ("hero + 3 features + testimonials + CTA").
- Loyalty / streak / push-notification surfaces.
- Sponsorship slots in third-party content where we'd be one of many logos.
- Banner ads. We don't advertise via banners.

## Cross-surface consistency rules

1. Every surface either has the lamp light or has paper. They don't coexist on the same surface (paper is the lab pinned to a wall, not a paper desk under a walnut canopy).
2. Brass appears at most twice per surface — usually once as the wordmark accent and once on the divider.
3. The handwritten Kalam voice appears at most once per surface. If a surface has two warm-voice strings, kill the weaker one.
4. Card mocks on the brand surfaces always show **Spanish suits**, never French (no spades/hearts/diamonds/clubs in marketing).

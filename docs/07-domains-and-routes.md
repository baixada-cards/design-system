# 07 — Domains & Routes

The URL architecture for Baixada and its games.

## Top recommendation

**Umbrella domain: `baixada.cards`**

- The TLD is *meaning*, not just a TLD. "Baixada cards" reads as a phrase.
- Short, easy to type after the leading `baixada.`.
- Less crowded than `.com` for this kind of name; the full string is more likely to be available.
- Reads well in print and on cards.

If `baixada.cards` is unavailable, fallbacks in order:

1. **`baixada.games`** — solid, slightly more generic.
2. **`jogarna.com`** — "to play at"; PT-first, lyrical, reads less obviously as a brand.
3. **`baixada.gg`** — skews gamer; reserve for if/when an esports register is wanted.
4. **`sobremesa.cards`** — Plan B if "Baixada" doesn't end up resonating after launch.

## URL structure

```
baixada.cards/                     — umbrella homepage
baixada.cards/about                — about, dedication, press
baixada.cards/handbook             — public-facing product handbook (optional)

truco.baixada.cards/               — Truco casual play
truco.baixada.cards/lab            — Truco · Lab (CFR study mode)
truco.baixada.cards/lab/hand/:id   — specific hand in the lab

escopa.baixada.cards/              — when Escopa ships
bisca.baixada.cards/               — future
```

**Rule:** the per-game site lives at `<game>.baixada.cards`. The lab is a `/lab` path on the per-game site, not a separate subdomain. This keeps the lab perceived as a feature *of* Truco, not a separate product.

## Mobile-app universal links

iOS Universal Links and Android App Links should resolve to the same paths:

- `truco.baixada.cards/match/:id` opens in the Truco app if installed; falls back to web otherwise.
- `truco.baixada.cards/lab/hand/:id` opens the lab surface; lab-mode toggle is auto-set.

## Email

If the project ever has email addresses:

- `hello@baixada.cards` — public.
- `support@baixada.cards` — public, only after launch.
- Personal addresses use the project author's existing setup; do not create per-game inboxes.

## Social handles

Reserve the following on every platform we plan to use:

- `@baixadacards` (preferred)
- `@baixada` (if available; otherwise `@baixadacards`)

We do not reserve per-game handles. The umbrella runs social.

## App-store identifiers

Bundle / package IDs follow a stable scheme:

```
cards.baixada.umbrella     — the website (PWA, if shipped)
cards.baixada.truco        — Truco app
cards.baixada.escopa       — future
cards.baixada.bisca        — future
```

Use lowercase, dot-separated, in reverse-domain order. Never put `lab` in a package ID — Truco · Lab is a mode of the Truco app, not a separate package.

## Trademark / legal

Not vetted at time of writing. *Baixada* is a common Portuguese noun referring to lowland regions (notably Baixada Fluminense and Baixada Santista in Brazil). If/when this becomes a commercial concern, do a real trademark search. The combination *baixada.cards* is more defensible than the bare word.

## What we don't reserve

- TLDs in languages we don't speak (`.it`, `.es`, `.pt` — unless we localize).
- Permutations like `baixada-games.com`, `baixadacardgames.com`. The single string `baixada` is the brand; permutations dilute it.
- `truco.com`, `escopa.com`, `bisca.com`. Generic game names belong to nobody; we should not try to own them.

# 06 — Easter Eggs & Family References

This document covers how the personal layer of the project — the farm called *a baixada*, the family who plays there — becomes part of the brand without becoming kitsch.

## The principle

> **Warmth without caricature. Personal without inside-joke gatekeeping.**

A new user with no connection to Brazilian-Italian rural culture should still feel the brand is warm. The personal layer is *texture*, not gate-keeping content.

## What works

### Named hands & plays — handwritten

Specific hands or moments in a game get hand-written names. They appear as achievement titles, played-hand annotations, and (rarely) lab anecdotes.

**Format:** Kalam font, 18–22px, `--ink-0` on paper, lowercase except proper names.

**Examples (initial set, expand as the game ships):**
- *o Truco do Vô João* — won a hand on a 12-point envido bluff with 4-5-6.
- *a Escopa da Tia Marisa* — three escopas in a single deal.
- *o Domingo na Baixada* — played a full round of all three games in one session.
- *último jogo da noite* — won a match after midnight.
- *meio truco* — won a match where the opponent never accepted a single truco call.

**Rule:** real names of real family members appear only with that person's permission. Otherwise, use generic-personal placeholders (*o Vô*, *a Tia*) or invent.

### The porch-lamp mark

A single brass mark, appearing once per surface, as a quiet through-line connecting umbrella and games. Defined as `<PorchLamp>` in `assets/ornaments.jsx`.

### Lobby room names from the farm

When the games' multiplayer lobby ships, room names reference the farm:

- *a sala* — the main room; default room.
- *a varanda* — the porch; for casual games.
- *a baixada* — invitation-only rooms.
- *a cozinha* — late-night rooms; opens after 22:00 local.

Users can also name custom rooms. The defaults set the tone.

### One illustrated postcard

The umbrella homepage carries a single illustration: the gate of the farm, hand-printed in one ink color (use `--ink-0` on paper). Commission this; do not generate it. If we cannot commission, use a stylized type-only treatment in its place.

## What to avoid

### Stylized portraits of family members

Hard to do well, easy to make uncanny. Even by skilled illustrators, portraits of someone you know will read as "off" to people who know them. Skip entirely. Family members appear by **name in achievement strings**, not by face.

### Dialect-heavy copy in the UI

The warm voice already does the personal work. Adding *bah*, *tchê*, or heavy regional Portuguese into UI strings turns warmth into pastiche.

### Generative folk illustration

No AI-generated woodcut, no AI-generated farm scenes. Either commission real illustration or use no illustration. The brand has earned the right to that level of care.

### Gauchesque clichés

Chimarrão imagery, bombachas, gaucho hats. Even though the geography is the south, these are the *most expected* visual cues and therefore the least interesting. They also reduce a regional culture to costume.

### Italian-diaspora clichés

Checkered tablecloths, tomato vines, *nonno* aprons. Same problem in a different key.

## How the layer is delivered

The personal layer is delivered in **descending order of intimacy**:

1. **Always-present** — the porch-lamp mark, the warm-voice in achievements, the lobby room names. Every user sees these.
2. **Earned** — achievements unlock with named hands. Most users will see some; only frequent players see all.
3. **Hidden** — a single Easter egg per app, triggered by a rare condition (e.g. play at 3am on a Sunday). Tiny, charming, never a feature.

Document hidden Easter eggs in **this file** as you add them, so we don't forget what we've shipped. Never document them in user-facing docs.

## Easter-egg log

| Egg | Surface | Trigger | Reveal |
|---|---|---|---|
| _(none yet — add as we ship)_ | | | |

## A note on the dedication

The branding canvas closes with: *"— for grandpa, and for every late hand that was supposed to be the last."*

This line is the dedication of the umbrella website. It appears once, on the About page, in Kalam. It does not appear elsewhere. If the dedication needs to change as the family changes, change it; but it always exists.

# Baixada Brand System

This directory preserves the Baixada handoff from `truco game (12).zip` plus
the Truco icon addendum from `truco game (13).zip`, both dated 2026-04-28.
Together with the production sources in `../src/`, it is the durable source of
truth for product naming, visual language, voice, routes, icons, and brand
decisions across Baixada games.

Start here:

- `00-README.md` — orientation and one-paragraph brand summary.
- `01-naming.md` — umbrella/game naming rules and the `· Lab` suffix.
- `02-visual-system.md` — Tactile tokens, typography, textures, and ornaments.
- `03-logo-system.md` — wordmarks, lockups, app icons, and usage rules.
- `04-voice-and-tone.md` — editorial/warm copy rules and bilingual posture.
- `05-applications.md` — web, mobile, app-store, social, and print surfaces.
- `06-easter-eggs.md` — family references, what works, and what to avoid.
- `07-domains-and-routes.md` — `baixada.cards` URL architecture.
- `08-decision-log.md` — dated rationale. Append here when the system changes.
- `09-truco-icon.md` — Truco app icon, icon family rules, favicon/title rules.

Implementation anchors:

- Canonical production tokens live in `../src/tokens.css`.
- Reusable brand marks live in `../src/BaixadaBrand.tsx`.
- The game-icon family lives in `../src/TrucoIcon.tsx`.
- Existing Truco table components still use the historical `farol` names, but
  they inherit the Baixada/Tactile tokens. New shared brand work should use
  `baixada` naming unless it is specifically extending those table components.

import assert from 'node:assert/strict'
import { test } from 'node:test'

import { renderToStaticMarkup } from 'react-dom/server'

import {
  BaixadaGameLockup,
  BaixadaStamp,
  BaixadaWordmark,
  PorchLamp,
  SuitGlyph,
  TrucoIcon,
} from '../dist/index.js'

test('the master wordmark renders the canonical name and tagline', () => {
  const markup = renderToStaticMarkup(
    BaixadaWordmark({ tagline: 'a lab for the card games of the south' }),
  )

  assert.match(markup, />Baixada</)
  assert.match(markup, /a lab for the card games of the south/)
  assert.match(markup, /baixada-wordmark/)
})

test('game lockups keep the Baixada eyebrow and lab register', () => {
  const markup = renderToStaticMarkup(
    BaixadaGameLockup({ game: 'Truco', suffix: '· Lab' }),
  )

  assert.match(markup, />Baixada</)
  assert.match(markup, />Truco</)
  assert.match(markup, />· Lab</)
})

test('titled SVG marks expose an accessible image name', () => {
  const lamp = renderToStaticMarkup(PorchLamp({ title: 'Porch lamp' }))
  const suit = renderToStaticMarkup(
    SuitGlyph({ kind: 'espadas', title: 'Espadas' }),
  )

  assert.match(lamp, /role="img"/)
  assert.match(lamp, /aria-label="Porch lamp"/)
  assert.match(suit, /role="img"/)
  assert.match(suit, /aria-label="Espadas"/)
})

test('decorative SVG marks stay out of the accessibility tree', () => {
  const markup = renderToStaticMarkup(SuitGlyph({ kind: 'copas' }))

  assert.match(markup, /aria-hidden="true"/)
  assert.doesNotMatch(markup, /role="img"/)
})

test('stamp and game icon expose stable accessible names', () => {
  const stamp = renderToStaticMarkup(BaixadaStamp({}))
  const icon = renderToStaticMarkup(TrucoIcon({ size: 32 }))

  assert.match(stamp, /aria-label="Baixada"/)
  assert.match(icon, /aria-label="Truco"/)
  assert.doesNotMatch(icon, /border:1px solid var\(--brass-1\)/)
})

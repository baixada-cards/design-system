import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const tokens = await readFile(new URL('../src/tokens.css', import.meta.url), 'utf8')

test('the canonical material palette stays stable', () => {
  const expected = new Map([
    ['--wood-2', '#3b210f'],
    ['--paper-0', '#f3e7cf'],
    ['--card-edge', '#b98738'],
    ['--card-back-a', '#5a2a26'],
    ['--brass-1', '#a88540'],
  ])

  for (const [name, value] of expected) {
    assert.match(tokens, new RegExp(`${name}\\s*:\\s*${value}`, 'i'))
  }

  assert.match(tokens, /--walnut-surface-image\s*:/)
  assert.match(tokens, /--paper-surface-image\s*:/)
  assert.match(tokens, /\.walnut\s*\{[^}]*background-image:\s*var\(--walnut-surface-image\)/s)
})

test('all four Spanish suit colors remain defined', () => {
  for (const name of [
    '--suit-red',
    '--suit-ochre',
    '--suit-black',
    '--suit-green',
  ]) {
    assert.match(tokens, new RegExp(`${name}\\s*:`))
  }
})

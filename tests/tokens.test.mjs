import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const tokens = await readFile(new URL('../src/tokens.css', import.meta.url), 'utf8')

test('the canonical material palette stays stable', () => {
  const expected = new Map([
    ['--wood-2', '#3d2e20'],
    ['--paper-0', '#ede4d0'],
    ['--card-edge', '#c8a040'],
    ['--card-back-a', '#5a2a26'],
    ['--brass-1', '#a88540'],
  ])

  for (const [name, value] of expected) {
    assert.match(tokens, new RegExp(`${name}\\s*:\\s*${value}`, 'i'))
  }
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

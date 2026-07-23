import { readFile } from 'node:fs/promises'

const requiredDocs = [
  'docs/00-README.md',
  'docs/01-naming.md',
  'docs/02-visual-system.md',
  'docs/03-logo-system.md',
  'docs/04-voice-and-tone.md',
  'docs/05-applications.md',
  'docs/06-easter-eggs.md',
  'docs/07-domains-and-routes.md',
  'docs/08-decision-log.md',
  'docs/09-truco-icon.md',
]

await Promise.all(requiredDocs.map((file) => readFile(file, 'utf8')))

const tokens = await readFile('src/tokens.css', 'utf8')
const tokenNames = [...tokens.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gim)].map(
  ([, name]) => name,
)
const duplicates = tokenNames.filter(
  (name, index) => tokenNames.indexOf(name) !== index,
)
if (duplicates.length > 0) {
  throw new Error(`duplicate design tokens: ${[...new Set(duplicates)].join(', ')}`)
}

const requiredTokens = [
  '--wood-2',
  '--paper-0',
  '--card-edge',
  '--card-back-a',
  '--suit-red',
  '--suit-ochre',
  '--suit-black',
  '--suit-green',
  '--brass-1',
  '--font-serif',
  '--font-sans',
  '--shadow-card',
]
const missingTokens = requiredTokens.filter((name) => !tokenNames.includes(name))
if (missingTokens.length > 0) {
  throw new Error(`missing canonical tokens: ${missingTokens.join(', ')}`)
}

const components = await readFile('src/index.ts', 'utf8')
for (const publicName of [
  'BaixadaWordmark',
  'BaixadaGameLockup',
  'BaixadaStamp',
  'PorchLamp',
  'SuitGlyph',
  'TrucoIcon',
]) {
  if (!components.includes(publicName)) {
    throw new Error(`public component is not exported: ${publicName}`)
  }
}

const decisionLog = await readFile('docs/08-decision-log.md', 'utf8')
if (!decisionLog.includes('## 2026-04-28 · Umbrella name: Baixada')) {
  throw new Error('brand decision history is incomplete')
}

console.log(
  `validated ${requiredDocs.length} guide files, ${tokenNames.length} tokens, and the public component surface`,
)

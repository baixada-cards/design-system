import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const workflowDirectory = '.github/workflows'
const workflowFiles = (await readdir(workflowDirectory))
  .filter((name) => name.endsWith('.yml') || name.endsWith('.yaml'))
  .sort()

if (workflowFiles.length === 0) {
  throw new Error('at least one GitHub Actions workflow is required')
}

const unpinned = []
for (const name of workflowFiles) {
  const filePath = path.join(workflowDirectory, name)
  const contents = await readFile(filePath, 'utf8')

  for (const [index, line] of contents.split('\n').entries()) {
    const match = line.match(/^\s*uses:\s*([^#\s]+)(?:\s+#.*)?$/)
    if (!match || match[1].startsWith('./') || match[1].startsWith('docker://')) {
      continue
    }

    const separator = match[1].lastIndexOf('@')
    const revision = separator === -1 ? '' : match[1].slice(separator + 1)
    if (!/^[0-9a-f]{40}$/.test(revision)) {
      unpinned.push(`${filePath}:${index + 1}: ${match[1]}`)
    }
  }
}

if (unpinned.length > 0) {
  throw new Error(`GitHub Actions must use full commit SHAs:\n${unpinned.join('\n')}`)
}

console.log(`validated ${workflowFiles.length} workflow file(s)`)

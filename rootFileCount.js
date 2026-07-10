import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

/** Number of regular files in the repository root directory. */
export const rootFileCount = readdirSync(rootDir, { withFileTypes: true }).filter(
  (entry) => entry.isFile(),
).length

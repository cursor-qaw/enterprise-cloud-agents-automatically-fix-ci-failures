import { readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

/** Number of regular files in the repository root directory. */
export const rootFileCount = readdirSync(rootDir).filter((name) =>
  statSync(join(rootDir, name)).isFile(),
).length

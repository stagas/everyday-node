import * as child_process from 'child_process'
import { Deferred } from 'everyday-utils'
import * as fs from 'fs'
import * as fsp from 'fs/promises'
import type { exec as execType, execSync as execSyncType } from 'get-pty-output'
import * as path from 'path'
import type { Key } from 'readline'

export interface CharKey {
  char: string
  key: Key
}

export const execCapture: typeof execType = async (cmd, options) => (await import('get-pty-output')).exec(cmd, options)

export const execCaptureSync: typeof execSyncType = (cmd, options) =>
  (require('get-pty-output').execSync as typeof execSyncType)(cmd, options)

export async function exists(pathname: string) {
  try {
    await fsp.lstat(pathname)
    return true
  } catch (error) {
    return false
  }
}

export async function discoverFileWithSuffixes(pathname: string, suffixes: string[]) {
  let file: string | void = pathname
  const candidates = suffixes.map(x => file + x)
  while (!(await exists(file)) || !(await fs.promises.stat(file)).isFile()) {
    file = candidates.shift()
    if (!file) return
  }
  return file
}

// https://stackoverflow.com/a/60203932
export function keypressSync(msg: string) {
  process.stdout.write(msg)

  const fd = fs.openSync('/dev/tty', 'rs')

  let result = ''
  const buffer = Buffer.alloc(1)

  for (;;) {
    fs.readSync(fd, buffer, 0, 1, null)
    // LF \n return on line feed
    if (buffer[0] === 10) {
      break
    } // CR \r skip carriage return
    else if (buffer[0] !== 13) {
      result += buffer.toString()
    }
  }

  fs.closeSync(fd)

  return result
}

export async function keypress(msg: string, cb: (char: string, key: Key) => void) {
  const { emitKeypressEvents } = await import('readline')
  emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  process.stdin.resume()

  process.stdout.write(msg)
  process.stdin.on('keypress', cb)

  return () => {
    process.stdin.off('keypress', cb)
  }
}

export async function singleKeypress(msg: string) {
  const { emitKeypressEvents } = await import('readline')

  emitKeypressEvents(process.stdin)

  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdout.write(msg)

  const pause = () => {
    process.stdin.setRawMode(false)
    process.stdin.pause()
  }

  const deferred = Deferred<CharKey>()

  const onKeypress = (char: string, key: Key) => {
    deferred.resolve({ char, key })
  }

  process.stdin.once('keypress', onKeypress)

  deferred.when(() => {
    pause()
    process.stdin.off('keypress', onKeypress)
  })

  return deferred
}

export function exec(cmd: string, args: string[] = [], options: child_process.SpawnOptions = {}) {
  return new Promise((resolve, reject) => {
    const child = child_process.spawn(
      cmd,
      args,
      {
        stdio: 'inherit',
        killSignal: 'SIGINT',
        ...options,
      }
    )
    const kill = (signal: NodeJS.Signals) => {
      child.kill(signal)
      process.exit(1)
    }
    process.on('SIGINT', () => kill('SIGINT'))
    child.once('error', reject)
    child.once('exit', resolve)
  })
}

export async function waitForFileExists(pathname: string, timeout = 15000) {
  const dirname = path.dirname(pathname)
  const basename = path.basename(pathname)

  if (await exists(pathname)) return

  const deferred = Deferred<void>()

  deferred.when(() => {
    clearTimeout(timer)
    watcher.close()
  })

  const watcher = fs.watch(dirname, (_, filename) => {
    if (filename === basename) {
      deferred.resolve()
    }
  })

  const timer = setTimeout(() => {
    deferred.reject(new Error('File does not exist, timed out waiting.'))
  }, timeout)

  return deferred
}

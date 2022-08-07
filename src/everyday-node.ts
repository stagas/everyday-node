import * as child_process from 'child_process'
import * as fs from 'fs'
import * as fsp from 'fs/promises'

import type { exec as execType, execSync as execSyncType } from 'get-pty-output'

export const execCapture: typeof execType = async (cmd, options) => (await import('get-pty-output')).exec(cmd, options)

export const execCaptureSync: typeof execSyncType = (cmd, options) =>
  (require('get-pty-output').execSync as typeof execSyncType)(cmd, options)

export const exists = async (pathname: string) => {
  try {
    await fsp.lstat(pathname)
    return true
  } catch (error) {
    return false
  }
}

// https://stackoverflow.com/a/60203932
export const keypressSync = (msg: string) => {
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

import type { Key } from 'readline'

export const keypress = async (msg: string, cb: (char: string, key: Key) => void) => {
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

export const singleKeypress = async (msg: string) => {
  const { emitKeypressEvents } = await import('readline')
  emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  process.stdin.resume()

  process.stdout.write(msg)

  return new Promise<{ char: string; key: Key }>(resolve => {
    process.stdin.once('keypress', (char: string, key: Key) => {
      process.stdin.setRawMode(false)
      process.stdin.pause()
      resolve({ char, key })
    })
  })
}

export const exec = (cmd: string, args: string[] = [], options: child_process.SpawnOptions = {}) =>
  new Promise((resolve, reject) => {
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

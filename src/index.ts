import type { Options } from './type'
export * from './type'

export function easyArgs() {
  const args = process.argv.slice(2)
  const options: Options[] = []
  const commanders: string[] = []

  const len = args.length
  for (let i = 0; i < len; i++) {
    const arg = args[i]
    const match = arg.match(/-{1,2}(\w+)/)
    if (match) {
      const name = match[1]
      const value = args[i + 1]
      options.push({ name, value: value !== undefined ? value.startsWith('-') ? true : value : true })
    }
    else {
      commanders.push(arg)
    }
  }

  const has = (key: string) => {
    return options.some(o => o.name === key)
  }
  const get = (key: string | string[]) => {
    if (typeof key === 'string')
      return options.find(o => o.name === key)?.value
    else
      return options.filter(o => key.includes(o.name)).map(item => item.value)
  }

  const hasCommand = (key: string) => {
    return commanders.includes(key)
  }

  return {
    args,
    rawArgs: args.join(' '),
    options,
    commanders,
    has,
    get,
    hasCommand,
  }
}


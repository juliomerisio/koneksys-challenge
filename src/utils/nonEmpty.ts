const IGNORED_ROWS = 2

export function nonEmpty(elements: { [key: string]: unknown[] }, line: number) {
  const errors: string[] = []

  Object.entries(elements).forEach(([name, value]) => {
    if (!value.length) {
      errors.push(`${name} on line ${line + IGNORED_ROWS} can't be null.`)
    }
  })

  return errors
}

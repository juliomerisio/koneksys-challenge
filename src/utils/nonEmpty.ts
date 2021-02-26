export function nonEmpty(elements: { [key: string]: unknown[] }, line: number) {
  const errors: string[] = []

  Object.entries(elements).forEach(([name, value]) => {
    if (!value.length) {
      errors.push(`${name} on line ${line} can't be null.`)
    }
  })

  return errors
}

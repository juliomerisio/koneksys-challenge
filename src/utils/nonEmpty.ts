export function nonEmpty(elements: { [key: string]: unknown[] }) {
  const errors: string[] = []

  Object.entries(elements).forEach(([name, value]) => {
    if (!value.length) {
      errors.push(`${name} can't be null.`)
    }
  })

  return {
    errors,
    elements,
  }
}

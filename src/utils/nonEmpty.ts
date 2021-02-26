const IGNORED_ROWS = 2

const REQUIRED_COLUMNS = [
  '#',
  'Age',
  'Base Salary',
  'College',
  'Experience',
  'Height',
  'Player Name',
  'Pos',
  'Status',
  'Weight',
]

export function nonEmpty(elements: { [key: string]: unknown[] }, line: number) {
  const errors: string[] = []

  Object.entries(elements).forEach(([name, value]) => {
    if (REQUIRED_COLUMNS.includes(name)) {
      if (!value.length) {
        errors.push(`${name} on line ${line + IGNORED_ROWS} can't be null.`)
      }
    }

    if (!REQUIRED_COLUMNS.includes(name)) {
      errors.push(`${name} is not allowed`)
    }
  })

  return errors
}

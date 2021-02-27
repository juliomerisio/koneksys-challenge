export function replaceItemAtIndex(
  arr: Record<string, string>[],
  index: number,
  newValue: Record<string, string>
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

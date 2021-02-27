interface debounceProps<T> {
  value: T
  action: (a: T, args?: unknown) => void
  delay?: number
  args?: unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let time: any = 0

/**
 *
 * @param value
 * @param action
 * @param delay
 * @param args
 */
export const debounce = <T = string>({
  value,
  action,
  delay = 1000,
  args,
}: debounceProps<T>): void => {
  clearTimeout(time)
  time = setTimeout(() => {
    action(value, args)
  }, delay)
}

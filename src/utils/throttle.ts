/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function throttle(callback: any, limit: number): VoidFunction {
  let waiting = false // Initially, we're not waiting

  return () => {
    // We return a throttled function
    if (!waiting) {
      // If we're not waiting
      callback()
      // callback.apply(this, arguments); // Execute users function
      waiting = true // Prevent future invocations
      setTimeout(() => {
        // After a period of time
        waiting = false // And allow future invocations
      }, limit)
    }
  }
}

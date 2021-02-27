/* eslint-disable @typescript-eslint/no-unused-vars */

export type CancelablePromise<T> = {
  promise: Promise<T>
  cancel: () => void
}

export function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T> {
  // eslint-disable-next-line no-underscore-dangle
  let hasCanceled_ = false

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      // eslint-disable-next-line prefer-promise-reject-errors
      (val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      // eslint-disable-next-line prefer-promise-reject-errors
      (error) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    )
  })

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true
    },
  }
}

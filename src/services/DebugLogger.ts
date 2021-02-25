/* eslint-disable no-useless-constructor */
import { getTimeString } from '../utils/getTimeString'

export default class DebugLogger {
  private enabled: boolean = process.env.NODE_ENV !== 'production'

  constructor(private prefix: string) {}

  enable(): void {
    this.enabled = true
  }

  disable(): void {
    this.enabled = false
  }

  get isEnabled(): boolean {
    return this.enabled
  }

  prefixMessage(msg: string): string {
    return `${getTimeString(new Date())} [${this.prefix}]: ${msg}`
  }

  info(msg: string, ...params: unknown[]): void {
    if (this.enabled) {
      // eslint-disable-next-line no-console
      console.info(this.prefixMessage(msg), ...params)
    }
  }

  warn(msg: string, ...params: unknown[]): void {
    if (this.enabled) {
      // eslint-disable-next-line no-console
      console.warn(this.prefixMessage(msg), ...params)
    }
  }

  error(msg: string, ...params: unknown[]): void {
    // eslint-disable-next-line no-console
    console.error(this.prefixMessage(msg), ...params)
  }
}

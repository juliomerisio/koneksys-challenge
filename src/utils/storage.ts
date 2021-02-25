/* eslint-disable class-methods-use-this */
class Storage {
  public getObject(key: string): void {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  public get(key: string): string | null {
    return localStorage.getItem(key)
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  public setObject(
    key: string,
    value: Record<string, unknown> | unknown[]
  ): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public remove(key: string): void {
    localStorage.removeItem(key)
  }
}

export const storage = new Storage()

import { ColorScheme } from '@/types/ColorScheme'

const KEY = 'fm-github-user-search.color-scheme'

export const colorSchemeStore = {
  get (): ColorScheme {
    const actual = localStorage.getItem(KEY)

    if (!actual) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.set(ColorScheme.dark)
      } else {
        this.set(ColorScheme.light)
      }
      return this.get()
    }

    if (actual === 'dark') {
      return ColorScheme.dark
    }

    return ColorScheme.light
  },
  set (colorScheme: ColorScheme): void {
    const value = colorScheme === ColorScheme.dark
      ? 'dark'
      : 'light'

    localStorage.setItem(KEY, value)
  },
}

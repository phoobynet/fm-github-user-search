import { create } from 'zustand'
import { ColorScheme } from '@/types/ColorScheme'
import { GithubUser } from '@/types/GithubUser'
import axios from 'axios'

const KEY = 'fm-github-user-search.color-scheme'

export interface UseAppStore {
  colorScheme?: ColorScheme
  loadColorScheme: () => void
  storeColorScheme: (scheme: ColorScheme) => void
  toggleColorScheme: () => void
  username: string
  lastUsername: string
  setUsername: (username: string) => void
  user?: GithubUser
  search: () => Promise<void>
  searching: boolean
}

export const useAppStore = create<UseAppStore>((set, get) => {
  return {
    colorScheme: undefined,
    loadColorScheme () {
      const storedColorScheme = localStorage.getItem(KEY)

      let colorScheme: ColorScheme

      if (storedColorScheme === 'dark') {
        colorScheme = ColorScheme.dark
      } else {
        colorScheme = ColorScheme.light
      }

      document.documentElement.dataset['mode'] = storedColorScheme || ''

      set({
        colorScheme,
      })
    },
    storeColorScheme (colorScheme: ColorScheme): void {
      const value = colorScheme === ColorScheme.dark
        ? 'dark'
        : 'light'

      localStorage.setItem(KEY, value)
      document.documentElement.dataset['mode'] = value
      set({
        colorScheme,
      })
    },
    toggleColorScheme () {
      const colorScheme = get().colorScheme === ColorScheme.dark
        ? ColorScheme.light
        : ColorScheme.dark

      get().storeColorScheme(colorScheme)
    },
    username: '',
    setUsername (username: string = '') {
      set({
        username: username.trim(),
      })
    },
    user: undefined,
    lastUsername: '',
    async search (): Promise<void> {
      try {
        const username = get().username
        set({
          lastUsername: username,
        })

        if (username.trim().length === 0) {
          return
        }

        set({ searching: true })
        const user = await axios.get<GithubUser | undefined>('/api/search', {
          params: {
            username,
          },
          validateStatus: (status) => status < 400 || status === 404,
        }).then(r => {
          if (r.status === 404) {
            return undefined
          }

          return r.data
        })

        console.log(user)

        set({
          user,
          searching: false,
        })
      } catch (e) {
        console.error('Search failed: ', e)
      } finally {
        set({
          searching: false,
        })
      }
    },
    searching: false,
  }
})


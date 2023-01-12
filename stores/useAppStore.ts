import { create } from 'zustand'
import { ColorScheme } from '@/types/ColorScheme'
import { colorSchemeStore } from '../lib/colorSchemeStore'
import { GithubUser } from '@/types/GithubUser'
import axios from 'axios'

export interface UseAppStore {
  colorScheme: ColorScheme
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
    colorScheme: ColorScheme.dark,
    storeColorScheme (colorScheme: ColorScheme): void {
      colorSchemeStore.set(colorScheme)
      set({
        colorScheme,
      })
    },
    toggleColorScheme () {
      const colorScheme = get().colorScheme === ColorScheme.dark
        ? ColorScheme.light
        : ColorScheme.dark
      colorSchemeStore.set(colorScheme)
      set({
        colorScheme,
      })
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

import { create } from 'zustand'
import { ColorScheme } from '@/types/ColorScheme'
import { colorSchemeStore } from '../lib/colorSchemeStore'

export interface UseAppStore {
  colorScheme: ColorScheme
  storeColorScheme: (scheme: ColorScheme) => void
  toggleColorScheme: () => void
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
  }
})

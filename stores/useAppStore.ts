import { create } from 'zustand'
import { ColorScheme } from '@/types/ColorScheme'
import { colorSchemeStore } from '../lib/colorSchemeStore'

export interface UseAppStore {
  colorScheme: ColorScheme
  storeColorScheme: (scheme: ColorScheme) => void
}

export const useAppStore = create<UseAppStore>((set) => {
  return {
    colorScheme: ColorScheme.dark,
    storeColorScheme (colorScheme: ColorScheme): void {
      colorSchemeStore.set(colorScheme)
      set({
        colorScheme,
      })
    },
  }
})

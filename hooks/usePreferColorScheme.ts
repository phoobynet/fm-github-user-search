import { useEffect, useRef, useState } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import { ColorScheme } from '@/types/ColorScheme'

export const usePreferColorScheme = () => {
  const storeColorScheme = useAppStore(state => state.storeColorScheme)
  const darkModePreference = useRef<MediaQueryList>()
  const [isDarkScheme, setIsDarkScheme] = useState<boolean>()
  const switchDarkMode = (isDark: boolean) => {
    document.documentElement.dataset['mode'] = isDark
      ? 'dark'
      : ''

    setIsDarkScheme(isDark)
  }

  useEffect(() => {
    storeColorScheme(isDarkScheme
      ? ColorScheme.dark
      : ColorScheme.light)
  }, [isDarkScheme])

  useEffect(() => {
    darkModePreference.current = window.matchMedia('(prefers-color-scheme: dark)')

    if (darkModePreference.current) {
      switchDarkMode(darkModePreference.current?.matches)
    }

    const handler = (e: MediaQueryListEvent) => switchDarkMode(e.matches)

    darkModePreference.current?.addEventListener('change', handler)

    return () => {
      darkModePreference.current?.removeEventListener('change', handler)
    }
  }, [])
}

import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useAppStore } from '@/stores/useAppStore'
import { useEffect } from 'react'

export default function App ({
  Component,
  pageProps,
}: AppProps) {
  const loadColorScheme = useAppStore(state => state.loadColorScheme)

  useEffect(() => {
    loadColorScheme()
  }, [])
  return <Component {...pageProps} />
}

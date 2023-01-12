import Head from 'next/head'
import { useEffect } from 'react'
import { colorSchemeStore } from '../lib/colorSchemeStore'
import { useAppStore } from '@/stores/useAppStore'

export default function Home () {
  const colorScheme = useAppStore(state => state.colorScheme)
  const storeColorScheme = useAppStore(state => state.storeColorScheme)
  useEffect(() => {
    storeColorScheme(colorSchemeStore.get())
  }, [])
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <title>Frontend Mentor | GitHub user search app</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main className="flex items-center justify-center">
        {/*<ColorSchemeToggle scheme={scheme} />*/}
      </main>
    </>
  )
}

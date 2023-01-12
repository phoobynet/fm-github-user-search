import { Head, Html, Main, NextScript } from 'next/document'
import { useAppStore } from '@/stores/useAppStore'
import { ColorScheme } from '@/types/ColorScheme'

export default function Document () {
  const colorScheme = useAppStore(state => state.colorScheme)

  return (
    <Html
      lang="en"
      data-mode={colorScheme === ColorScheme.dark
        ? 'dark'
        : 'light'}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

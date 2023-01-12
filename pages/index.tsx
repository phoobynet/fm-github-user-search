import Head from 'next/head'
import UserSearch from '@/components/UserSearch'
import styles from '@/styles/Home.module.scss'
import { usePreferColorScheme } from '@/hooks/usePreferColorScheme'

export default function Home () {
  usePreferColorScheme()
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
      <main className={styles.main}>
        <UserSearch />
      </main>
    </>
  )
}

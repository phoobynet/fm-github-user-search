import { ColorScheme } from '@/types/ColorScheme'
import { useMemo } from 'react'
import Image from 'next/image'
import iconMoon from '@/assets/icon-moon.svg'
import iconSun from '@/assets/icon-sun.svg'
import { useAppStore } from '@/stores/useAppStore'
import styles from './ColorSchemeToggle.module.scss'

export default function ColorSchemeToggle () {
  const colorScheme = useAppStore(state => state.colorScheme)
  const toggleColorScheme = useAppStore(state => state.toggleColorScheme)

  const imgSrc = useMemo(() => colorScheme === ColorScheme.dark
    ? iconSun
    : iconMoon, [colorScheme])

  const caption = useMemo(() => colorScheme === ColorScheme.dark
    ? 'light'
    : 'dark', [colorScheme])

  return (
    <button
      className={styles.colorSchemeToggle}
      onClick={() => toggleColorScheme()}
    >
      <span className={styles.caption}>{caption}</span>
      <Image
        src={imgSrc}
        alt=""
      />
    </button>
  )
}

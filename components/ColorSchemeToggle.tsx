import { ColorScheme } from '@/types/ColorScheme'
import { useMemo } from 'react'
import Image from 'next/image'
import iconMoon from '@/assets/icon-moon.svg'
import iconSun from '@/assets/icon-sun.svg'
import { useAppStore } from '@/stores/useAppStore'

export default function ColorSchemeToggle () {
  const colorScheme = useAppStore(state => state.colorScheme)
  const storeColorScheme = useAppStore(state => state.storeColorScheme)

  const imgSrc = useMemo(() => colorScheme === ColorScheme.dark
    ? iconSun
    : iconMoon, [colorScheme])

  const caption = useMemo(() => colorScheme === ColorScheme.dark
    ? 'light'
    : 'dark', [colorScheme])

  return (
    <button className="">
      <div>{caption}</div>
      <Image
        src={imgSrc}
        alt=""
      />
    </button>
  )
}

import styles from './Heading.module.scss'
import { PropsWithChildren } from 'react'

interface Props {
  size: 1 | 2 | 3 | 4
}

export default function Heading ({
  children,
  size,
}: PropsWithChildren<Props>) {
  return (
    <div
      role="heading"
      aria-level={size}
      className={styles.heading}
    >
      {children}
    </div>
  )
}

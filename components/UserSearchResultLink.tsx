import { ReactNode } from 'react'
import styles from './UserSearchResultLink.module.scss'

interface Props {
  value?: string
  icon: ReactNode
}

export default function UserSearchResultLink ({
  icon,
  value,
}: Props) {
  const notAvailable = !value
  const isURL = notAvailable
    ? false
    : value?.toLowerCase().indexOf('http') === 0

  return (
    <div className={styles.userLinkSearchResult}>
      <div
        className={`${styles.icon} ${notAvailable
          ? styles.notAvailable
          : ''}`}
      >
        {icon}
      </div>
      <div
        className={`${styles.value} ${notAvailable
          ? styles.notAvailable
          : ''}`}
      >{
        isURL
          ? (<a
            href={value}
            target="_blank"
            rel="noreferrer"
          >{value}</a>)
          : <span>{value}</span>}</div>
    </div>
  )
}

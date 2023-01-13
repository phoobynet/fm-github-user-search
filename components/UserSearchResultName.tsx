import { useAppStore } from '@/stores/useAppStore'
import styles from './UserSearchResultName.module.scss'

export default function UserSearchResultName () {
  const user = useAppStore(state => state.user)

  if (!user) {
    return null
  }

  return (
    <a
      className={styles.userSearchResultName}
      href={user.url}
      target="_blank"
      rel="noreferrer"
    >{user.name}</a>
  )
}

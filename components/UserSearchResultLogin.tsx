import styles from './UserSearchResultLogin.module.scss'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchResultLogin () {
  const user = useAppStore(state => state.user)

  if (!user) {
    return null
  }
  return (
    <div className={styles.userSearchResultLogin}>@{user.login}</div>
  )
}

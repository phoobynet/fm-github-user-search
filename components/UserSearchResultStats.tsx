import styles from './UserSearchResultStats.module.scss'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchResultStats () {
  const user = useAppStore(state => state.user)

  if (!user) {
    return null
  }

  return (
    <div className={styles.userSearchResultStats}>
      <div className={styles.stat}>
        <div>Repos</div>
        <div>{user.public_repos}</div>
      </div>
      <div className={styles.stat}>
        <div>Followers</div>
        <div>{user.followers}</div>
      </div>
      <div className={styles.stat}>
        <div>Following</div>
        <div>{user.following}</div>
      </div>
    </div>
  )
}

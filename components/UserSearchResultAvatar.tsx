import styles from './UserSearchResultAvatar.module.scss'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchResultAvatar () {
  const user = useAppStore(state => state.user)

  if (!user) {
    return null
  }

  return (
    <img
      src={user.avatar_url}
      alt=""
      className={styles.userSearchResultAvatar}
    />
  )
}

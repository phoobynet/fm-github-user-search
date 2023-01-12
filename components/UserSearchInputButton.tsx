import styles from './UserSearchInputButton.module.scss'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchInputButton () {
  const username = useAppStore(state => state.username)
  const search = useAppStore(state => state.search)
  const searching = useAppStore(state => state.searching)

  return (
    <button
      className={styles.userSearchInputButton}
      onClick={() => search()}
      disabled={searching || username?.length === 0}
    >
      Search
    </button>
  )
}

import styles from './UserSearch.module.scss'
import UserSearchHeader from '@/components/UserSearchHeader'
import UserSearchInput from '@/components/UserSearchInput'
import UserSearchResult from '@/components/UserSearchResult'

export default function UserSearch () {
  return (
    <div className={styles.userSearch}>
      <div className={styles.header}>
        <UserSearchHeader />
      </div>
      <div className={styles.input}>
        <UserSearchInput />
      </div>
      <div className={styles.result}>
        <UserSearchResult />
      </div>
    </div>
  )
}

import styles from './UserSearch.module.scss'
import UserSearchHeader from '@/components/UserSearchHeader'
import UserSearchInput from '@/components/UserSearchInput'
import UserSearchResult from '@/components/UserSearchResult'

export default function UserSearch () {
  return (
    <div className={styles.userSearch}>
      <div className={styles.headerContainer}>
        <UserSearchHeader />
      </div>
      <div className={styles.searchInputContainer}>
        <UserSearchInput />
      </div>
      <div className={styles.searchResultContainer}>
        <UserSearchResult />
      </div>
    </div>
  )
}

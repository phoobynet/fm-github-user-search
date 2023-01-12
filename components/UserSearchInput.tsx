import styles from './UserSearchInput.module.scss'
import iconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
import UserSearchInputButton from '@/components/UserSearchInputButton'

export default function UserSearchInput () {
  return (
    <div className={styles.userSearchInput}>
      <Image
        src={iconSearch}
        alt=""
        className={styles.iconSearch}
      />
      <input
        type="text"
        placeholder="Search Github username"
        className={styles.input}
      />
      <UserSearchInputButton />
    </div>
  )
}

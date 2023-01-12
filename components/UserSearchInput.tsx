import styles from './UserSearchInput.module.scss'
import iconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
import UserSearchInputButton from '@/components/UserSearchInputButton'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchInput () {
  const username = useAppStore(state => state.username)
  const setUsername = useAppStore(state => state.setUsername)

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
        value={username}
        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
      />
      <UserSearchInputButton />
    </div>
  )
}

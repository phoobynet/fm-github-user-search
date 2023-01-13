import styles from './UserSearchResult.module.scss'
import { motion } from 'framer-motion'
import UserSearchResultAvatar from '@/components/UserSearchResultAvatar'
import UserSearchResultName from '@/components/UserSearchResultName'
import UserSearchResultLogin from '@/components/UserSearchResultLogin'
import UserSearchResultJoined from '@/components/UserSearchResultJoined'
import UserSearchResultBio from '@/components/UserSearchResultBio'
import UserSearchResultStats from '@/components/UserSearchResultStats'
import UserSearchResultLinks from '@/components/UserSearchResultLinks'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchResult () {
  const user = useAppStore(state => state.user)
  const searching = useAppStore(state => state.searching)

  if (!user || searching) {
    return null
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5 }}
      className={styles.userSearchResult}
    >
      <div className={styles.avatar}>
        <UserSearchResultAvatar />
      </div>
      <div className={styles.name}>
        <UserSearchResultName />
      </div>
      <div className={styles.login}>
        <UserSearchResultLogin />
      </div>
      <div className={styles.joined}>
        <UserSearchResultJoined />
      </div>
      <div className={styles.bio}>
        <UserSearchResultBio />
      </div>
      <div className={styles.stats}>
        <UserSearchResultStats />
      </div>
      <div className={styles.links}>
        <UserSearchResultLinks />
      </div>
    </motion.div>
  )
}

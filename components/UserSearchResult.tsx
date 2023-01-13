import styles from './UserSearchResult.module.scss'
import { useAppStore } from '@/stores/useAppStore'
import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import IconCompany from '@/components/IconCompany'
import IconTwitter from '@/components/IconTwitter'
import IconLocation from '@/components/IconLocation'
import IconWebsite from '@/components/IconWebsite'
import { motion } from 'framer-motion'
import UserSearchResultLink from '@/components/UserSearchResultLink'
import UserSearchResultAvatar from '@/components/UserSearchResultAvatar'
import UserSearchResultName from '@/components/UserSearchResultName'
import UserSearchResultLogin from '@/components/UserSearchResultLogin'
import UserSearchResultJoined from '@/components/UserSearchResultJoined'
import UserSearchResultBio from '@/components/UserSearchResultBio'
import UserSearchResultStats from '@/components/UserSearchResultStats'
import UserSearchResultLinks from '@/components/UserSearchResultLinks'

export default function UserSearchResult () {
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
      <div className={styles.heading}>
        <UserSearchResultAvatar />
        <div className={styles.headingRight}>
          <UserSearchResultName />
          <UserSearchResultLogin />
          <UserSearchResultJoined />
        </div>
      </div>

      <UserSearchResultBio />
      <UserSearchResultStats />
      <UserSearchResultLinks />
    </motion.div>
  )
}

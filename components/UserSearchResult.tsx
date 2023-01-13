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

export default function UserSearchResult () {
  const user = useAppStore(state => state.user)

  const joined = useMemo<string>(() => {
    if (!user) {
      return ''
    }

    const result = parseISO(user.created_at)

    return format(result, 'dd LLL y')
  }, [user])

  const bio = useMemo<string>(() => {
    if (!user) {
      return ''
    }

    return user.bio ?? `
    This profile has no bio
    `
  }, [user])

  if (!user) {
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
      <div className={styles.heading}>
        <img
          src={user.avatar_url}
          alt=""
          className={styles.avatar}
        />
        <div className={styles.headingRight}>
          <a
            className={styles.name}
            href={user.url}
            target="_blank"
            rel="noreferrer"
          >{user.name}</a>
          <div className={styles.login}>@{user.login}</div>
          <div className={styles.joined}>Joined {joined}</div>
        </div>
      </div>

      <div
        className={styles.bio}
      >{bio}</div>
      <div className={styles.stats}>
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
      <div className={styles.links}>
        <UserSearchResultLink
          icon={<IconLocation />}
          value={user.location}
        />

        <UserSearchResultLink
          icon={<IconWebsite />}
          value={user.blog}
        />

        <UserSearchResultLink
          icon={<IconTwitter />}
          value={user.twitter_username}
        />

        <UserSearchResultLink
          icon={<IconCompany />}
          value={user.company}
        />
      </div>
    </motion.div>
  )
}

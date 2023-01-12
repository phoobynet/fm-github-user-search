import styles from './UserSearchResult.module.scss'
import { useAppStore } from '@/stores/useAppStore'
import { ReactNode, useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import IconCompany from '@/components/IconCompany'
import IconTwitter from '@/components/IconTwitter'
import IconLocation from '@/components/IconLocation'
import IconWebsite from '@/components/IconWebsite'
import { motion } from 'framer-motion'

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
        <Link
          icon={<IconLocation />}
          value={user.location}
        />

        <Link
          icon={<IconWebsite />}
          value={user.blog}
        />

        <Link
          icon={<IconTwitter />}
          value={user.twitter_username}
        />

        <Link
          icon={<IconCompany />}
          value={user.company}
        />
      </div>
    </motion.div>
  )
}

function Link ({
  icon,
  value,
}: { icon: ReactNode, value: string | undefined }) {
  const notAvailable = !value
  const isURL = notAvailable
    ? false
    : value?.toLowerCase().indexOf('http') === 0
  return (
    <>
      <div
        className={`${styles.icon} ${notAvailable
          ? styles.notAvailable
          : ''}`}
      >
        {icon}
      </div>
      <div
        className={`${styles.value} ${notAvailable
          ? styles.notAvailable
          : ''}`}
      >{
        isURL
          ? (<a
            href={value}
            target="_blank"
            rel="noreferrer"
          >{value}</a>)
          : <span>{value}</span>}</div>
    </>
  )
}

import styles from './UserSearchResult.module.scss'
import { useAppStore } from '@/stores/useAppStore'
import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'

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
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
    `
  }, [user])

  if (!user) {
    return null
  }

  return (
    <div className={styles.userSearchResult}>
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

      <div className={styles.bio}>{bio}</div>
    </div>
  )
}

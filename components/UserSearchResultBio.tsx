import { useAppStore } from '@/stores/useAppStore'
import { useMemo } from 'react'
import styles from './UserSearchResultBio.module.scss'

export default function UserSearchResultBio () {
  const user = useAppStore(state => state.user)

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
    <div
      className={styles.userSearchResultBio}
    >{bio}</div>
  )
}

import styles from './UserSearchResultJoined.module.scss'
import { useAppStore } from '@/stores/useAppStore'
import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'

export default function UserSearchResultJoined () {
  const user = useAppStore(state => state.user)

  const joined = useMemo<string>(() => {
    if (!user) {
      return ''
    }

    const result = parseISO(user.created_at)

    return format(result, 'dd LLL y')
  }, [user])

  if (!user) {
    return null
  }

  return (
    <div className={styles.userSearchResultJoined}>Joined {joined}</div>
  )
}

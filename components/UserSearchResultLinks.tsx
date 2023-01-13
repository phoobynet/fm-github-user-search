import styles from './UserSearchResultLinks.module.scss'
import UserSearchResultLink from '@/components/UserSearchResultLink'
import IconLocation from '@/components/IconLocation'
import IconWebsite from '@/components/IconWebsite'
import IconTwitter from '@/components/IconTwitter'
import IconCompany from '@/components/IconCompany'
import { useAppStore } from '@/stores/useAppStore'

export default function UserSearchResultLinks () {
  const user = useAppStore(state => state.user)

  if (!user) {
    return null
  }

  return (
    <div className={styles.userSearchResultLinks}>
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
  )
}

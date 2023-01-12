import styles from './UserSearchHeader.module.scss'
import ColorSchemeToggle from '@/components/ColorSchemeToggle'
import Heading from '@/components/Heading'

export default function UserSearchHeader () {
  return (
    <header className={styles.userSearchHeader}>
      <Heading size={1}>devfinder</Heading>
      <div>
        <ColorSchemeToggle />
      </div>
    </header>
  )
}

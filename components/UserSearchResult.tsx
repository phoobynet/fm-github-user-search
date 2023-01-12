import styles from './UserSearchResult.module.scss'
import Image from 'next/image'
import iconCompany from '@/assets/icon-company.svg'

export default function UserSearchResult () {
  return (
    <div className={styles.userSearchResult}>
      <div className={styles.headerContainer}>
        <Image
          src={iconCompany}
          alt=""
        />
      </div>
    </div>
  )
}

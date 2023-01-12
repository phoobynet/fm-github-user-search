import styles from './UserSearchInput.module.scss'
import iconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
import UserSearchInputButton from '@/components/UserSearchInputButton'
import { useAppStore } from '@/stores/useAppStore'
import { KeyboardEventHandler, useEffect, useMemo, useRef } from 'react'

export default function UserSearchInput () {
  const inputRef = useRef<HTMLInputElement>(null)
  const username = useAppStore(state => state.username)
  const user = useAppStore(state => state.user)
  const setUsername = useAppStore(state => state.setUsername)
  const search = useAppStore(state => state.search)
  const lastUsername = useAppStore(state => state.lastUsername)
  const searching = useAppStore(state => state.searching)

  const notFound = useMemo<boolean>(() => {
    if (searching) {
      return false
    }

    if (!user && !!lastUsername && username === lastUsername) {
      return true
    }

    return false
  }, [user, username, lastUsername, searching])

  useEffect(() => {
    if (notFound) {
      inputRef.current?.select()
      inputRef.current?.focus()
    }
  }, [notFound])

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === 'Enter') {
      await search()
    }
  }

  return (
    <div
      className={`${styles.userSearchInput} ${notFound
        ? styles.noResults
        : ''}`}
    >
      <Image
        src={iconSearch}
        alt=""
        className={styles.iconSearch}
      />
      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Github username"
          className={styles.input}
          value={username}
          onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
          onKeyUp={onKeyUp}
        />
        {notFound && <div className={styles.noResults}>No results</div>}
      </div>
      <UserSearchInputButton />
    </div>
  )
}

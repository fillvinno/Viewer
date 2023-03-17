import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import AddVideoBtn from '../AddVideoBtn/AddVideoBtn'
import Notifications from '../Notifications/Notifications'
import User from '../User/User'

export default function Header() {
  return (
    <div className={styles.header}>
        <SearchBar/>
        <div className={styles.headerBtns}>
          <AddVideoBtn/>
          <Notifications/>
          <User/>
        </div>
    </div>
  )
}
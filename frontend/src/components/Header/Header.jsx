import React from 'react'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import AddVideoBtn from '../AddVideoBtn/AddVideoBtn'
import User from '../User/User'
import logout from '../../img/logout.svg'
import AuthService from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'

export default function Header({user}) {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const response = await AuthService.logout()
      if (response) {
        localStorage.removeItem('token')
        navigate('/login')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className={styles.header}>
        <SearchBar/>
        <div className={styles.headerBtns}>
          <AddVideoBtn/>
          <User user={user}/>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <img src={logout} alt="logout" />
          </button>
        </div>
    </div>
  )
}
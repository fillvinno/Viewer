import React from 'react'
import styles from './User.module.css'
import avatar from '../../img/avatar.png'
import menuArrow from '../../img/menuArrow.svg'
import { Link } from 'react-router-dom'


export default function User({user}) {
  return (
    <Link to={`/channel/${user?.channelId}/featured`} className={styles.avatarMenu}>
        <img className={styles.avatar} src={avatar} alt="avatar" /> {/* insert user img */ }
        <p className={styles.fullname} >{user?.nickname}</p> {/* insert user name */ }
        <img className={styles.menuArrow} src={menuArrow} alt="menuArrow" />
    </Link>
  )
}

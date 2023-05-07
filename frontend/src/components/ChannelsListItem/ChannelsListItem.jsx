import React from 'react'
import styles from './ChannelsListItem.module.css'
import avatar from '../../img/avatar.png'
import { Link } from 'react-router-dom'

export default function ChannelsListItem() {
  return (
    <div className={styles.channelWrap}>
        <Link to='/channel/featured'>
            <div className={styles.avatarWrap}>
                <img src={avatar} alt="avatar" className={styles.avatar}/>
            </div>
            <p className={styles.channelName}>Narihamo</p>
            <p className={styles.subscribersCount}>99999 подписчиков</p>
        </Link>
        <button className={styles.subscribeBtn}>Подписаться</button>
    </div>
  )
}

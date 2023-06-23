import React from 'react'
import styles from './CommentsListItem.module.css'
import ava from '../../img/channelAvatar.png'
import { Link } from 'react-router-dom'

export default function CommentsListItem({comment}) {
  return (
    <div className={styles.wrap}>
        <Link to={`/channel/${comment?.channelId}/featured`} className={styles.commentInfo}>
            <img src={ava} alt="avatar" className={styles.avatar}/>
            <span className={styles.channelName}>{ comment?.channelName }</span>
        </Link>
        <div className={styles.comment}>
            { comment?.text }
        </div>
    </div>
  )
}

import React from 'react'
import styles from './FindedVideosItem.module.css'
import { Link } from 'react-router-dom'
import ava from '../../img/channelAvatar.png'

export default function FindedVideosItem({video}) {
  return (
    <Link to={`/video/${video?.id}`} className={styles.wrap}>
        <img src={`http://localhost:5000/${video?.previewPath}`} alt="preview" className={styles.preview}/>
        <div className={styles.videoInfo}>
            <p className={styles.videoTitle}>{video?.title}</p>
            <p className={styles.views}>{video?.views} просмотров</p>
            <Link to={`/channel/${video?.channelId}/featured`} className={styles.channelInfo}>
                <img src={ava} alt="avatar" className={styles.channelAvatar}/>
                <span className={styles.channelName}>{video?.channelName}</span>
            </Link>
        </div>
    </Link>
  )
}
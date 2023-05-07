import React from 'react'
import { Link } from 'react-router-dom'
import styles from './VideoCard.module.css'
import preview from '../../img/preview.png'
import channelAvatar from '../../img/channelAvatar.png'

export default function VideoCard() {
  return (
    <div className={styles.videoCardWrap}>
      <Link to='/player'>
        <img className={styles.preview} src={preview} alt="preview" />
      </Link>
      <Link to='/channel' className={styles.infoWrap}>
        <p className={styles.videoName}>Adekunle Gold, Davido - High Adekunle Gold, Davido - High Davido Davido Davido Davido High Davido David High Davido David High Davido David</p>
        <p className={styles.videoInfo}>
          <span className={styles.videoViews}>1.2M views</span>
          <span className={styles.videoDate}>2 hours ago</span>
        </p>
        <div className={styles.channelInfo}>
            <img src={channelAvatar} alt="img" width={32} height={32}/>
            <p className={styles.channelName}>Musika</p>
        </div>
      </Link>
    </div>
  )
}

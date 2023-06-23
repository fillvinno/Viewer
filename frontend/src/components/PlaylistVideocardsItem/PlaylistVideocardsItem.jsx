import React from 'react'
import styles from './PlaylistVideocardsItem.module.css'
import { Link } from 'react-router-dom'
import preview from '../../img/preview.png'

export default function PlaylistVideocardsItem({video}) {
  return (
    <div className={styles.wrap}>
      <Link to={`/video/${video?.id}`} className={styles.cardWrap}>
        <img src={`http://localhost:5000/${video?.previewPath}`} alt="preview" className={styles.preview}/>
        <div className={styles.infoWrap}>
          <p className={styles.videoName}>{ video && video?.title }</p>
          <p className={styles.videoInfo}>
            <Link to={`/channel/${video?.channelId}/featured`} className={styles.channelName}>{ video && video?.channelName } </Link>
            <span className={styles.videoViews}>{ video && video?.views } просмотров</span>
          </p>
        </div>
      </Link>
    </div>
  )
}
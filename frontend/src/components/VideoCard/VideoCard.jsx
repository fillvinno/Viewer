import React from 'react'
import { Link } from 'react-router-dom'
import styles from './VideoCard.module.css'
import preview from '../../img/preview.png'
import channelAvatar from '../../img/channelAvatar.png'


export default function VideoCard({video, type}) {
  return (
    <div className={`${styles.videoCardWrap} ${ type == 'channelRelated' && styles.channelVideoCardWrap } ${ type == 'popular' && styles.popularWrap }`}>
      <Link to={`/video/${video.id}`}>
        <img className={styles.preview} src={`http://localhost:5000/${video?.previewPath}`} alt="preview" />
      </Link>
      <Link to={`/channel/${video.channelId}`} className={styles.infoWrap}>
        <p className={styles.videoName}>{ video?.title }</p>
        <p className={styles.videoInfo}>
          <span className={styles.videoViews}>{ video?.views }  просмотров</span>
          {/* <span className={styles.videoDate}>2 hours ago</span> */}
        </p>
        <div className={styles.channelInfo}>
            <img src={channelAvatar} alt="img" width={32} height={32}/>
            <p className={styles.channelName}>{ video.channelName }</p>
        </div>
      </Link>
    </div>
  )
}

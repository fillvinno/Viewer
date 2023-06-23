import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PlaylistListItem.module.css'

export default function PlaylistListItem({playlist}) {
  return (
    <div className={styles.playlistWrap}>
      <Link to={`/playlist/${playlist?.id}`}>
        <div className={styles.viewWrapper}>
          <img src={`http://localhost:5000/${playlist?.previewPath}`} alt="playlist" className={styles.preview}/>
          <div className={styles.blackOverlay}>
            <span>{playlist?.videosId?.length}</span>
            <span className='icon-saved'></span>
          </div>
          <div className={styles.playlistOverlay}></div>
        </div>
        <p className={styles.playlistName}>{playlist?.title}</p>
      </Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PlaylistListItem.module.css'
import preview from '../../img/preview.png'

export default function PlaylistListItem() {
  return (
    <div className={styles.playlistWrap}>
      <Link to='/playlist'>
        <div className={styles.viewWrapper}>
          <img src={preview} alt="playlist" className={styles.preview}/>
          <div className={styles.blackOverlay}>
            <span>32</span>
            <span className='icon-saved'></span>
          </div>
          <div className={styles.playlistOverlay}></div>
        </div>
        <p className={styles.playlistName}>Фляма пикает мид и опять его убивают</p>
      </Link>
    </div>
  )
}

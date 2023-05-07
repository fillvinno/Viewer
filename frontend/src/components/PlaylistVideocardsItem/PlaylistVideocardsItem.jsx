import React from 'react'
import styles from './PlaylistVideocardsItem.module.css'
import { Link } from 'react-router-dom'
import preview from '../../img/preview.png'

export default function PlaylistVideocardsItem() {
  return (
    <div className={styles.wrap}>
      <Link to='/video:1' className={styles.cardWrap}>
        <img src={preview} alt="preview" className={styles.preview}/>
        <div className={styles.infoWrap}>
          <p className={styles.videoName}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolor cumque voluptatum maxime tenetur fugiat </p>
          <p className={styles.videoInfo}>
            <Link to='/channel' className={styles.channelName}>narihamo</Link>
            <span className={styles.videoDate}>1 год назад</span>
            <span className={styles.videoViews}>99 тыс. просмотров</span>
          </p>
        </div>
      </Link>
    </div>
  )
}
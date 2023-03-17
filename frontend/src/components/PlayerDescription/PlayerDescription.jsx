import React from 'react'
import styles from './PlayerDescription.module.css'
import {Link} from 'react-router-dom'
import ava from '../../img/channelAvatar.png'

export default function PlayerDescription() {
  return (
    <div className={styles.wrap}>
      <div className={styles.videoInfoWrap}>
        <h1 className={styles.title}>
          UI Design Trends 2023
        </h1>
        <div className={styles.info}>
            <span className={styles.views}>1.2M views</span>
            <span className={styles.timeAgo}>2 hours ago</span>
        </div>
        <div className={styles.videoBtns}>
            <div className={styles.leftSideBtns}>
              <Link to='/channel'><img src={ava} className={styles.channelPhoto}/></Link>
              <Link className={styles.channelName} to='/channel'>DesignSense</Link>
              <button className={styles.followBtn}>Follow</button>
            </div>
            <div className={styles.rightSideBtns}>
              <button className={`${styles.likeBtn} ${styles.btns}`}>
                <span className='icon-like'></span>
                23K
              </button>
              <button className={`${styles.playlistBtn} ${styles.btns}`}>
                <span className='icon-saved'></span>
              </button>
              <button className={`${styles.shareBtn} ${styles.btns}`}>
                <span className='icon-share'></span>
              </button>
            </div>
        </div>
        <hr className={styles.underline}/>
        <div className={styles.description}>
            2020 was very unpredictable as covid swept the world, and without exception, every industry was affected by it one way or another. In our trend collection, we highlighted only trends that solely focused on the looks of a user interface.
            <br /><br />
            So let’s see a short recap on the most popular UI trends of 2020 that will continue to be the main defining elements in 2021.
        </div>
      </div>  
    </div>
  )
}

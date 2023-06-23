import React from 'react'
import styles from './FindedVideos.module.css'
import FindedVideosItem from '../FindedVideosItem/FindedVideosItem'

export default function FindedVideos({videos}) {
  return (
    <div className={styles.wrap}>
        {
            videos.map(video => (
                <FindedVideosItem className={styles.video} key={video.id} video={video}/>
            ))
        }
    </div>
  )
}
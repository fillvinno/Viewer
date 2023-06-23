import React from 'react'
import styles from './PlaylistVideocards.module.css'
import PlaylistVideocardsItem from '../PlaylistVideocardsItem/PlaylistVideocardsItem'

export default function PlaylistVideocards({videos}) {
  console.log(videos)
  return (
    <div className={styles.wrap}>
      {videos && videos.map(video => (
        <PlaylistVideocardsItem key={video?.id} video={video}/>
      ))}
    </div>
  )
}

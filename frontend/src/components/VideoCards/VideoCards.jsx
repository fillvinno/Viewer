import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import styles from './VideoCards.module.css'

export default function VideoCards({title, videos}) {
  return (
    <div className={styles.wrap}>
        <h2 className={styles.heading}>{title}</h2>
        <div className={title === 'For you' ? styles.videoCardsRecommendations : title === 'Trending' ? styles.videoCardsTrending : styles.videoCardsRelated}>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    </div>
  )
}

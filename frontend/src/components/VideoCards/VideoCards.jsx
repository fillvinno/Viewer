import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import styles from './VideoCards.module.css'

export default function VideoCards({title, videos, type}) {
  return (
    <div className={styles.wrap} id={title === 'Популярное' ? 'trending' : null}>
        <h2 className={styles.heading}>{title}</h2>
        <div className={title === 'Популярное' ? styles.videoCardsRecommendations : title === 'Видео' ? styles.videoCardsTrending : title === 'Видео канала' ? styles.channelFeatured : styles.videoCardsRelated}>
            {
              videos && videos.map(el => <VideoCard key={el.id} video={el} type={type}/>)
            }
        </div>
    </div>
  )
}

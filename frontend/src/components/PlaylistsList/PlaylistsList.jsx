import React from 'react'
import PlaylistListItem from '../PlaylistListItem/PlaylistListItem'
import styles from './PlaylistsList.module.css'

export default function PlaylistsList() {
  return (
    <div className={styles.playlistsWrapper}>
      <PlaylistListItem/>
      <PlaylistListItem/>
      <PlaylistListItem/>
      <PlaylistListItem/>
      <PlaylistListItem/>
      <PlaylistListItem/>
    </div>
  )
}
import React from 'react'
import styles from './PlaylistModalListItem.module.css'
import PlaylistService from '../../services/PlaylistService'

export default function PlaylistModalListItem({playlist, videoId, active, setActive}) {
  const addVideoToPlaylist = async () => {
    try {
      const response = await PlaylistService.addVideoToPlaylist(playlist.id, videoId)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className={styles.wrap} onClick={() => {addVideoToPlaylist(); setActive(false)}}>
        <span className={styles.playlistOwner}>{playlist?.channelName} - </span>
        <span className={styles.title}>{playlist?.title}</span>
    </div>
  )
}
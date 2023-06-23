import React from 'react'
import styles from './PlaylistModalList.module.css'
import PlaylistModalListItem from '../PlaylistModalListItem/PlaylistModalListItem'

export default function PlaylistModalList({playlists, videoId, playlistId, active, setActive}) {
  return (
    <div className={styles.wrap}>
        {playlists && playlists.map(playlist => (
          <PlaylistModalListItem key={playlist.id} playlist={playlist} videoId={videoId} playlistId={playlistId} active={active} setActive={setActive}/>
        ))}
    </div>
  )
}
